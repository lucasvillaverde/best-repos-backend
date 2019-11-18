# 🎈 [Backend] - BestRepos - Busque pelos melhores repositórios

##  🔍 Sumário

- [Descrição](#description)
- [Variáveis ambiente](#environment-vars)
- [Rotinas de Teste](#test-routines)
- [Iniciar aplicação](#start-application)



## 📄 <a id="description">Descrição</a>

- Aplicação responsável pela integração e tráfego dos dados relacionados ao sistema BestRepos (sistema de consulta de repositórios do GitHub).

- Tecnologias e bibliotecas utilizadas:

  - NodeJS
  - Nodemon
  - ExpressJS
  - Jest
  - Sequelize

- **Confira aqui o <a href="https://api-best-repos.herokuapp.com/">LIVE DEMO</a>**

- **Rotas**:

  > /repositories

  > /owners



## 🌎 <a id="environment-vars">Variáveis ambiente</a>

- Para a configuração das variáveis ambiente é necessária a criação de um arquivo na pasta raiz da aplicação, que será chamado de **.env**.

- Neste arquivo .env devem estar contidas as seguintes informações, onde o prefixo de cada uma exemplifica o dado a ser inserido.

  - **OBS:** Manter o mesmo padrão de formato do exemplo apresentado.

  - Lembrando que todos os valores são valores EXEMPLO.

    ````
    APP_NAME=BestRepos
    
    # Aplicacao
    PORT=6666
    
    # Banco de dados
    DB_NAME=nome_db
    DB_USERNAME=nomedousuariodobanco
    DB_PASS=senhadobanco
    DB_PORT=9999
    DB_HOST=endereco.banco.app.com
    ````

## 🦾 <a id="test-routines">Rotina de testes</a>

- Tecnologia utilizada para a implementação de TDD:  <a href="https://jestjs.io/">Jest</a>

- As etapas de testes estão são duas:
  - Teste por armazenamento em banco de dados diretamente;
  - Teste por requisição na API utilizando a biblioteca **supertest**

- Com o arquivo **.env.test** já proporcionado, é necessário apenas rodar o comando:

> yarn test

- Aguarde o término dos testes para prosseguir com o início da aplicação.

- **OBS:** Se você estiver utilizando o sistema operacional Windows, é provável que precise utilizar a biblioteca *win-node-env* para conseguir executar o script *yarn test*que atribui o NODE_ENV (ambiente) como desenvolvimento.

  

## 💻 <a id="start-application">Iniciar aplicação</a>

- Após seguir todos os passos, vamos iniciar a aplicação!

- Vamos primeiro ter certeza de que estamos começando do zero:

  - Limparemos todos os processos realizados pelas *migrations*. Para isso, execute o comando:

    - > yarn sequelize db:migrate:undo:all

  - Isto indica que o sequelize irá desfazer todas as *migrations* e limpará sua base de dados!

- Sendo atribuídas corretamente as variáveis ambiente, vamos começar agora pela preparação do banco de dados, rodando nossas *migrations*:

  > yarn sequelize db:migrate

- Após o processo ser concluído, estamos preparados para iniciar nossa aplicação:

  - Ambiente de desenvolvimento (utilizando o *nodemon*):

    > yarn dev

  - Ambiente de produção:

    > yarn start

    








