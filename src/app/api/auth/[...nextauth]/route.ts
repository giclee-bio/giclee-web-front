import NextAuth from 'next-auth/next'
import DiscordProvider from 'next-auth/providers/discord'

const handler = NextAuth({
  callbacks: {
    async signIn() {
      // TODO: 新規ユーザーだったら登録画面にリダイレクトさせる
      return true
    },
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    }),
  ],
})

export { handler as GET, handler as POST }
