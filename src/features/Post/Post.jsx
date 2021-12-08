import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPost } from '../../store/redditSlice';
import Card from '../../components/Card';
import { dateCalculator } from '../../utils/dateCalculator';
import './Post.css';

const Post = (props) => {
  const { post } = props;
  const dispatch = useDispatch();

  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-container">
            <h3 className="post-title" onClick={() => dispatch(setSelectedPost(post.name))}>{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>

            <div className="post-details">
              <span className="author-details">
                <span className="author-username">{post.author}</span>
              </span>
              <span>{dateCalculator(post.created_utc)}</span>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
