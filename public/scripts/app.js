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
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    return props.removeOption(props.option);
                } },
            'Remove.'
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
    options: ['d', 'e', 'f', 'a', 'u', 'l', 't']
};

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.onOptionSubmit = _this.onOptionSubmit.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }

    _createClass(AddOption, [{
        key: 'onOptionSubmit',
        value: function onOptionSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);
            e.target.elements.option.value = '';
            this.setState(function () {
                return { error: error };
            });
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
                    { onSubmit: this.onOptionSubmit },
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

        _this2.removeOption = _this2.removeOption.bind(_this2);
        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.clearOptions = _this2.clearOptions.bind(_this2);
        _this2.pickOption = _this2.pickOption.bind(_this2);
        _this2.state = {
            options: []
        };
        return _this2;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (!options) {
                    return;
                }
                this.setState(function () {
                    return { options: options };
                });
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    }) };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'U must enter an option to be added.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists.';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'clearOptions',
        value: function clearOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'pickOption',
        value: function pickOption() {
            var optionIndex = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[optionIndex];
            alert('Go with ' + option);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: 'Indecision App.', subtitle: 'Put your life in the hands of a computer.' }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, pickOption: this.pickOption, clearOptions: this.clearOptions }),
                React.createElement(Options, { options: this.state.options, removeOption: this.removeOption }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

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
