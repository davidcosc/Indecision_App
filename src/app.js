console.log('App.js is running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>MyFirstCompiledReact!</h1>
        <p>MyFirstReactParagraph</p>
    </div>
);
var user = {
    name: 'David',
    age: 26,
    location: 'Ger'
};
var templatePersonalInfo = (
    <div>
        <p>
            NAME: {user.name.toUpperCase()}
        </p>
        <p>
            AGE: {user.age}
        </p>
        <p>
            LOCATION: {user.location.toUpperCase()}
        </p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templatePersonalInfo, appRoot);