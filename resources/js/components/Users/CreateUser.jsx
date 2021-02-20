import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

function CreateUser() {
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [hidePass, setHidePass] = useState(true);

    const createUserHandler = e => {
        e.preventDefault();
        console.log(newUser);

        const user = newUser;
        //axios post call
        axios.post("http://localhost:8000/api/user/", user).then(res => {
            console.log(res);
            const userId = res.data.id;
            history.push(`/users/show/${userId}`);
        });
    };

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setNewUser({ ...newUser, [name]: value });

        // console.log(newUser);
    };

    const passVisibilityHandler = e => {
        e.preventDefault();

        // console.log("pass");
        setHidePass(pass => !pass);
    };

    return (
        <form className="col-sm-6 mx-auto" onSubmit={createUserHandler}>
            <div className="form-group text-center">
                <label className="text-white" htmlFor="name">
                    Name:
                </label>
                <input
                    placeholder="Insert Name"
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={newUser.name}
                />

                <label className="text-white align-middle" htmlFor="password">
                    Password:
                </label>
                <div className="input-group mb-2 ">
                    <input
                        placeholder="Insert Password"
                        type={hidePass ? "password" : "text"}
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                        value={newUser.password}
                    />
                    <div className="input-group-append">
                        <button
                            className={
                                hidePass ? "btn btn-primary" : "btn btn-danger"
                            }
                            onClick={passVisibilityHandler}
                        >
                            {hidePass ? "Show" : "Hide"}
                        </button>
                    </div>
                </div>

                <label className="text-white" htmlFor="email">
                    Email:
                </label>
                <input
                    placeholder="Insert email"
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={newUser.email}
                />

                <input
                    type="submit"
                    value="Create"
                    className="btn btn-success mt-2"
                />
            </div>
        </form>
    );
}

export default CreateUser;
