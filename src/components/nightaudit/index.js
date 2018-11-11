import { connect } from 'react-redux';
import Nightaudit from './nightaudit';

const mapStateToProps = (state) => {
  return {
    test: state.nightaudit.test,
    testData: state.nightaudit.testData
  }
};

export default connect(mapStateToProps)(Nightaudit);