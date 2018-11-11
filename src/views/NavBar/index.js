import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = (state) => {
  return {
    test: state.NavBar.test,
    testData: state.NavBar.testData
  }
};

export default connect(mapStateToProps)(NavBar);