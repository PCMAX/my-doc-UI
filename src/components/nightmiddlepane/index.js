import { connect } from 'react-redux';
import Nightmiddlepane from './nightmiddlepane';

const mapStateToProps = (state) => {
  return {
    test: state.nightmiddlepane.test,
    testData: state.nightmiddlepane.testData
  }
};

export default connect(mapStateToProps)(Nightmiddlepane);