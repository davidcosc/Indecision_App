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
var templatePersonalInfo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'DAVID'
    ),
    React.createElement(
        'p',
        null,
        'AGE: 26'
    ),
    React.createElement(
        'p',
        null,
        'LOCATION: GER'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templatePersonalInfo, appRoot);
