import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import {
  fetchPosts,
  selectFilteredPosts,
  selectedPost,
  setSearchTerm,
} from '../../store/redditSlice';
import './Home.css';
import Loader from 'react-loader-spinner';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  /* useEffect selectedPost */
  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  if (isLoading) {
    return (
      <div className="loading">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go to /r/Home/
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Home;
