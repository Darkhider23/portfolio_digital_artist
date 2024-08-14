<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Clone the repository:

git clone https://github.com/your-username/portfolio-backend.git
cd portfolio-backend

# Install dependencies:

npm install
# or
yarn install

# Create a .env file at the root of your project and add the following environment variables:

DATABASE_HOST=localhost
DATABASE_PORT=5432


MONGODB_URI=mongodb+srv://guest:vezivapp@mydatabase.enc6jmy.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase

# Run the development server:

npm run start:dev
# or
yarn start:dev

# Project Structure
The project is structured as follows:

portfolio-backend/
├── src/
│   ├── modules/
│   │   ├── work/
│   │   │   ├── dto/
│   │   │   ├── work.controller.ts
│   │   │   ├── work.service.ts
│   │   │   ├── work.schema.ts
│   │   │   └── ...
│   ├── common/
│   ├── app.module.ts
│   ├── main.ts
│   └── ...
├── .env
├── package.json
├── README.md
└── ...

# src/modules/: Contains feature modules (e.g., work module for managing works).
# src/common/: Contains shared services, guards, and other common functionality.
# app.module.ts: The root module of the application.
# main.ts: The entry point of the application.
# Environment Variables

MONGODB_URI: Connection string for MongoDB.
PORT: Port on which the server will run.

Database Setup

Ensure MongoDB is installed and running. You can use a local instance or a cloud service like MongoDB Atlas.
Update the MONGODB_URI in your .env file to point to your MongoDB instance.

# Available Scripts
In the project directory, you can run:

npm run start: Starts the application in production mode.
npm run start:dev: Starts the application in development mode with hot-reloading.
npm run build: Builds the application for production.
npm run lint: Lints the codebase using ESLint.

# API Endpoints
Works
GET /works: Retrieve all works with optional pagination.
GET /works/:id: Retrieve a specific work by ID.
POST /works: Create a new work. Requires title, description, imageUrl, clientUrl, and status in the request body.
PATCH /works/:id: Update a work by ID. Supports partial updates.
DELETE /works/:id: Delete a work by ID.
PATCH /works/:id/status: Update the status of a work by ID. Accepts status in the request body.

# Example Request
Create a new work:

POST /works
Content-Type: application/json

{
  "title": "New Artwork",
  "description": "A description of the artwork",
  "imageUrl": "work_images/new_artwork.jpg",
  "clientUrl": "http://example.com",
  "status": "displayed"
}

# File Uploads
The backend supports file uploads for work images. Files are stored in the public/work_images directory. When creating or updating a work, the imageUrl field should contain the relative path to the uploaded file.

# Troubleshooting

Database Connection Issues: Check if MongoDB is running and ensure the MONGODB_URI is correct.
File Upload Errors: Verify that the public/work_images directory has the correct permissions.
CORS Issues: Ensure that CORS settings are properly configured if the frontend and backend are hosted on different domains.