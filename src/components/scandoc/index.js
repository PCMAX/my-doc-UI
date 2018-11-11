import { connect } from 'react-redux';
import Scandoc from './scandoc';

const mapStateToProps = (state) => {
  return {
    test: state.scandoc.test,
    testData: state.scandoc.testData
  }
};

export default connect(mapStateToProps)(Scandoc);