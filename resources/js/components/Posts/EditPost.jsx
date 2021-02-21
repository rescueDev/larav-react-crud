import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function EditPost(props) {
    const history = useHistory();

    const { id } = props.match.params;
    const [post, setPost] = useState({
        title: "",
        post_content: "",
        likes: null
    });

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = () => {
        axios.get(`/api/posts/show/${id}`).then(res => {
            // console.log(res.data);
            const response = res.data;

            setPost(response);

            console.log("post set", post);
        });
    };

    const editPostHandler = e => {
        e.preventDefault();
        // console.log(user);

        const editPost = post;
        //axios put call
        axios
            .put(`http://localhost:8000/api/post/${id}`, editPost)
            .then(res => {
                console.log(res);
                const postEdited = res.data;
                setPost(postEdited);
                history.push(`/posts`);
            });
    };

    const handleChange = e => {
        const name = e.target.name;

        const value = e.target.value;

        setPost({ ...post, [name]: value });

        // console.log(newUser);
    };
    return (
        <form className="col-sm-6 mx-auto" onSubmit={editPostHandler}>
            <div className="form-group text-center">
                <label htmlFor="name">Title:</label>
                <input
                    placeholder="Inser Title"
                    type="text"
                    name="title"
                    className="form-control"
                    value={post.title}
                    onChange={handleChange}
                />

                <label htmlFor="post_content">Content:</label>
                <textarea
                    placeholder="Insert content"
                    name="post_content"
                    className="form-control"
                    value={post.post_content}
                    onChange={handleChange}
                />

                <input type="submit" className="btn btn-success mt-2" />
            </div>
        </form>
    );
}

export default EditPost;
