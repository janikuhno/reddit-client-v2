import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPost } from '../../store/redditSlice';
import Card from '../../components/Card';
import { dateCalculator } from '../../utils/dateCalculator';
import './Post.css';
import Comment from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TiMessage } from 'react-icons/ti';
import shortenNumber from '../../utils/shortenNumber';

const Post = (props) => {
  const { post, onToggleComments } = props;
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  const { selectedPost } = reddit;

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <Skeleton count={4} />
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  let postTitle;
  if (selectedPost === '') {
    postTitle = (
      <h3
        className="post-title"
        onClick={() => dispatch(setSelectedPost(post.name), onToggleComments(post.permalink))}
      >
        {post.title}
      </h3>
    );
  } else {
    postTitle = <h3 className="post-title no-hover">{post.title}</h3>;
  }

  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-container">
            {postTitle}

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>

            <div className="post-details">
              <span className="author-details">
                <span className="author-username">{post.author}</span>
              </span>
              <span>{dateCalculator(post.created_utc)}</span>
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && 'showing-comments'
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  <TiMessage className="icon-action" />
                </button>
                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>

            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
