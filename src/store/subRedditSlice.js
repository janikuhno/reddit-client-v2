import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { startGetSubreddits, getSubredditSuccess, getSubredditFailed } =
  subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startGetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
