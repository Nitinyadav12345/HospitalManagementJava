import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import userSlice from '../features/userSlice';

const store = configureStore({
  reducer: {
    user:userSlice,
  }, // Use your root reducer or combine your reducers here
});

export default store;
