import { CustomUser } from "@/global";

type Params = {
  email: string;
  password: string;
};

export async function authenticate(params: Params): Promise<CustomUser | null> {
  const { email, password } = params;

  // simulando uma resposta de erro
  // para a exibição da mensagem funcionar, voce precisa
  // alterar sua service para retornar o erro no formato do exemplo
  if (email !== "valid@email.com" || password !== "Valid@123") {
    throw Error(
      JSON.stringify({
        status: 401,
        error: "Credenciais inválidas",
      }),
    );
  }

  // simulando uma resposta de sucesso
  // aqui vc pode retornar os dados que quiser,
  // mas precisa adicionar tipagem dentro do global.d.ts
  return {
    id: "1",
    image: "https://www.github.com/devalefe.png",
    name: "Fulano de Tal",
    email: "valid@email.com",
  };
}
