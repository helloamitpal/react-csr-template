# React-CSR-Template

This is a React based client side rendering boilerplate.

In client side rendering (CSR), you are completely running ReactJS on the browser. The initial HTML rendered by the server is a placeholder and the entire UI is rendered in the browser once all your scripts load.

[Github page](https://amit040386.github.io/react-csr-template/)

It's common components are bucketed into groups of Atoms and Molecules, based loosely on Brad Frost’s [Atomic Web Design principles](https://bradfrost.com/blog/post/atomic-web-design/).

Atoms are the basic building blocks of our web interfaces, while Molecules are singular pieces of functionality comprised of Atoms, and Organisms are relatively complex, distinct sections of web interfaces make up of groups of Atoms and Molecules.

## Advantages of CSR

- **No Full Page Reload Required**: Client-side rendering avoids making unnecessary requests for a full page when only a portion of the page has changed. This is especially helpful in a world that’s increasingly browsing via mobile networks with high latency. It makes sure fast website rendering after the initial load.

- **Lazy Loading**: Client-side rendering supports lazy loading sections of your application to save bandwidth & speed initial load. For example, you can load additional records, images, and ads as the user scrolls down, or as the user changes their search parameters, all without performing a full post-back.

- **Rich Interactions**: Client-side rendering supports rich, animated interactions, transformations, and transitions. Fade a row out on delete, or fade a dialog into view.

- **Easy Deployments**: Static files are easy to deploy. You don’t necessarily need to perform a monolithic build to generate new binaries when a small change occurs.

## When you should not consider CSR

- If high SEO (Search engine optimisation) is essential to increase the visibility of the web application to the users of a search engine.

- If you need faster initial loading. Then CSR is not recommended. Server side rendering could be a wise approach.

## Demo

[To see the demo of this template, click here](https://react-csr-template.herokuapp.com)

## Primary Tech stack

- **React**: The primary UI library
- **Redux**: Redux data flow
- **React-redux**: Integrating React with Redux data flow
- **Redux-thunk**: Redux middleware to support asynchronous operations
- **Redux-persist**: Persist and rehydrate a redux store.
- **Redux-pack**: Redux library to extend various stages (start, success, error, finish, always) of API calling
- **React-loadable**: Code splitting
- **React-router-dom**: SPA routing
- **SASS**: CSS pre-processor
- **Axios**: Javascript library to make rest API call
- **React-helmet**: React library to change header metadata and title
- **Node-sass**: SASS CSS pre-processor
- **Jest**: Testing framework and test runner for unit test cases
- **Enzyme**: React component testing utility
- **Webpack**: Webpack module bundler

## Features of this template

- Complete UI architecture
- Centralised HTTP(S) request and response interceptor
- Progressive web app (PWA)
- Webpack based module bundler
- Production and development ready boilerplate code
- Internationalization or localization support with English and German language
- Used React context to implement Internationalization
- Offline support with service worker
- Code splitting with react-loadable
- Redux data flow
- React hooks
- Hot module reloading (HMR) for local development
- React memo to stop redundant rendition
- Error boundary to catch unexpected UI errors
- Modular and functional programming paradigm used
- Common and extensible config
- EsLint for maintaining uniform coding standards
- CSS pre-processor
- Centralised color variables
- Test case setup with Jest
- Redux extension for better local debugging
- Proxy setup to counter CORS issues if any
- Editor config for maintaining the similar coding indentation even if various editors are used across the team

## Quick start: How to run this template

First clone project and install dependencies

```sh
$ mkdir ProjectName && cd ProjectName
$ git clone https://github.com/amit040386/react-csr-template [YOUR APP NAME]
$ cd [YOUR APP NAME]
$ npm install
```

Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config/default.js in root folder and update API Key.

```javascript
{
  API_KEY: 'enter-your-api-key'
}
```

To run on local

```sh
$ npm run start
```
Default port number is 7009

**NOTE**: To change the port, create a .env in root folder and add your port number as follows.

```javascript
PORT=4566
```

or change the port number in this file: server/util/port.js

**NOTE**: If any new locale texts are added, please re-execute the npm start command

## Unit Testing

Use the following commands to execute the test cases

```sh
$ npm run test
```

## Deployment

Deployment build

```sh
$ npm run build
```

You can deploy this project to:

[Heroku](https://www.heroku.com/)

Steps to follow:

```sh
$ heroku create $APP_NAME --buildpack mars/create-react-app
$ git add .
$ git commit -m "Start deploying create-react-app in heroku"
$ git push heroku master
$ heroku open
```

You can do all these from Heroku dashboard as well.

## Setting up proxy in Heroku deployment, if required

Setting up proxy is required when an API call is made to a different domain. For example, your app is deployed in Heroku domain and you are trying to call the API from https://myexample.abc.com domain. Then the CORS issue would surface to block the response. To counter that CORS issue, proxy setup is required.

These are the steps to be followed while setting up the proxy for the Heroku deployment.

1. Go to Heroku dashboard. Click on settings tab and add this buildpack https://github.com/heroku/heroku-buildpack-static.git

2. There is a file named, static.json file in the root folder. Change the route and origin url as per your requirement.

3. In package.json file, "proxy" property has already been added. This is required for the local development. Please change the proxy url accordingly.

4. Comment out the baseURL property of axios instance in /src/api/apiinterceptor.js file. Though it has already been commented out in this template. This is necessary to make it work.

## What if I don't need this proxy setup

If you don't need proxy setup then make a couple of changes in the template as mentioned below.

- Delete static.json file from the root folder
- Remove "proxy" code snippet from server/index.js file.
- Uncomment the baseURL property while creating the axios instance in /src/api/apiinterceptor.js file.

## How should I check heroku deployment logs

- Open your terminal and type this: heroku logs --tail --app your_app_name

## License

This project is licensed under the MIT license, Copyright (c) 2019 Amit Pal. For more information see LICENSE.md.
