# React-recipes

This is a sample project that uses react to make a website that allows the user searching recipes from a REST API

## How it looks like

If you want to see how this app works without having to install it, go to the [Wiki](https://github.com/juaamol/react-recipes/wiki) or check this [Live demo](https://juaamol.github.io/react-recipes).

## Technologies

* _react_
* _react bootstrap_: Styling.
* _react router_: Multi page feeling.
* _axios_: Http requests.

## Installation

In the project directory:

If you are using _npm_:

- run `npm install` to install all the dependencies.
- run `npm run start` to start the application, it will be available at [http://localhost:3000](http://localhost:3000) by default

If you are using _yarn_:

- run `yarn install` to install all the dependencies.
- run run `yarn start` to start the application, it will be available at [http://localhost:3000](http://localhost:3000) by default

## Usage

To make this app work, you have to obtain an [EDAMAM](https://www.edamam.com/) API key and API ID, then create a folder called _secret_ inside _src_ and inside _secret_, create a secret.js file.

_src/secret/secret.js_:

```javascript
export const edamamAppId = 'here-your-edamam-api-id';
export const edamamAppKey = 'here-your-edamam-api-key';
```

After this initial setup, run the application and open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
