import { DefaultUser } from "next-auth";

interface CustomUser extends DefaultUser {
  // aqui vc adiciona os dados que vc precisa do user
  // assim vc pode usá-los na aplicação sem erro de tipagem
}

declare module "next-auth" {
  interface Session {
    user?: CustomUser;
  }
}
