import { connect } from 'react-redux';
import Contact from './contact';

const mapStateToProps = (state) => {
  return {
    test: state.contact.test,
    testData: state.contact.testData
  }
};

export default connect(mapStateToProps)(Contact);