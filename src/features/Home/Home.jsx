import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import { selectFilteredPosts } from '../../store/redditSlice';
import './Home.css';

const Home = () => {
  const posts = useSelector(selectFilteredPosts);

  return (
    <>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Home;
