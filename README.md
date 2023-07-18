
## Description
Abra dois terminais, um para o Front e outro para o Back. Você vai precisar rodar a aplicação nos 2 terminais. Explico quais comandos rodar nos tópicos abaixo. Na root, tem um arquivo JSON para você importar na sua ferramenta de requisições à API(Postman, Insomnia)

## Antes de tudo, configure o PostgreSQL na sua máquina
Siga o passo a passo contido nesse link: https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database
Usuário: postgres
Senha: postgres
Servidor padrão: 5432

## Crie o banco na sua máquina. Digite no terminal
```bash
$ psql -h 127.0.0.1 -U  postgres -d postgres
$ CREATE DATABASE BD
```

## Terminal do Back

```bash
$ cd backend
$ yarn install
$ knex migrate:latest
$ knex migrate:rollback
$ knex migrate:latest
$ knex seed:run
$ yarn start
```

## Terminal do Front

```bash
$ cd frontend
$ yarn install
$ yarn start
```



