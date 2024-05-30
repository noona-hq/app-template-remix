# app-template-react

This is a template repository for quickly bootstrapping a Noona HQ app.

It is built on the popular framework Remix which makes it both simple to render complex UIs with React as well as creating API endpoints for consuming webhooks.

Make sure to follow this guide in the order as it is laid out and not skip any steps.

## Setup

The first thing before you start coding is to set up the project by running the following command:

    ./setup.sh

The project does include internal deployment and build artifacts that are not helpful outside of the Noona deployment cycle, feel free to remove those from your project.

### Environment

The inital `.env` includes configuration values for the Noona production environment and for MongoDB running locally on port 27017. The only thing you need to fill in is the `CLIENT_ID` and `CLIENT_SECRET` variables which you got when creating an app in Noona HQ.

## Database

### Create a free MongoDB Atlas cluster

The template is by default configured for MongoDB as that is our database of choice.

It is recommended that you start by creating a free MongoDB Atlas cluster. Directions for doing so are here https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/

You are free to use the database you prefer if MongoDB is not your cup of tea.

Make sure to take note of the username and password generated during creation of the MongoDB cluster as well as the connection string provided.

Replace the connection string `DATABASE_URL` in `.env` with the one provided when creating the cluster. Make sure that the username and password are a part of the string and that the database name is included as well. The database name can be anything you want, but we recommend using the name of the project as the database name.

This is the general structure of the MongoDB connection string:

    mongodb+srv://<username>:<password>@beyondthebasics.abcde.mongodb.net/<db-name>

With real information it would look something like this:

    mongodb+srv://myuser:mypassword@beyondthebasics.abcde.mongodb.net/mydb

### Prisma

The template includes [Prisma](https://www.prisma.io/) for making it easier to work with your database of choice. Prisma supports all popular database engines, but you can also use another ORM or database library.

### Prisma generate client

The Prisma client is generated generated from the file `prisma/schema.prisma`. Run this command to intialize Prisma in the project:

    yarn prisma-generate

### Prisma schema changes

Run this to push schema changes to the database, this will create the collection and relevant indices.

    yarn prisma db push

You will have to run this command everytime you make changes to the `prisma/schema.prisma` file.

## API Client

The Noona HQ API client is generated from the OpenAPI spec. Run this command to generate the API client:

    yarn orval-generate

This technically only needs to be run once when the project is being setup but to make sure you have the most up to date version of the API client, it is recommended to run this every now and then.

## Development

Run the following command to run the application in development mode

    yarn dev

### UI

This project uses React, Tailwindcss and shadcn/ui. It is highly recommended to use this stack as is unless you have a strong preference for something else.

### Troubleshooting

Make sure that you go through the steps in this guide once more and see if you missed one.
