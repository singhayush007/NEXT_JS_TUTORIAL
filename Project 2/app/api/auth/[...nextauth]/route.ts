import authOptions from "@/lib/authentication"
import NextAuth from "next-auth/next"
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


// authOptions ek global configuration object hai jise NextAuth() function use karta hai authentication manage karne ke liye 🔐


// NextAuth() function ko authOptions diya gaya (jo config handle karta hai)

//GET aur POST methods dono handle karega (login/logout/session refresh)