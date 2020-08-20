# IBM Watson Chatbot Demo

## Getting Started

### Prerequisites

- [Heroku Account](https://heroku.com/)
- Heroku CLI (`npm i -g heroku`)
- [MongoDB Cloud Account](https://cloud.mongodb.com)

### Starting The Application

- Set your MONGO_URI env variable
- Set your API_URL env variable
- Set all of your Watson env variables
- If you do not have the backend deployed, `cd backend && npm i && npm run dev`
- In a new terminal window, `cd app/server && npm i && npm run dev`
- In a third terminal window `cd app/client && npm i && npm start`

### Deploying Your Own Backend

#### Creating a MongoDB Cluster

- Login to you MongoDB Cloud account and create a project
- Once your cluster is created:
  - Click Connect and Create a User
  - Allow any IP to connect to the Cluster
  - Click Connect to Your Application > Copy the Connection String
- Paste the Connection String into your .env file in [backend](./backend)
- Replace the password with your password your created for the cluster

#### Deploying the Backend Service to Heroku

- Login to heroku
- Create a new project
- Follow the instructions on the screen to setup and deploy the project

###
