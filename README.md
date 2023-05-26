![alt text](dashboard.jpg)

# SportSee

Welcome to the SportSee-fullApp repository! 👋
This repository contains the full application code for SportSee, a comprehensive fitness tracking and analysis platform that uses [Recharts](#https://recharts.org/en-US/) to visually display the user's data regarding their fitness condition. SportSee allows users to track their physical activities, monitor their fitness progress, and gain valuable insights into their health and performance.

## Table of Contents {#top}

- [Introduction](#intro)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contribute)
- [License](#license)

## Introduction {#intro}

SportSee is designed to provide a holistic view of an individual's fitness journey.

This repository contains the complete codebase for the SportSee application, including both the front-end and back-end components. The front-end is built with React, while the back-end is powered by [Node.js](#https://nodejs.org/en) and [Express.js](#https://expressjs.com/). The application uses a RESTful API to communicate between the front-end and back-end.

>
>The frontend has two operating modes: =="API" and "MOCK"==
>: When the "API" mode is set to true, the 'dataFetcher' service will use axios to bring the data from the back-end. However, if >set to false (offline mode) it will import the data without the >need of an API or back-end.

`services/dataFetcher.js`

![alt text](api-mode.png)

## [🔝](#top)

##Features {#features}
SportSee-fullApp offers a wide range of features to help users monitor and improve their fitness journey. Some key features of the application include:

- **Activity Tracking:** Users can track their physical activities such as running, cycling, swimming, and more.

- **Health Metrics:** SportSee allows users to monitor their health metrics, including heart rate, sleep patterns, and stress levels.

- **Personalized Insights:** Based on the collected data, SportSee generates personalized insights and recommendations to help users achieve their fitness goals.

- **Goal Setting:** Users can set specific fitness goals, such as weight loss, endurance training, or muscle gain.

## [🔝](#top)

##Installation {#installation}
To run the SportSee application locally, follow these steps:

### 1. Clone it on your computer
`git clone https://github.com/lostmart/sportSee-fullApp.git`

### 2. Install dependencies for the front-end:

- `cd frontend`
- `npm install`

#### Front-end dependencies

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@uiball/loaders": "^1.2.6",
    "axios": "^1.4.0",
    "jsdoc": "^4.0.2",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.1",
    "react-scripts": "5.0.1",
    "recharts": "^2.6.2",
    "web-vitals": "^2.1.4"
}
```

**Note:** The front end is set to run on port 3006 through the scipt "start"

```json
"start": "PORT=3006 react-scripts start",
```

### 4. Install dependencies for the back-end:

#### 4.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

#### 4.2 Launching the project

- `cd ../backend`
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

###Back-end dependencies

```json
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "idx": "^2.5.6"
  },
  "scripts": {
    "dev": "node_modules/.bin/nodemon app/index.js",
    "start": "node app/index.js"
  }
```

## [🔝](#top)

##Contributing {#contribute}
Contributions to SportSee-fullApp are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.


2. Create a new branch for your feature or bug fix:
`git checkout -b feature/your-feature-name`

3. Make your changes and commit them:
`git commit -m "Add your commit message"`

4. Push your changes to your forked repository:
`git push origin feature/your-feature-name`

5. Open a pull request in this repository, and provide a detailed description of your changes.

Please ensure that your code adheres to the existing coding style and conventions used in the project. Additionally, include relevant tests and documentation for your changes to ensure smooth integration.

## [🔝](#top)