import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/style.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);
























































// import React from 'react';
// import ReactDOM from 'react-dom';
// import IndecisionApp from './components/IndecisionApp';
//
// console.log('Script app.js is running!');
// const appRoot = document.getElementById('app');
// ReactDOM.render(<IndecisionApp/>, appRoot);

// //Counter example 02
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.plusOne = this.plusOne.bind(this);
//         this.minusOne = this.minusOne.bind(this);
//         this.resetCounter = this.resetCounter.bind(this);
//         this.state = {
//             count: 0
//         }
//     }
//     plusOne() {
//         this.setState((prevState) => {
//             return {count: prevState.count + 1};
//         });
//         console.log('plusOne() ' + this.state.count);
//     }
//     minusOne() {
//         this.setState((prevState) => {
//             return {count: prevState.count - 1};
//         });
//         console.log('minusOne() ' + this.state.count);
//     }
//     resetCounter() {
//         this.setState(() => {
//             return {count: 0};
//         });
//         console.log('resetCounter() ' + this.state.count);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.plusOne}>+1</button>
//                 <button onClick={this.minusOne}>-1</button>
//                 <button onClick={this.resetCounter}>reset</button>
//             </div>
//         );
//     }
// }
//
// //Visibility toggle example 02
// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           isVisible: false
//         };
//         this.toggleVisibility = this.toggleVisibility.bind(this);
//     }
//     toggleVisibility() {
//         this.setState((prevState) => {
//             return {isVisible: !prevState.isVisible};
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide.' : 'Show.'}</button>
//                 {this.state.isVisible && <p>Text is shown</p>}
//             </div>
//         );
//     }
// }