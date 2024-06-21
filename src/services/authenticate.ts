import { CustomUser } from "@/global";

type Params = {
  email: string;
  password: string;
};

const VALID_EMAIL = "valid@email.com";
const VALID_PASSWORD = "Valid@123";

export async function authenticate(params: Params): Promise<CustomUser | null> {
  const { email, password } = params;

  // simulando uma resposta de erro
  // para a exibição da mensagem funcionar, voce precisa
  // alterar sua service para retornar o erro no formato do exemplo
  if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
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
  const response = await fetch("https://api.github.com/users/devalefe");

  const userInfo = await response.json();

  return {
    id: userInfo.id,
    image: userInfo.avatar_url,
    name: userInfo.name,
    email: VALID_EMAIL,
  };
}
