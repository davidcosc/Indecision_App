console.log('App.js is running.');
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
    title: 'Title'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.pickOption}>What should i do?</button>
            <button onClick={props.clearOptions}>Clear options.</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option}
        </div>
    );
}



ReactDOM.render(<Option option="1"/>, appRoot);

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