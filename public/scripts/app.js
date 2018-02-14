'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var app = {
    title: 'My first compiled react site',
    subtitle: 'List',
    options: ['Item One', 'Item Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options!'
    ) : React.createElement(
        'p',
        null,
        'No options!'
    )
);

var user = {
    name: 'David',
    age: 26,
    location: 'Ger'
};
function getLocation(location) {
    if (location == null || location === '') {
        return undefined;
    }
    return React.createElement(
        'p',
        null,
        'LOCATION: ',
        location.toUpperCase()
    );
}
var templatePersonalInfo = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'NAME: ',
        user.name ? user.name.toUpperCase() : 'ANONYMOUS'
    ),
    React.createElement(
        'p',
        null,
        'AGE: ',
        user.age
    ),
    getLocation(user.location.toUpperCase())
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templatePersonalInfo, appRoot);
