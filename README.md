
## Description
Abra dois terminais, um para o Front e outro para o Back. Você vai precisar rodar a aplicação nos 2 terminais. Explico quais comandos rodar nos tópicos abaixo.

## Terminal do Back

```bash
$ cd backend
$ yarn install
$ knex migrate:latest
$ yarn start
$ knex seed:run
```

## Terminal do Front

```bash
$ cd frontend
$ yarn install
$ yarn start
```



