# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pure Component
In React, we can create a component by extending the PureComponent class. A Pure Component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state
of the component. If there is no difference, the component is not re-rendered thereby providing a performance boost.

