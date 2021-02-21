import React, { useState, useEffect } from "react";
import axios from "axios";

function RestoreUser() {
    const [restoreUser, setRestoreUser] = useState({ name: "", email: "" });
    useEffect(() => {}, []);

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setRestoreUser({ ...restoreUser, [name]: value });
    };

    const restoreHandler = e => {
        e.preventDefault();
        console.log("restore");
        console.log(restoreUser);
        axios
            .post("http://localhost:8000/api/user/restore", restoreUser)
            .then(res => console.log(res));
    };

    return (
        <div className="card col-sm-6 mx-auto text-center mt-5">
            <h2 className="card-title">Restore User</h2>

            <form className="col-sm-6 mx-auto" onSubmit={restoreHandler}>
                <div className="form-group text-center">
                    <label htmlFor="name">Name:</label>
                    <input
                        value={restoreUser.name}
                        onChange={handleChange}
                        placeholder="Insert Name"
                        type="text"
                        name="name"
                        className="form-control"
                    />

                    <label htmlFor="email">email:</label>
                    <input
                        value={restoreUser.email}
                        onChange={handleChange}
                        placeholder="Insert email"
                        type="text"
                        name="email"
                        className="form-control"
                    />

                    <input
                        type="submit"
                        value="Restore"
                        className="btn btn-success mt-2"
                    />
                </div>
            </form>
        </div>
    );
}

export default RestoreUser;
