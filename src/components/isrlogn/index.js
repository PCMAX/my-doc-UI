import { connect } from 'react-redux';
import Isrlogn from './isrlogn';

const mapStateToProps = (state) => {
  return {
    test: state.isrlogn.test,
    testData: state.isrlogn.testData
  }
};

export default connect(mapStateToProps)(Isrlogn);