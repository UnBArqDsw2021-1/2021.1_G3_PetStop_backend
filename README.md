# 2021.1_G3_PetStop_backend

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-purple.svg)](https://conventionalcommits.org)

## Documentação

Nossa documentação pode ser encontrada [aqui](https://github.com/UnBArqDsw2021-1/2021.1_G3_PetStop_docs)

## Como rodar a aplicação

### Requisitos

* [Docker](https://docs.docker.com/engine/install)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Node/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Para iniciar

```
make run
```

### Para finalizar

```
make down
```

Obs.: Requer nível de permissão similar ao Docker

## Executando analíse de qualidade estática localmente

```
make up-sonar
yarn sonar
make down-sonar
```

Obs.: Requer nível de permissão similar ao Docker

## Executando testes

```
yarn test
```

## Executando o lint

```
yarn lint
```