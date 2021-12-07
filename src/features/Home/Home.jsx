import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { fetchPosts } from '../../store/redditSlice';
import './Home.css';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const dispatch = useDispatch();
}