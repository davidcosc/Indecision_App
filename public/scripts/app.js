'use strict';

console.log('App.js is running.');
var appRoot = document.getElementById('app');

//es6 functions example challenge
// const multiplier = {
//     numbers: [1, 2, 3, 4],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((number) => number * this.multiplyBy);
//     }
// };
// console.log(multiplier.multiply());

//counter example with custom render function
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne');
// };
// const subOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('subOne');
// };
// const resetCounter = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('resetCounter');
// };
// const renderCounterApp = () => {
//     const templateCounter = (
//         <div>
//             <h1>count: {count}</h1>
//             <button id="count_plus_btn" className="btn" onClick={addOne}>+1</button>
//             <button id="count_minus_btn" className="btn" onClick={subOne}>-1</button>
//             <button id="count_reset_btn" className="btn" onClick={resetCounter}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateCounter, appRoot);
// };
//
// renderCounterApp();

//JSX - JavaScript XML
var app = {
    title: 'My first compiled react site',
    subtitle: 'List',
    options: ['Item One', 'Item Two']
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted.');
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
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options!' : 'No options!'
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

ReactDOM.render(template, appRoot);
