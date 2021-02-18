import React, { useState, useEffect } from "react";
import axios from "axios";

function Passports() {
    const [passports, setPassports] = useState([]);

    useEffect(() => {
        fetchPassports();
    }, []);

    const fetchPassports = () => {
        axios.get("./api/passports").then(res => {
            console.log(res.data);
            var data = res.data;
            setPassports(data);
        });
    };

    let pass = null;

    if (passports.length > 0) {
        pass = (
            <div className="">
                {passports.map(ps => {
                    return (
                        <div
                            className="card mb-2 col-6  text-center mx-auto"
                            key={ps.id}
                        >
                            <h2>{ps.passport_number}</h2>
                            <h2>{ps.exp_date}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="mt-3 mb-3 col-sm-12  text-center">
            <h1>Passports</h1>
            {pass}
        </div>
    );
}

export default Passports;
