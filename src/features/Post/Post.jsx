import React from 'react';
import './Post.css';

const Post = (props) => {
    const { post } = props;

    return (
        <article key={post.id}>
            <div className="post-wrapper">
                <div className="post-container">
                    <h3 className="post-title">{post.title}</h3>

                    <div className="post-image-container">
                        <img src={post.url} alt="" className="post-image" />
                    </div>

                    <div className="post-details">
                        <span className="author-details">
                            <span className="author-username">{post.author}</span>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;
