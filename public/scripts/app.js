'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'MyFirstCompiledReact!'
  ),
  React.createElement(
    'p',
    null,
    'MyFirstReactParagraph'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
