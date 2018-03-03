'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running.');
var appRoot = document.getElementById('app');

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
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
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
                    { disabled: !this.props.hasOption, onClick: this.props.pickOption },
                    'What should i do?'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.clearOptions },
                    'Clear options.'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

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
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'onSubmitOption',
        value: function onSubmitOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option === '' || option === null) {
                return;
            }
            alert('onSubmitOption()');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.onSubmitOption },
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

var IndecisionApp = function (_React$Component6) {
    _inherits(IndecisionApp, _React$Component6);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this6 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this6.clearOptions = _this6.clearOptions.bind(_this6);
        _this6.pickOption = _this6.pickOption.bind(_this6);
        _this6.state = {
            title: 'Indecision App.',
            subtitle: 'Put your life in the hands of a computer.',
            options: ['Option 1', 'Option 2', 'Option 3']
        };
        return _this6;
    }

    _createClass(IndecisionApp, [{
        key: 'pickOption',
        value: function pickOption() {
            var optionIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[optionIndex]);
        }
    }, {
        key: 'clearOptions',
        value: function clearOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, pickOption: this.pickOption, clearOptions: this.clearOptions }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

//Counter example 02

var Counter = function (_React$Component7) {
    _inherits(Counter, _React$Component7);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this7 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this7.plusOne = _this7.plusOne.bind(_this7);
        _this7.minusOne = _this7.minusOne.bind(_this7);
        _this7.resetCounter = _this7.resetCounter.bind(_this7);
        _this7.state = {
            count: 0
        };
        return _this7;
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


var VisibilityToggle = function (_React$Component8) {
    _inherits(VisibilityToggle, _React$Component8);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this8 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this8.state = {
            isVisible: false
        };
        _this8.toggleVisibility = _this8.toggleVisibility.bind(_this8);
        return _this8;
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
