'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running.');
var appRoot = document.getElementById('app');

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: 'Title'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOption, onClick: props.pickOption },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: props.clearOptions },
            'Clear options.'
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option
    );
};

ReactDOM.render(React.createElement(Option, { option: '1' }), appRoot);

//JSX REACT COMPONENTS
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             {props.subtitle && <h2>{props.subtitle}</h2>}
//         </div>
//     );
// }
// Header.defaultProps = {
//     title: 'Title'
// };
//
// const Action = (props) => {
//     return (
//         <div>
//             <button disabled={!props.hasOption} onClick={props.pickOption}>What should i do?</button>
//             <button onClick={props.clearOptions}>Clear options.</button>
//         </div>
//     );
// }
//
// const Option = (props) => {
//     return (
//         <div>
//             {props.optionText}
//         </div>
//     );
// }
//
// const Options = (props) => {
//     return (
//         <div>
//             {props.options.map((option) => <Option key={option} optionText={option}/>)}
//         </div>
//     );
// }
//
// class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onSubmitOption = this.onSubmitOption.bind(this);
//         this.state =  {
//             error: undefined
//         }
//     }
//     onSubmitOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.addOption(option);
//         this.setState(() => ({error: error}));
//         e.target.elements.option.value = '';
//     }
//     render() {
//         return (
//           <div>
//               {this.state.error && <p>{this.state.error}</p>}
//               <form onSubmit={this.onSubmitOption}>
//                   <input type="text" name="option"/>
//                   <button>Add option.</button>
//               </form>
//           </div>
//         );
//     }
// }
//
// class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.clearOptions = this.clearOptions.bind(this);
//         this.pickOption = this.pickOption.bind(this);
//         this.addOption = this.addOption.bind(this);
//         this.state = {
//             title: 'Indecision App.',
//             subtitle: 'Put your life in the hands of a computer.',
//             options: this.props.options
//         }
//     }
//     pickOption() {
//         const optionIndex = Math.floor(Math.random() * this.state.options.length);
//         alert(this.state.options[optionIndex]);
//     }
//     clearOptions() {
//         this.setState(() => ({options: []}));
//     }
//     addOption(option) {
//         if(!option) {
//             return 'No valid option entered.';
//         } else if(this.state.options.indexOf(option) > -1) {
//             return 'Option already exists.';
//         }
//         this.setState((prevState) => ({options: prevState.options.concat(option)}));
//     }
//     render() {
//         return (
//           <div>
//               <Header title={this.state.title} subtitle={this.state.subtitle}/>
//               <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
//               <Options options={this.state.options}/>
//               <AddOption addOption={this.addOption}/>
//           </div>
//         );
//     }
// }
// IndecisionApp.defaultProps = {
//     options: []
// };
//
// ReactDOM.render(<IndecisionApp options={[]}/>, appRoot);


//Counter example 02

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.plusOne = _this.plusOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.resetCounter = _this.resetCounter.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'plusOne',
        value: function plusOne() {
            this.setState(function (prevState) {
                return { count: prevState.count + 1 };
            });
            console.log('plusOne() ' + this.state.count);
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
            console.log('minusOne() ' + this.state.count);
        }
    }, {
        key: 'resetCounter',
        value: function resetCounter() {
            this.setState(function () {
                return { count: 0 };
            });
            console.log('resetCounter() ' + this.state.count);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.plusOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetCounter },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

//Visibility toggle example 02


var VisibilityToggle = function (_React$Component2) {
    _inherits(VisibilityToggle, _React$Component2);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this2 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this2.state = {
            isVisible: false
        };
        _this2.toggleVisibility = _this2.toggleVisibility.bind(_this2);
        return _this2;
    }

    _createClass(VisibilityToggle, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {
                return { isVisible: !prevState.isVisible };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.isVisible ? 'Hide.' : 'Show.'
                ),
                this.state.isVisible && React.createElement(
                    'p',
                    null,
                    'Text is shown'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);
