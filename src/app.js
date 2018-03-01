console.log('App.js is running.');
const appRoot = document.getElementById('app');

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
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    pickOption() {
        alert('pickOption()');
    }
    clearOptions() {
        alert('clearOptions()');
    }
    render() {
        return (
          <div>
              <button onClick={this.pickOption}>What should i do?</button>
              <button onClick={this.clearOptions}>Clear options.</button>
          </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
          <div>
              {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
          </div>
        );
    }
}

class AddOption extends React.Component {
    onSubmitOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option === '' || option === null) {
            return;
        }
        alert('onSubmitOption()');
    }
    render() {
        return (
          <div>
              <form onSubmit={this.onSubmitOption}>
                  <input type="text" name="option"/>
                  <button>Add option.</button>
              </form>
          </div>
        );
    }
}

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App.';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Option 1', 'Option 2', 'Option 3'];
        return (
          <div>
              <Header title={title} subtitle={subtitle}/>
              <Action/>
              <Options options={options}/>
              <AddOption/>
          </div>
        );
    }
}

//Counter example 02
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count: 0
        }
    }
    plusOne() {
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });
        console.log('plusOne() ' + this.state.count);
    }
    minusOne() {
        this.setState((prevState) => {
            return {count: prevState.count - 1};
        });
        console.log('minusOne() ' + this.state.count);
    }
    resetCounter() {
        this.setState(() => {
            return {count: 0};
        });
        console.log('resetCounter() ' + this.state.count);
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetCounter}>reset</button>
            </div>
        );
    }
}

//Visibility toggle example 02
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {isVisible: !prevState.isVisible};
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide.' : 'Show.'}</button>
                {this.state.isVisible && <p>Text is shown</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, appRoot);
