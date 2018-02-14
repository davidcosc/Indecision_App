console.log('App.js is running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>MyFirstCompiledReact!</h1>
        <p>MyFirstReactParagraph</p>
    </div>
);
var templatePersonalInfo = (
    <div>
        <h1>
            DAVID
        </h1>
        <p>
            AGE: 26
        </p>
        <p>
            LOCATION: GER
        </p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templatePersonalInfo, appRoot);