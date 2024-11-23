import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import MyObject from "./MyObject.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    app.get("/lab5/todos/:id/description/:description", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    WorkingWithObjects(app);
    QueryParameters(app);
    MyObject(app);
    WorkingWithArrays(app);
};
