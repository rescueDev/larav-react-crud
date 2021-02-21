import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleUser(props) {
    const [ut, setUt] = useState([]);
    const [hasPass, setHasPass] = useState(true);

    var id = props.match.params.id;
    useEffect(() => {
        showSingleUser();
    }, [ut.id]);

    const showSingleUser = () => {
        // console.log(id);
        axios.get(`/api/users/show/${id}`).then(res => {
            const response = res.data;
            console.log("response Single User", res);
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
            {ut.passport_number && ut.exp_date ? (
                <div className="card-body">
                    <div className="card-title">
                        <h3>Pass Number: {ut.passport_number}</h3>
                        <h3>Expiration Date: {ut.exp_date}</h3>
                    </div>
                </div>
            ) : (
                <div className="card-body mt-2">
                    <div className="card-title">
                        <h3>No passport </h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SingleUser;
