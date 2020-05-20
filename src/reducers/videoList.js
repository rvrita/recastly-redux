import Redux from 'redux';
import sampleData from '../data/exampleVideoData.js';
import {CHANGE_VIDEO_LIST} from '../actions/videoList.js';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.

  switch (action.type) {
    case CHANGE_VIDEO_LIST:
      return action.videos;
    default:
      return state;
  }
};

export default videoListReducer;
