import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import axios from "axios";

function RestoreUser() {
    const history = useHistory();
    const [restoreUser, setRestoreUser] = useState({ name: "", email: "" });
    const [adRestore, setAdRestore] = useState(false);

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

        setAdRestore(true);
    };

    return (
        <div className="card col-sm-6 mx-auto text-center mt-5">
            {adRestore ? (
                <div>
                    <h2>User Restored !!</h2>
                    <Link to="/users" className="btn btn-primary">
                        Back to users
                    </Link>
                </div>
            ) : (
                <div>
                    <h2 className="card-title">Restore User</h2>

                    <form
                        className="col-sm-6 mx-auto"
                        onSubmit={restoreHandler}
                    >
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
            )}
        </div>
    );
}

export default RestoreUser;
