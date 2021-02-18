import React, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        //chiamata axios
        console.log("axios call");
        getPosts();
    }, []);
    const getPosts = () => {
        if (posts.length < 1) {
            axios.get("./api/posts").then(res => {
                // console.log(res);
                var post = res.data;
                setPosts(post);
                // console.log("🚀setUsers", post);
            });
        }
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
                            <div className="card-body">
                                <h2>{post.title}</h2>
                                <h4>{post.post_content}</h4>
                                <h3>Likes: {post.likes}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="text-center mb-3 mt-3">
            <h1>POSTS</h1>
            {ps}
        </div>
    );
}

export default Posts;
