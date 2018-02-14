console.log('App.js is running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>MyFirstCompiledReact!</h1>
        <p>MyFirstReactParagraph</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);