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
//             <button disabled={!props.hasOption} onClick={props.pickOption}>What should i do?</button>
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
//                 <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption} clearOptions={this.clearOptions}/>
//                 <Options options={this.state.options} removeOption={this.removeOption}/>
//                 <AddOption addOption={this.addOption}/>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<IndecisionApp/>, appRoot);

const appRoot = document.getElementById('app');
const Header = (props) => {
    return (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    );
}
Header.defaultProps = {
    title: 'Indecision App v3.',
    subtitle: 'Put your life in the hands of a computer.',
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.pickOption}>Pick option.</button>
            <button disabled={!props.hasOption} onClick={props.clearOptions}>Clear options.</button>
        </div>
    );
}
Action.defaultProps = {
    hasOption: false,
}

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Action/>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp/>, appRoot);
















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