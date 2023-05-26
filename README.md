![alt text](dashboard.jpg)

# SportSee

Welcome to the SportSee-fullApp repository! 👋
This repository contains the full application code for SportSee, a comprehensive fitness tracking and analysis platform. SportSee allows users to track their physical activities, monitor their fitness progress, and gain valuable insights into their health and performance.

## Table of Contents

- [Introduction](#intro)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contribute)
- [License](#license)

## Introduction {#intro}

SportSee is designed to provide a holistic view of an individual's fitness journey.

This repository contains the complete codebase for the SportSee application, including both the front-end and back-end components. The front-end is built with React, while the back-end is powered by Node.js and Express.js. The application uses a RESTful API to communicate between the front-end and back-end.

The frontend has two operating modes: =="API" and "MOCK"==
: When "API" set top true, the 'dataFetcher' service will use axios to bring the data from the back-end. However, if set to false (offline) mode will import the data without the need of an API or back-end.

`services/dataFetcher.js`

![alt text](api-mode.png)

---

##Features {#features}
SportSee-fullApp offers a wide range of features to help users monitor and improve their fitness journey. Some key features of the application include:

- **Activity Tracking:** Users can track their physical activities such as running, cycling, swimming, and more. The application collects data on distance, duration, calories burned, and other relevant metrics.

- **Health Metrics:** SportSee allows users to monitor their health metrics, including heart rate, sleep patterns, and stress levels. The application provides visualizations and trends to help users understand their overall health status.

- **Personalized Insights:** Based on the collected data, SportSee generates personalized insights and recommendations to help users achieve their fitness goals. These insights can include workout suggestions, recovery tips, and performance benchmarks.

- **Goal Setting:** Users can set specific fitness goals, such as weight loss, endurance training, or muscle gain. SportSee helps users track their progress towards these goals and provides guidance to stay on track.

---

##Installation {#installation}
To run the SportSee application locally, follow these steps:

1. Intall

> **shell**
> git clone https://github.com/lostmart/sportSee-fullApp.git

2. Install dependencies for the front-end:

   > **shell**
   > cd sportSee-fullApp/clint
   > npm install

###Front-end dependencies

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

Note: The front end is set to run on port 3006 theought the scipt "start"

```json
"start": "PORT=3006 react-scripts start",
```

3. Install dependencies for the back-end:
   > **shell**
   > cd ../server
   > npm install

The front-end should now be accessible at http://localhost:3000. Make sure to start the back-end server as well to enable full functionality.

### Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### Launching the project

- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

### Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

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

---

##Contributing {#contribute}
Contributions to SportSee-fullApp are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   > **shell**
   > git checkout -b feature/your-feature-name

3. Make your changes and commit them:

   > **shell**
   > git commit -m "Add your commit message"

4. Push your changes to your forked repository:

   > **shell**
   > git push origin feature/your-feature-name

5. Open a pull request in this repository, and provide a detailed description of your changes.

Please ensure that your code adheres to the existing coding style and conventions used in the project. Additionally, include relevant tests and documentation for your changes to ensure smooth integration.

---

##License {license}
The SportSee-fullApp repository is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

## FrontEnd Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
