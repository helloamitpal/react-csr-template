# React-CSR-Template

This is a React based client side rendering boilerplate.

In client side rendering (CSR), you are completely running ReactJS on the browser. The initial HTML rendered by the server is a placeholder and the entire UI is rendered in the browser once all your scripts load.

[Github page](https://amit040386.github.io/react-csr-template/)

## Advantages of CSR

- **No Full Page Reload Required**: Client-side rendering avoids making unnecessary requests for a full page when only a portion of the page has changed. This is especially helpful in a world that’s increasingly browsing via mobile networks with high latency. It makes sure fast website rendering after the initial load.

- **Lazy Loading**: Client-side rendering supports lazy loading sections of your application to save bandwidth & speed initial load. For example, you can load additional records, images, and ads as the user scrolls down, or as the user changes their search parameters, all without performing a full post-back.

- **Rich Interactions**: Client-side rendering supports rich, animated interactions, transformations, and transitions. Fade a row out on delete, or fade a dialog into view.

- **Easy Deployments**: Static files are easy to deploy. You don’t necessarily need to perform a monolithic build to generate new binaries when a small change occurs.

## When you should not consider CSR

- If high SEO (Search engine optimisation) is essential to increase the visibility of the web application to the users of a search engine.

- If you need faster initial loading. Then CSR is not recommended. Server side rendering could be a wise approach.

## Demo

This boilerplate code has been developed on top of create-react-app template.

To know more about create-react-app, follow the documentation.

[create-react-app documentation](https://github.com/facebook/create-react-app#readme)

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

## Features of this template

- Complete UI architecture
- Centralised HTTP(S) request and response interceptor
- Progressive web app (PWA)
- Offline support with service worker
- Code splitting with react-loadable
- Redux data flow
- React hooks
- Hot module reloading (HMR) for local development
- React memo to stop redundant rendition
- Error boundary to catch unexpected UI errors
- Modular and functional programming paradigm used
- Common and extensible config
- EsLint
- CSS pre-processor
- Centralised color variables
- Test case setup with Jest
- Redux extension for better local debugging

## How to run this template

First clone project and install dependencies

```sh
$ mkdir ProjectName && cd ProjectName
$ git clone https://github.com/amit040386/react-csr-template
$ cd react-csr-template
$ npm install
```

Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config/default.js in root folder and update API Key.

```javascript
{
  API_KEY: 'enter-your-api-key';
}
```

To run on local

```sh
$ npm start
```
Default port number will be 3000 but if that not available then it will automatically take a unique port number and the application will be opened in the browser

To change the port, create a .env in root folder and add your desired port number. E.g.

```javascript
PORT=4566
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

## License

This project is licensed under the MIT license, Copyright (c) 2019 Amit Pal. For more information see LICENSE.md.
