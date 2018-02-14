console.log("App.js is running");

//JSX - JavaScript XML
var app = {
    title: "My first compiled react site",
    subtitle: "Personal info"
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
    </div>
);


var user = {
    name: "David",
    age: 26,
    location: "Ger"
};
function getLocation(location) {
    if(location == null || location === "") {
        return undefined;
    }
    return <p>LOCATION: {user.location.toUpperCase()}</p>;
}
var templatePersonalInfo = (
    <div>
        <p>
            NAME: {user.name.toUpperCase()}
        </p>
        <p>
            AGE: {user.age}
        </p>
        {getLocation(user.location.toUpperCase())}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templatePersonalInfo, appRoot);
// ReactDOM.render(templatePersonalInfo, appRoot);