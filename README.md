<div align="center">
  <img alt="Logo" title="#logo" width="300px" src=".github/logo.png"/>
</div>

<a id="sobre"></a>

## :book: Sobre

**Ecoleta** é uma aplicação Web e Mobile para ajudar pessoas a identificarem e a encontrarem pontos de coleta para reciclagem.

Esta aplicação foi construida na trilha **Booster** da **Next Level Week** distribuida pela [Rocketseat](https://rocketseat.com.br/).

<div align="center">
  <img alt="Logo" title="#logo" width="500px" src=".github/capa.svg"/>
</div>

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

<a id="como-usar"></a>

## :fire: Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/);
- [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/);
- [Expo](https://expo.io/learn);



1.  Faça um clone:

```shell
$ git clone https://github.com/samuel-lf/ecoleta.git
```

2. Executando a API:

```
# Entre na pasta server/
$ cd server/

# Instale as dependências
$ npm install

# Crie e popule o banco de dados
$ npm run knex:migrate
$ npm run knex:seed

# Inicie a API
$ npm run dev

# dentro da pasta src/controllers/itemsController.ts
Altere o IP do item image_url para o IP da sua máquina
```

3. Executando o client Web:

```
# Entre na pasta web/
$ cd web/

# Instale as dependências
$ npm install

# Inicie a aplicação web
$ npm run start
```

4. Executando o client Mobile:

```
# Entre na pasta mobile/
$ cd mobile/

# Instale as dependências
$ npm install

# Inicie a aplicação mobile
$ npm start

# Baixe na loja do seu ceular o aplicativo EXPO

# Leia o QRCode aberto no navegador

# dentro da pasta src/services/api.ts
Altere o IP da base_url para o IP da sua máquina
```

<h5 align="center">

  Feito com :heart: por <a href="https://www.linkedin.com/in/samuel-leonel-4a9ab7130/" target="_blank">Samuel Leonel</a>
</h5>