import reducer, { setPosts, startGetPosts } from './redditSlice';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/Home/',
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should add to posts array', () => {
  expect(reducer(undefined, setPosts('Reddit post #1'))).toEqual({
    posts: 'Reddit post #1',
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/Home/',
  });
});

test('should change isLoading to true and error to false', () => {
  expect(reducer(undefined, startGetPosts())).toEqual({
    posts: [],
    error: false,
    isLoading: true,
    searchTerm: '',
    selectedSubreddit: '/r/Home/',
  });
});
