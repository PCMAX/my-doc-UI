import { connect } from 'react-redux';
import Scandocpre from './scandocpre';

const mapStateToProps = (state) => {
  return {
    test: state.scandocpre.test,
    testData: state.scandocpre.testData
  }
};

export default connect(mapStateToProps)(Scandocpre);