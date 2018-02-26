'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
// const app = {
//     title: 'My first compiled react site',
//     subtitle: 'List',
//     options: ['Item One', 'Item Two']
// };
// const randomOption = () => {
//     const randomNo = Math.floor(Math.random() * app.options.length);
//     alert(app.options[randomNo]);
// }
// const renderOptions = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <h2>{app.subtitle}</h2>}
//             <p>{(app.options.length > 0) ? 'Here are your options!' : 'No options!'}</p>
//             <p>Total options: {app.options.length}</p>
//             <button onClick={removeAllOptions}>Clear options</button>
//             <form onSubmit={onOptionFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add option</button>
//             </form>
//             <button disabled={app.options.length === 0} onClick={randomOption}>Choose option</button>
//             <ol>
//                 {
//                     app.options.map((option) => {
//                         return <li key={option}>{option}</li>;
//                     })
//                 }
//             </ol>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// const onOptionFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if(option == null || option === '') {
//         console.log('Type out option to be added.');
//         return;
//     }
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     renderOptions();
//     console.log('Option added. Total options = ' + app.options.length + '.');
//     return;
// }
// const removeAllOptions = () => {
//     app.options = [];
//     renderOptions();
//     console.log('All options removed.');
//     return;
// }
//
// renderOptions();


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


//JSX REACT COMPONENTS

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Indecision App.'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Put your life in the hands of a computer.'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    null,
                    'What should i do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ol',
                    null,
                    React.createElement(
                        'li',
                        null,
                        'Options here'
                    )
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null)
);

ReactDOM.render(jsx, appRoot);
