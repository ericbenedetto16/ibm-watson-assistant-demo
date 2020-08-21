# Client Server

This server accepts information from the [client](../client) and relays the information to IBM Watson Assistant. It leverages Express.js to accept and parse a request from the client. It also uses the ibm-watson package to interact with IBM Watson Assistant.

## Getting Started

### Prerequisites

- Setup an instance of [IBM Watson Assistant](https://cloud.ibm.com/)
- Setup your .env file (see [.env.example](./.env.example))

### Importing the IBM Watson Skill

- Launch your IBM Watson Assistant
- Select your assistant
- On your skill, click the 3 dots and select 'Swap Skill'
- Select 'Import Skill'
- Upload the [skill-My-first-skill.json](../../assets/skill-My-first-skill.json) file\*

**\*Replace the webhook URL with your own URL**

### Installing

- ```bash
  npm i
  ```

### Starting the Server

- ```bash
  npm run dev
  ```
