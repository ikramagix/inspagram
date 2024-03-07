import { createApi } from 'unsplash-js';

const unsplash = createApi({
  REACT_APP_UNSPLASH_API_KEY: process.env.REACT_APP_UNSPLASH_ACCESS_KEY, 
});

export default unsplash;
