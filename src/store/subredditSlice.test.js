import reducer, { startGetSubreddits } from './subRedditSlice';

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should change isLoading to true and error to false', () => {
    expect(reducer(undefined, startGetSubreddits())).toEqual({
      subreddits: [],
      error: false,
      isLoading: true,
    });
  });
  