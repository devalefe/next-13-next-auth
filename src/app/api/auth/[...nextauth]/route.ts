import { autenticate } from "@/services/authenticate";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is missing");
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials!;
        return autenticate({ email, password });
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // AQUI VOCÊ PODE SALVAR NO TOKEN TUDO QUE PRECISA DO USUÁRIO

      // console.log("TOKEN:", token);
      // console.log("USER", user);

      // token.id = user.id;
      // token.picture = user.image;
      // token.name = user.name;
      // token.email = user.email;

      return token;
    },
    async session({ session, user }) {
      // AQUI VOCÊ PODE SALVAR NA SESSÃO TUDO QUE PRECISA DO USUÁRIO

      // console.log("SESSION:", session);
      // console.log("USER", user);

      // session.user.id = user.id;
      // session.user?.picture = user.image;
      // session.user?.name = user.name;
      // session.user?.email = user.email;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
