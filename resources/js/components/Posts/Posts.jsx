import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    useHistory
} from "react-router-dom";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);
    // const [singlePost, setSinglePost] = useState();

    useEffect(() => {
        //chiamata axios
        console.log("axios call");
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get("./api/posts").then(res => {
            // console.log(res);
            var post = res.data;
            setPosts(post);
        });
    };

    const deletePostHandler = id => {
        axios.delete(`http://localhost:8000/api/posts/delete/${id}`);
        const newList = posts.filter(post => post.id !== id);
        setPosts(newList);
    };

    const clickLikesHandler = id => {
        // console.log("likes", likes);
        // console.log("id cliccato:", id);
        axios.patch(`http://localhost:8000/api/posts/likes/${id}`).then(res => {
            // console.log(res.data);

            posts.filter(post => {
                if (post.id === id) {
                    post.likes++;
                }
                // console.log("post Like");
            });
            getPosts();
            // setPosts([...posts, singlePost]);
        });
    };

    var ps = null;

    if (posts.length > 0) {
        ps = (
            <div>
                {posts.map(post => {
                    return (
                        <div
                            className="card mb-2 col-6  text-center mx-auto"
                            key={post.id}
                        >
                            <div className="card-body" key={post.id}>
                                <h2>{post.title}</h2>
                                <h4>{post.post_content}</h4>
                                <i
                                    onClick={() => clickLikesHandler(post.id)}
                                    className="far fa-heart"
                                ></i>
                                <span>{post.likes}</span>

                                <h3>User: {post.user.name}</h3>
                                <Link
                                    to={`posts/edit/${post.id}`}
                                    className="btn btn-primary mr-2"
                                >
                                    EDIT
                                </Link>
                                <button
                                    onClick={() => deletePostHandler(post.id)}
                                    className="btn btn-danger"
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="text-center mb-3 mt-3 ">
            <h1>POSTS</h1>
            <Link className="btn btn-success mt-2 mb-4" to="/posts/create">
                Create New Post
            </Link>
            <Link
                className="btn btn-warning ml-3 mt-2 mb-4"
                to="/posts/restore"
            >
                Restore Post
            </Link>
            {ps}
        </div>
    );
}

export default Posts;
