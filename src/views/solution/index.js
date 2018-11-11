import { connect } from 'react-redux';
import Solution from './solution';

const mapStateToProps = (state) => {
  return {
    test: state.solution.test,
    testData: state.solution.testData
  }
};

export default connect(mapStateToProps)(Solution);