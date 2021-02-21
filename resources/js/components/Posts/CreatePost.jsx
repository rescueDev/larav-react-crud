import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreatePost() {
    const history = useHistory();
    const [newPost, setNewPost] = useState({
        title: "",
        post_content: "",
        likes: 0,
        user_id: null
    });

    const [users, setUsers] = useState([]);
    useEffect(() => {
        //chiamata axios

        getUsers();
    }, []);

    const createPostHandler = e => {
        e.preventDefault();
        console.log(newPost);

        const post = newPost;
        //axios post call
        axios.post("http://localhost:8000/api/post/", post).then(res => {
            console.log(res);
            const postId = res.data.id;
            history.push(`/posts/show/${postId}`);
        });
    };

    const getUsers = () => {
        if (users.length < 1) {
            axios.get("http://localhost:8000/api/users").then(res => {
                // console.log(res);
                var us = res.data;
                setUsers(us);
                // console.log("🚀setUsers", us);
            });
        }
    };

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setNewPost({ ...newPost, [name]: value });
        console.log("nuovo post", newPost);
    };

    /*     const handleSelect = e => {
        console.log("selected change");
        setNewPost({ ...newPost, [name]: value });
    }; */

    /*     var utenti = null;
    if (users.length > 0) {
        utenti = (
            <>
                {users.map(user => {
                    return (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    );
                })}
            </>
        );
    } */

    return (
        <form className="col-sm-6 mx-auto" onSubmit={createPostHandler}>
            <div className="form-group text-center">
                <label className="text-white" htmlFor="title">
                    Title:
                </label>
                <input
                    placeholder="Insert Name"
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={newPost.title}
                />

                <label
                    className="text-white align-middle"
                    htmlFor="post_content"
                >
                    Content:
                </label>
                <div className="input-group mb-2 ">
                    <textarea
                        placeholder="type your content here"
                        type="text"
                        name="post_content"
                        className="form-control"
                        onChange={handleChange}
                        value={newPost.post_content}
                    />
                </div>
                <label className="text-white mr-2" htmlFor="user_id">
                    Pick a User:
                </label>
                <select
                    name="user_id"
                    id=""
                    value={users.user_id}
                    onChange={handleChange}
                >
                    {users.map(user => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        );
                    })}
                </select>

                <br />
                <input
                    type="submit"
                    value="Create"
                    className="btn btn-success mt-2"
                />
            </div>
        </form>
    );
}

export default CreatePost;
