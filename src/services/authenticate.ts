import { CustomUser } from "@/global";

type Params = {
  email: string;
  password: string;
};

export async function autenticate(params: Params): Promise<CustomUser | null> {
  const { email, password } = params;

  // simulando uma resposta de erro
  if (email !== "valid@email.com" || password !== "Valid@123") {
    throw Error(
      JSON.stringify({
        status: 401,
        error: "Credenciais inválidas",
      })
    );
  }

  // simulando uma resposta de sucesso
  return {
    id: "1",
    avatar: "https://www.github.com/devalefe.png",
    name: "Fulano de Tal",
    email: "valid@email.com",
    accessToken: "access-token",
    refreshToken: "refresh-token",
  };
}