"use strict";

console.log("App.js is running");

//JSX - JavaScript XML
var app = {
    title: "My first compiled react site",
    subtitle: "Personal info"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "h2",
        null,
        app.subtitle
    )
);

var user = {
    name: "David",
    age: 26,
    location: "Ger"
};
function getLocation(location) {
    if (location == null || location === "") {
        return undefined;
    }
    return React.createElement(
        "p",
        null,
        "LOCATION: ",
        user.location.toUpperCase()
    );
}
var templatePersonalInfo = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "NAME: ",
        user.name.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "AGE: ",
        user.age
    ),
    getLocation(user.location.toUpperCase())
);
var appRoot = document.getElementById("app");

ReactDOM.render(templatePersonalInfo, appRoot);
// ReactDOM.render(templatePersonalInfo, appRoot);
