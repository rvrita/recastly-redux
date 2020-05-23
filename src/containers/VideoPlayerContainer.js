import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    video: state.currentVideo,
  }
};

// No mapDispatchToProps because VideoPlayer doesn't fire any actions
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoPlayer);
