# React Todo App

Simple todo app with pure react.

## Install

* Node/NPM
* Webpack

`npm install`

## Running

### Dev

`npm run dev`

Access http://localhost:8080/

### Prod

`npm run production`

## Debugging

### On index

```
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);
```

### Chrome

* Redux Dev Tools