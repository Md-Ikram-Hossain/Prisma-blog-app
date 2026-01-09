import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false
      },

      phone: {
        type: "string",
        required: false
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false

      }


    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  emailVerification: {
    sendOnSignUp:true,
    autoSignInAfterVerification:true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
   
      try{


           const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`

      const info = await transporter.sendMail({
        from: '"Prisma Blog" <PrismaBlog@ethereal.email>',
        to: user.email,
        subject: "Please verify your email",
        
        html: `    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background:#4f46e5; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0;">Prisma Blog</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px; color:#333;">
              <h2 style="margin-top:0;">Verify your email address</h2>

              <p style="font-size:15px; line-height:1.6;">
                Hello ${user.name} Thanks for signing up for <strong>Prisma Blog</strong>.
                Please confirm your email address by clicking the button below.
              </p>

              <div style="text-align:center; margin:30px 0;">
                <a href="${verificationUrl}"
                   style="
                     background:#4f46e5;
                     color:#ffffff;
                     padding:14px 28px;
                     text-decoration:none;
                     border-radius:6px;
                     font-size:16px;
                     display:inline-block;
                   ">
                  Verify Email
                </a>
              </div>

              <p style="font-size:14px; color:#555;">
                If the button doesn’t work, copy and paste this link into your browser:
              </p>

              <p style="font-size:13px; word-break:break-all;">
                <a href="${verificationUrl}" style="color:#4f46e5;">
                  ${url}
                </a>
              </p>

              <hr style="border:none; border-top:1px solid #eaeaea; margin:30px 0;" />

              <p style="font-size:13px; color:#777;">
                This verification link will expire in 24 hours.
                If you didn’t create an account, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#888;">
              © ${new Date().getFullYear()} Prisma Blog. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
      });

      console.log("Message sent:", info.messageId);

      } catch(err){
             console.error(err)
             throw err;
      }


    },
  },


    socialProviders: {
        google: { 
            prompt:"select_account consent",
            accessType:"offline",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }, 
    },

});