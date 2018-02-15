'use strict';

console.log('App.js is running');

//es6 functions example challenge
var multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());

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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var subOne = function subOne() {
    console.log('subOne');
};
var resetCounter = function resetCounter() {
    console.log('resetCounter');
};
var templateCounter = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'count_plus_btn', className: 'btn', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'count_minus_btn', className: 'btn', onClick: subOne },
        '-1'
    ),
    React.createElement(
        'button',
        { id: 'count_reset_btn', className: 'btn', onClick: resetCounter },
        'reset'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateCounter, appRoot);
