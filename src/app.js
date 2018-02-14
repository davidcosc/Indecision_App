console.log('App.js is running');

//JSX - JavaScript XML
var app = {
    title: 'My first compiled react site',
    subtitle: 'Personal info'
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
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

ReactDOM.render(template, appRoot);
// ReactDOM.render(templatePersonalInfo, appRoot);