# app-template-remix

This is a template repository for quickly bootstrapping a Noona HQ app.

It is built on the popular framework Remix which makes it both simply to render complex UIs with React as well as creating API endpoints for consuming webhooks.

## Prisma

The template includes [Prisma](https://www.prisma.io/) for making it easier to work with your database of choice. Prisma supports all popular database engines, but you can also use another ORM or database library.

The template is by default configured for MongoDB as that is our database of choice. We highly recommend using [MongoDB Atlas](https://www.mongodb.com/atlas/database) but you are free to use the database you prefer.

### Prisma generate client

The Prisma client is generated generated from the file `prisma/schema.prisma`. Run this command to intialize Prisma in the project:

    bun prisma-generate

### Prisma schema changes

Run this to push schema changes to the database, this will create the collection and relevant indices.

    bun prisma db push

## API Client

 The Noona HQ API client is generated from the OpenAPI spec. Run this command to generate the API client:

    bun orval-generate
