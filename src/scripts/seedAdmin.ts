import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";


async function seedAdmin() {
    try {
        console.log("*****admin seeding  started ******")
       const adminData = {
            name: "Admin1 ",
            email: "admin1@admin.com",
            role: UserRole.ADMIN,
            password:"admin12345",
            emailVerified:true
}
console.log("******checking admin Exist or not *****")
        // check user exist on db or not 
        const existingUser = await prisma.user.findUnique({
            where:{
                email:adminData.email
            }
        });

        if(existingUser){
            throw new Error("User already exists!!!")
        }
        const signUpAdmin = await fetch("http://localhost:3000/api/auth/sign-up/email", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(adminData)
        })
        
        if(signUpAdmin.ok) {
            console.log("*****Admin created")
            await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            })
            console.log("****Email verification status updated!!!")
        }
console.log("****succces*****")
    }catch (error) {
        console.error(error);
    }
}

seedAdmin()