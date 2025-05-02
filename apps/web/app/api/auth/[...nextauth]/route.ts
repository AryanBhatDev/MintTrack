import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from '@workspace/db/client'
import { PrismaAdapter } from "@auth/prisma-adapter";


const handler =  NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID!,
            clientSecret:process.env.GOOGLE_SECRET!,
        })
    ],
    pages: {
        signIn: "/signin",
    },
    session: {
        strategy: "database",
    },
})

export { handler as GET, handler as POST}