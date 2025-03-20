import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId:
        process.env.NODE_ENV === 'production'
          ? process.env.AUTH_GITHUB_ID
          : process.env.AUTH_GITHUB_LOCAL_ID,
      clientSecret:
        process.env.NODE_ENV === 'production'
          ? process.env.AUTH_GITHUB_SECRET
          : process.env.AUTH_GITHUB_LOCAL_SECRET,
    }),
  ],
})
