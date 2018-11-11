import { connect } from 'react-redux';
import Review from './review';

const mapStateToProps = (state) => {
  return {
    test: state.review.test,
    testData: state.review.testData
  }
};

export default connect(mapStateToProps)(Review);