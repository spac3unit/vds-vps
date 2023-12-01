import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
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

})

export { handler as GET, handler as POST }