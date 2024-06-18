import { DefaultUser } from "next-auth";

interface CustomUser extends DefaultUser {}

declare module "next-auth" {
  interface Session {
    user?: CustomUser;
  }
}
