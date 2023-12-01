import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { getServerSession } from "next-auth"

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '588499442517-7570vnjdms06gsmbomboqt6n9cvgaotv.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as any,
            clientSecret: process.env.GITHUB_SECRET as any,
        }),
    ],
    secret: process.env.SECRET,
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, authOptions)
}