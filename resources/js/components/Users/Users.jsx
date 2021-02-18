import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import SingleUser from "./SingleUser";

function Users() {
    const [users, setUsers] = useState([]);
    const [unmount, setUnmount] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        //chiamata axios

        getUsers();
        return () => {
            setUnmount(true);
        };
    }, []);

    const getUsers = () => {
        if (users.length < 1) {
            axios.get("./api/users").then(res => {
                // console.log(res);
                var us = res.data;
                setUsers(us);
                // console.log("🚀setUsers", us);
            });
        }
    };

    /* const showUser = id => {
        console.log(id);
        axios.get(`/api/users/show/${id}`).then(res => {
            setUser(res);
            console.log("Data user", user);
        });
    }; */

    var utenti = null;
    if (users.length > 0) {
        utenti = (
            <div>
                {users.map(user => {
                    return (
                        <div
                            className="card mb-2 col-6  text-center mx-auto"
                            key={user.id}
                        >
                            <Link to={`users/show/${user.id}`} key={user.id}>
                                <div className="card-body">
                                    <h3>{user.name}</h3>
                                    <h3>{user.email}</h3>
                                    <Link
                                        to={`users/edit/${user.id}`}
                                        className="btn btn-success mr-2"
                                    >
                                        EDIT
                                    </Link>
                                    <button className="btn btn-danger">
                                        DELETE
                                    </button>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="mt-3 col-sm-12 mx-auto text-center">
            <h1>Users</h1>
            <Link className="btn btn-success mt-2 mb-4" to="/users/create">
                Create New User
            </Link>
            {utenti}
        </div>
    );
}

export default Users;
