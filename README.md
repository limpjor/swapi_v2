# SWAPI - The Star Wars API

## Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

### using serverless-offline to test locally

- Run `serverless offline` o `sls offline` o 

### Project structure


```
.
├── src
│   ├── controllers              
│   │   └── vehiclesController.ts
│   │   
│   ├── models             
│   │   └── vehiclesController.ts
│   │   
│   ├── services             
│   │   └── vehiclesService.ts
│   │   
│   └── handler.ts
│   
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
└── sequelizeConfig.ts          # Configuracion Sequelizq

