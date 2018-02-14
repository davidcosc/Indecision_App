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
var user = {
    name: 'David',
    age: 26,
    location: 'Ger'
};
var templatePersonalInfo = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'NAME: ',
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'AGE: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'LOCATION: ',
        user.location.toUpperCase()
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templatePersonalInfo, appRoot);
