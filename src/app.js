console.log('App.js is running.');
const appRoot = document.getElementById('app');

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

