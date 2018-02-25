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
var randomOption = function randomOption() {
    var randomNo = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNo]);
};
var renderOptions = function renderOptions() {
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
            'p',
            null,
            'Total options: ',
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            'Clear options'
        ),
        React.createElement(
            'form',
            { onSubmit: onOptionFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: randomOption },
            'Choose option'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        )
    );
    ReactDOM.render(template, appRoot);
};
var onOptionFormSubmit = function onOptionFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option == null || option === '') {
        console.log('Type out option to be added.');
        return;
    }
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
    console.log('Option added. Total options = ' + app.options.length + '.');
    return;
};
var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderOptions();
    console.log('All options removed.');
    return;
};

renderOptions();

//visibility toggle app
// let visibilityStatus = false;
// const renderVisibilityApp = () => {
//     const visibilityTemplate = (
//         <div>
//             <h1>Visibility Toggle App</h1>
//             <button onClick={statusToggle}>{visibilityStatus ? 'show' : 'hide'}</button>
//             {(!visibilityStatus) && <p>Hey this are some details u can see now</p>}
//         </div>
//     );
//     ReactDOM.render(visibilityTemplate, appRoot);
// }
// const statusToggle = () => {
//     console.log('statusToggle' + visibilityStatus);
//     visibilityStatus = !visibilityStatus;
//     renderVisibilityApp();
// }
//
// renderVisibilityApp();
