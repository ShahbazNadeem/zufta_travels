import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.get(
            "https://67ffac3db72e9cfaf7257b92.mockapi.io/signup"
          );
          const users = response.data;
          const user = users.find(
            (u) =>
              u.email === credentials.email &&
              u.password === credentials.password
          );

          if (user) {
            const { password, ...userWithoutPass } = user;
            return userWithoutPass;
          } else {
            return null; // Invalid credentials
          }
        } catch (error) {
          console.error("Error while checking credentials:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export default NextAuth(authOptions);
