import React from 'react';
import ReactMarkdown from 'react-markdown';
import { dateCalculator } from '../../utils/dateCalculator';
import './Comment.css';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {dateCalculator(comment.created_utc)}
        </p>
      </div>
      <ReactMarkdown className="comment-body" children={comment.body} />
    </div>
  );
};

export default Comment;
