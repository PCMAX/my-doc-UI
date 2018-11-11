import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'
///

import { render } from 'react-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};




class Pdfviewr extends Component {
  
  state = {
    file: './sample.pdf',
    numPages: 1,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
}



  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.dispatch(Actions.test("Steve Jobs"));
  }

  
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }




  render () {
    const { file, numPages } = this.state;


    return (
      <Layout className="pdfviewr">
      <div className="Example__container">
          <div className="Example__container__load">
            <input
              type="file"
              onChange={this.onFileChange}
            />
          </div>
          <div className="Example__container__document">
            <Document 
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page  
                      key={'page_${index }'}
                      pageNumber={index }
                    />
                  ),
                )

              }
            </Document>
          </div>
        </div>

      </Layout>
    );
  }
}

export default Pdfviewr;