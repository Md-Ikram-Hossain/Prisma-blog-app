import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from "../lib/auth";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

/**
 * Extend Express Request type
 */
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: UserRole;
        emailVerified: boolean;
      };
    }
  }
}

const auth =
  (...roles: UserRole[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get user session
      const session = await betterAuth.api.getSession({
        headers: req.headers as Record<string, string>,
      });

      if (!session) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized",
        });
      }

      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: "Email verification required. Please verify your email.",
        });
      }

      req.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role as UserRole,
        emailVerified: session.user.emailVerified,
      };

      // Role-based access control
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden! You don't have permission to access this resource.",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
