import { connect } from 'react-redux';
import Toplogin from './toplogin';

const mapStateToProps = (state) => {
  return {
    test: state.toplogin.test,
    testData: state.toplogin.testData
  }
};

export default connect(mapStateToProps)(Toplogin);