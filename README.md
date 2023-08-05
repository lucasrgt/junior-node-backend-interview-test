# SPACE X API - MOTHERSHIP BOARD

Aqui é a parte onde tudo funciona na nossa nave. Tome cuidado com os fios, alguns estão entrelaçados.

Esse projeto captura os lançamentos de foguetes da SPACE X e expõe para o mundo.

# ROTAS

GET "/" | Retorna a mensagem padrão

GET "/launches" | Retorna os lançamentos paginados

GET "/launches/stats" | Retorna os dados para os gráficos

GET /launches/results | Retorna o número de sucessos e falhas

# TECNOLOGIAS E TÉCNICAS UTILIZADAS

- Partial Clean Architecture

- NodeJS
- MongoDB

- ESLint
- Commitlint
- Husky Git Hooks
- Git

- Jest

- TSyringe (dependency injection do Typescript)

# EXECUTANDO O PROJETO

1° passo | Execute o comando: yarn install ou npm install
2° passo | Execute o comando: yarn start ou npm run start
