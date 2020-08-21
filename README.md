# IBM Watson Chatbot Demo

This application demonstrates how to use IBM Watson Assistant using node.js

There are 2 servers and 1 Front-End:

- A [client server](./app/server) connecting the Client to IBM Watson Assistant
- A [backend server](./backend) used for accepting and processing Webhook requests from IBM Watson Assistant for dynamic responses.
- A [React Front-End](./app/client) using React Hooks and asynchronous API calls to the client server to render the client input and IBM Watson Assistance responses.

## Getting Started

### Prerequisites

- [Heroku Account](https://heroku.com/)
- Heroku CLI (`npm i -g heroku`)
- [MongoDB Cloud Account](https://cloud.mongodb.com)
- [IBM Cloud Account](https://cloud.ibm.com)
- Setup your .env files in [backend](./backend), [client](./app/client), and [client server](./app/server)

### Installing

- ```bash
  cd backend && npm i && cd ../app/client && npm i && cd ../server && npm i
  ```
- ```bash
  npm i -g heroku
  ```
  or
  ```bash
  sudo npm i -g heroku
  ```
  for Mac.

### Creating a MongoDB Cluster

- Login to you [MongoDB Cloud](https://cloud.mongodb.com) account and create a project
- Once your cluster is created:
  - Click Connect and Create a User
  - Allow any IP to connect to the Cluster
  - Click Connect to Your Application > Copy the Connection String
- Paste the Connection String into your .env file in [backend](./backend)
- Replace the password with your password your created for the cluster

### Creating an IBM Watson Assistant Chatbot

- Login to your [IBM Cloud Account](https://cloud.ibm.com) account
- Click create a new service and search for Watson Assistant
- Setup the new Assistant, and click Launch Watson Assistant
- Import the sample skill (See [client server README](./app/server/README.md))

### Deploying Your Own Backend

See [Backend's README](./backend/README.md)

### Starting The Application

- In a new terminal window,

```bash
cd app/server && npm run dev
```

- In a second terminal window

```bash
cd app/client && npm start
```

- In a third terminal window\*\*

```bash
cd backend && npm run dev
```

\*\***You do not need to run this if you have your backend deployed**

### Testing the Application

- Send a `POST` request to your backend server on the `/api/v1/student` route containing a [Student](./backend/models/Student.js) Object in the body to create a student in your MongoDB Cluster:
  - ```json
    {
      "name": "First Last",
      "emplid": 9999999,
      "email": "john.doe@university.edu",
      "address": {
        "street": "123 Sesame Street",
        "city": "NotATown",
        "state": "NY",
        "zip": 00000,
        "apt_number": null
      },
      "credits_completed": 110,
      "ant_grad_year": 2022,
      "major": "Computer Science",
      "gpa": 3.49,
      "completed_courses": [
        {
          "course": {
            "name": "CSC 346"
          },
          "semester": "Summer 2020",
          "professor": "Sally Doe",
          "grade": "C"
        },
        {
          "course": {
            "name": "CSC 347"
          },
          "semester": "Summer 2020",
          "professor": "Sally Doe",
          "grade": "A-"
        }
      ]
    }
    ```
- Sent a `POST`request to your backend server on the `/api/v1/majors` route containing a [Major](./backend/models/Major.js) Object in the body to create a major in your MongoDB Cluster:
  - ```json
    {
      "name": "Computer Science",
      "required_classes": [
        {
          "name": "CSC 486"
        },
        {
          "name": "MTH 311"
        }
      ],
      "electives": [
        {
          "name": "CSC 225"
        },
        {
          "name": "CSC 226"
        }
      ]
    }
    ```
