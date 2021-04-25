# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pure Component
- In React, we can create a component by extending the PureComponent class. 
- A Pure Component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component. 
- If there is no difference, the component is not re-rendered thereby providing a performance boost.

## Memo
 - React.memo is a higher order component. 
 - If your component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. 
 - This means that React will skip rendering the component, and reuse the last rendered result.

## Refs
 - Refs make it possible to access DOM nodes directly within React
 - Refs are created using React.createRef() and attached to react elements via the refs attribute.
 - They are used in cases where we want to change the value of a child components without use of props and all.

## ForwardRef
 - React forwardRef is a method that allows parent components pass down ('i.e. forward') refs to their children.
 - Using forwardRef in React gives the child component a reference to a DOM element created by its parent component.
 - This then allows the child to read and modify that element anywhere it is being used.