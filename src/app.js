console.log('App.js is running');

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


const user = {
    name: 'David',
    age: 26,
    location: 'Ger'
};
function getLocation(location) {
    if(location == null || location === '') {
        return undefined;
    }
    return <p>LOCATION: {location.toUpperCase()}</p>;
}
const templatePersonalInfo = (
    <div>
        <p>
            NAME: {user.name ? user.name.toUpperCase() : 'ANONYMOUS'}
        </p>
        <p>
            AGE: {user.age}
        </p>
        {getLocation(user.location.toUpperCase())}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templatePersonalInfo, appRoot);