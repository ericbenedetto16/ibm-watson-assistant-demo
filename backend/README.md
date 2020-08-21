# Backend Server

This server accepts Webhook requests from the IBM Watson Assistant to send a dynamic response.

It serves a CRUD API to interact with a MongoDB Cluster specifically with the intent to reference records based on the Student's ID passed by the IBM Watson Assistant Webhook.

## Getting Started

### Prerequisites

- A [MongoDB Atlas](https://cloud.mongodb.com/) Cluster
- Setup your .env file (see [.env.example](./.env.example))

### Installing

- ```bash
  npm i
  ```

### Starting the Server

- ```bash
  npm run dev
  ```

## Deploying the Server

### Pushing to Heroku

If you are deploying to heroku, you must have the heroku-cli installed:

```bash
npm i -g heroku
```

- Create a new project on [heroku](https://heroku.com/)
- Follow the instructions using heroku cli to deploy your application
