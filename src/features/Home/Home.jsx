import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  setSelectedPost,
  fetchComments,
} from '../../store/redditSlice';
import { BsArrow90DegLeft } from 'react-icons/bs';
import './Home.css';
import Loader from 'react-loader-spinner';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit, selectedPost } =
    reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubreddit]);

  useEffect(() => {}, [selectedPost]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

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

  if (selectedPost !== '') {
    const individualPost = posts.filter((post) => post.name === selectedPost);

    return (
      <>
        <BsArrow90DegLeft
          className="back"
          title="Back to all posts"
          size={50}
          onClick={() => dispatch(setSelectedPost(''))}
        />
        {individualPost.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            onToggleComments={onToggleComments(index)}
            selectedPost={selectedPost}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
          selectedPost={selectedPost}
        />
      ))}
    </>
  );
};

export default Home;
