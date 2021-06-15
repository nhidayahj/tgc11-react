# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Test React Notes 
In this file: 
- create a Function in React 
    - this type of function is not displayed in the Chrome Developer Tools 
- create a Component (within App.js folder)
    - also a function
    - Start with a ***Capital Letter*** 
    - can be viewed in the Developer Tools
    - to pass arguments, use ***props*** (properties)
    - the attribute is name of the properties
    - you don't have to use all the properties that you specify 
- Create a separate Component file
    - ***REMEMBER*** to export the function 
    - either inline with the function name `export default <function_name>`
    or at the bottom of the function (see AlertBox and MultiplyNum)
    - Exporting a function is also to allow other JS file to use it 
    - Then ***import*** the component in the App.js / or in whatever JS file
    - Naming of components to be same as the File name (for easier refernce & debugging)
- Class-based Components with States
    - Stateful components is a component with its own private variables
    - use ***props*** when we want a component to receive data from the outside itself
    - use ***states*** to store data that only the component has access to 
- Event Handling 
    - 
