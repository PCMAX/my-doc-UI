import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  return {
    test: state.sidebar.test,
    testData: state.sidebar.testData
  }
};

export default connect(mapStateToProps)(Sidebar);