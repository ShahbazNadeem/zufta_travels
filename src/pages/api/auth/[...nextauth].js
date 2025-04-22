import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Example mock user (you'd usually query your DB here)
        const user = {
          id: "1",
          name: "John Smith",
          email: "jsmith@example.com",
          password: "123456" // In real apps, NEVER store plain text passwords!
        };

        if (
          credentials.username === user.email &&
          credentials.password === user.password
        ) {
          const { password, ...userWithoutPass } = user;
          return userWithoutPass; // Return user data without password
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/login", // Optional: custom login page
  },
  session: {
    strategy: "jwt"
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
    }
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export default NextAuth(authOptions);
