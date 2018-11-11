import { connect } from 'react-redux';
import Nightrightpane from './nightrightpane';

const mapStateToProps = (state) => {
  return {
    test: state.nightrightpane.test,
    testData: state.nightrightpane.testData
  }
};

export default connect(mapStateToProps)(Nightrightpane);