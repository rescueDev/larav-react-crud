import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleUser(props) {
    /* console.log(
        "🚀 ~ file: SingleUser.js ~ line 5 ~ SingleUser ~ props",
        props
    ); */
    const [ut, setUt] = useState([]);
    var id = props.match.params.id;
    useEffect(() => {
        showSingleUser();
    }, [ut.id]);

    const showSingleUser = () => {
        // console.log(id);
        axios.get(`/api/users/show/${id}`).then(res => {
            const response = res.data;
            // console.log(response);
            setUt(response);
        });
    };

    // console.log(ut);

    return (
        <div className="col-sm-6 text-center card mx-auto mt-3">
            <h1 className="card-title">User Show details</h1>
            <div className="card-body">
                <div className="card-title">
                    <h3>Name: {ut.name}</h3>
                    <h3>Email: {ut.email}</h3>
                </div>
            </div>
        </div>
    );
}

export default SingleUser;
