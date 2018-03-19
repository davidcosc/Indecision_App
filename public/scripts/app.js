'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running.');
// const appRoot = document.getElementById('app');
//
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
// }
//
// const Action = (props) => {
//     return (
//         <div>
//             <button disabled={!props.hasOptions} onClick={props.pickOption}>What should i do?</button>
//             <button onClick={props.clearOptions}>Clear options.</button>
//         </div>
//     );
// }
//
// const Option = (props) => {
//     return (
//         <div>
//             {props.option}
//             <button onClick={(e) => props.removeOption(props.option)}>Remove.</button>
//         </div>
//     );
// }
//
// const Options = (props) => {
//     return (
//         <div>
//             {(props.options.length === 0) && <p>Enter some options to get started.</p>}
//             {props.options.map((option) => <Option key={option} option={option} removeOption={props.removeOption}/>)}
//         </div>
//     );
// }
// Options.defaultProps = {
//     options: ['d', 'e', 'f', 'a', 'u', 'l', 't']
// }
//
// class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onOptionSubmit = this.onOptionSubmit.bind(this);
//         this.state = {
//             error: undefined
//         }
//     }
//     onOptionSubmit(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.addOption(option);
//         e.target.elements.option.value = '';
//         this.setState(() => ({error: error}));
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onOptionSubmit}>
//                     <input type="text" name="option"/>
//                     <button>Add option.</button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.removeOption = this.removeOption.bind(this);
//         this.addOption = this.addOption.bind(this);
//         this.clearOptions = this.clearOptions.bind(this);
//         this.pickOption = this.pickOption.bind(this);
//         this.state = {
//             options: []
//         }
//     }
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//             if(!options) {
//                 return;
//             }
//             this.setState(() => ({options: options}));
//         } catch(e) {
//             //do nothing
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.options.length !== this.state.options.length) {
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem('options', json);
//         }
//     }
//     removeOption(optionToRemove) {
//         this.setState((prevState) => ({options: prevState.options.filter((option) => (optionToRemove !== option))}));
//     }
//     addOption(option) {
//         if(!option) {
//             return 'U must enter an option to be added.';
//         } else if(this.state.options.indexOf(option) > -1) {
//             return 'Option already exists.'
//         }
//         this.setState((prevState) => ({options: prevState.options.concat(option)}));
//     }
//     clearOptions() {
//         this.setState(() => ({options: []}));
//     }
//     pickOption() {
//         const optionIndex = Math.floor(Math.random() * this.state.options.length);
//         const option = this.state.options[optionIndex];
//         alert('Go with ' + option);
//     }
//
//     render() {
//         return (
//             <div>
//                 <Header title="Indecision App." subtitle="Put your life in the hands of a computer."/>
//                 <Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
//                 <Options options={this.state.options} removeOption={this.removeOption}/>
//                 <AddOption addOption={this.addOption}/>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<IndecisionApp/>, appRoot);

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
    title: 'Indecision App v3.',
    subtitle: 'Put your life in the hands of a computer.'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.pickOption },
            'Pick option.'
        ),
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.clearOptions },
            'Clear options.'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Enter some options to get started.'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option, removeOption: props.removeOption });
        })
    );
};
Options.defaultProps = {
    options: ['d', 'f', 'l', 't']
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.removeOption(props.option);
                } },
            'Remove.'
        )
    );
};

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.state = {
            error: undefined
        };
        _this.handleOnSubmitOption = _this.handleOnSubmitOption.bind(_this);
        return _this;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmitOption',
        value: function handleOnSubmitOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });
            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmitOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option.'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.state = {
            options: props.options
        };
        _this2.pickOption = _this2.pickOption.bind(_this2);
        _this2.clearOptions = _this2.clearOptions.bind(_this2);
        _this2.removeOption = _this2.removeOption.bind(_this2);
        _this2.addOption = _this2.addOption.bind(_this2);
        return _this2;
    }

    _createClass(IndecisionApp, [{
        key: 'pickOption',
        value: function pickOption() {
            var optionIndex = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[optionIndex];
            alert('Pick option ' + option);
        }
    }, {
        key: 'clearOptions',
        value: function clearOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    }) };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Empty input is not an option!';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists!';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, pickOption: this.pickOption, clearOptions: this.clearOptions }),
                React.createElement(Options, { options: this.state.options, removeOption: this.removeOption }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ['d', 'f', 'l', 't']
};
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

//Counter example 02

var Counter = function (_React$Component3) {
    _inherits(Counter, _React$Component3);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this3 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this3.plusOne = _this3.plusOne.bind(_this3);
        _this3.minusOne = _this3.minusOne.bind(_this3);
        _this3.resetCounter = _this3.resetCounter.bind(_this3);
        _this3.state = {
            count: 0
        };
        return _this3;
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


var VisibilityToggle = function (_React$Component4) {
    _inherits(VisibilityToggle, _React$Component4);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this4 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this4.state = {
            isVisible: false
        };
        _this4.toggleVisibility = _this4.toggleVisibility.bind(_this4);
        return _this4;
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
