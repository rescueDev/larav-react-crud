import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function EditUser(props) {
    const history = useHistory();
    // console.log("edit", props);
    const { id } = props.match.params;

    // console.log(id);

    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        axios.get(`/api/users/show/${id}`).then(res => {
            // console.log(res.data);
            const response = res.data;

            setUser(response);

            console.log("user set", user);
        });
    };

    const editUserHandler = e => {
        e.preventDefault();
        // console.log(user);

        const editUser = user;
        //axios put call
        axios
            .put(`http://localhost:8000/api/user/${id}`, editUser)
            .then(res => {
                console.log(res);
                const newUser = res.data;
                setUser(newUser);
                history.push(`/users/show/${id}`);
            });
    };

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setUser({ ...user, [name]: value });

        // console.log(newUser);
    };

    return (
        <form className="col-sm-6 mx-auto" onSubmit={editUserHandler}>
            <div className="form-group text-center">
                <label htmlFor="name">Name:</label>
                <input
                    placeholder="Inser Name"
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    placeholder="Insert email"
                    type="email"
                    name="email"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                />

                <input type="submit" className="btn btn-success mt-2" />
            </div>
        </form>
    );
}

export default EditUser;
