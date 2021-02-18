import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
    const [errors, setErrors] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "" });

    const createUserHandler = e => {
        e.preventDefault();
        console.log(newUser);

        const user = newUser;
        //axios post call
        axios.post("http://localhost:8000/api/user/", user).then(res => {
            console.log(res);
            history.push("/");
        });
    };

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setNewUser({ ...newUser, [name]: value });

        // console.log(newUser);
    };

    return (
        <form className="col-sm-6 mx-auto" onSubmit={createUserHandler}>
            <div className="form-group text-center">
                <label htmlFor="name">Name:</label>
                <input
                    placeholder="Inser Name"
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={newUser.name}
                />

                <label htmlFor="email">Email:</label>
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
