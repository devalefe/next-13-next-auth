import { DefaultUser } from "next-auth";

interface CustomUser extends DefaultUser {
  // aqui vc adiciona os dados que vc precisa do user
  // assim vc pode usá-los na aplicação sem erro de tipagem
  id: string;
  name: string;
  email: string;
  image: string;
}

declare module "next-auth" {
  interface Session {
    user?: CustomUser;
  }
}
