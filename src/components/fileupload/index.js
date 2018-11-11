import { connect } from 'react-redux';
import Fileupload from './fileupload';

const mapStateToProps = (state) => {
  return {
    test: state.fileupload.test,
    testData: state.fileupload.testData
  }
};

export default connect(mapStateToProps)(Fileupload);