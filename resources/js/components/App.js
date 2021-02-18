import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Users from "./Users/Users";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";
import CreateUser from "./Users/CreateUser";
import SingleUser from "./Users/SingleUser";
import Passports from "./Passports/Passports";
import Home from "./Home/Home";
import EditUser from "./Users/EditUser";

function App() {
    return (
        <BrowserRouter>
            <div className="card-header text-center">
                React Js - Laravel CRUD
                <Header></Header>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/users" component={Users} />
                <Route exact path="/users/edit/:id" component={EditUser} />

                <Route exact path="/users/create" component={CreateUser} />

                <Route exact path="/user" component={CreateUser} />

                <Route exact path="/users/show/:id" component={SingleUser} />

                <Route exact path="/posts" component={Posts} />

                <Route exact path="/passports" component={Passports} />
                <Route
                    exact
                    path="/passports/show/:id"
                    component={SingleUser}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
