import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


const handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // Pattern using fetch:
  // return (dispatch) => {
  //   dispatch({
  //     type: SEARCH_IS_LOADING,
  //     isLoading: true
  //   });

  //   fetch('...')
  //     .then(data => {
  //       //...
  //       dispatch({
  //         type: SEARCH_LOADED,
  //         data: data
  //       })
  //     })
  //     .catch(e => {
  //       dispatch({
  //         type: SEARCH_ERROR,
  //         error: e
  //       });
  //     });
  // };

  // Using custom async function with callbacks:
  return (dispatch) => {
    // dispatch({
    //   type: SEARCH_IS_LOADING,
    //   isLoading: true
    // });

    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5,
    }, (items) => {
      // dispatch({ 
      //   type: SEARCH_IS_LOADING, 
      //   isLoading: false
      // });
      dispatch(changeVideoList(items));
    });
  };
};

export default handleVideoSearch;
