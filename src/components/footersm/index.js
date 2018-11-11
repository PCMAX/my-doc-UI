import { connect } from 'react-redux';
import Footersm from './footersm';

const mapStateToProps = (state) => {
  return {
    test: state.footersm.test,
    testData: state.footersm.testData
  }
};

export default connect(mapStateToProps)(Footersm);