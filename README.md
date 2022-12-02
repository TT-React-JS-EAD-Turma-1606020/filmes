# Aula 3 e Aula 4

- Desenvolvimento de uma aplicação de listagem de filmes
- Fixação dos conceitos:
  - useEffect
  - useState
  - Chamadas à APIs
  - MUITO JSX
  - Componentes
  - Props entre componentes
- Novos conceitos:
  - Controle de input
  - Passagem de funções para componentes

# Aula 5

[x] - Fazer botão dinâmico
[x] - Separar o componente de Input
[x] - Fazer um componente utilizar outro componente

# Aula 6

- Criação da pasta Pages
- Separação de páginas e estilos das páginas
- Criamos uma página somente para detalhes de filme, uma página dinâmica
- Adicionamos uma biblioteca no projeto de filmes: Axios!

# Links uteis

https://axios-http.com/ptbr/docs/intro

#d7262d
#333333
#141414

- Base URL: https://6348cc5ea59874146b110e79.mockapi.io

- Obter a listagem de posts:

  - Método HTTP: GET
  - Endpoint: /posts
  - Resposta:
    [
    {
    "createdAt": "2022-11-25T21:50:18.179Z",
    "description": "Aqui está a descrição",
    "title": "Aqui está o título",
    "author": "Luciel",
    "id": "1"
    }
    ]

- Cadastrar um post:
  - Método HTTP: POST
  - Endpoint: /posts
  - Corpo do JSON que precisa ser enviado:
    {
    "description": "Aqui está a descrição",
    "title": "Aqui está o título",
    "author": "Luciel"
    }
