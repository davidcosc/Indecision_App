console.log('App.js is running');

//es6 functions example challenge
const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

//JSX - JavaScript XML
const app = {
    title: 'My first compiled react site',
    subtitle: 'List',
    options: ['Item One', 'Item Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        {(app.options.length > 0) ? <p>Here are your options!</p> : <p>No options!</p>}
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
}
const templateCounter = (
  <div>
    <h1>count: {count}</h1>
    <button id="count_btn" className="btn" onClick={addOne}>+1</button>
  </div>
);

const appRoot = document.getElementById('app')
ReactDOM.render(templateCounter, appRoot);

