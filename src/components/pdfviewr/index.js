import { connect } from 'react-redux';
import Pdfviewr from './pdfviewr';

const mapStateToProps = (state) => {
  return {
    test: state.pdfviewr.test,
    testData: state.pdfviewr.testData
  }
};

export default connect(mapStateToProps)(Pdfviewr);