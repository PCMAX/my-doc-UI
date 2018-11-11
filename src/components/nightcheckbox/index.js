import { connect } from 'react-redux';
import Nightcheckbox from './nightcheckbox';

const mapStateToProps = (state) => {
  return {
    test: state.nightcheckbox.test,
    testData: state.nightcheckbox.testData
  }
};

export default connect(mapStateToProps)(Nightcheckbox);