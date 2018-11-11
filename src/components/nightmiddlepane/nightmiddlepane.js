import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './nightmiddlepane.css';
// import page from '../../assets/images/narightpane/page.png';
// import previewImage from '../../assets/images/narightpane/previewpage.png';

// import leftArrow from '../../assets/images/narightpane/lefta.png';
// import leftDArrow from '../../assets/images/narightpane/leftda.png';
// import rightArrow from '../../assets/images/narightpane/righta.png';
// import rightDArrow from '../../assets/images/narightpane/rightda.png';
// import zoom from '../../assets/images/narightpane/zoom.png';
// import Pdfviewr from '../pdfviewr/pdfviewr';



class Nightmiddlepane extends Component {
  
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className="nightAuditMiddleBlock">
      <Grid container>
        <Grid item  lg={12} xl={12}>
        
        </Grid>
        <Grid item lg={3} xl={2}>
          
        </Grid>
        {/* <Pdfviewr/> */}
       {/*} <Grid item lg={9} xl={10} className="previewPage">
         <img src={previewImage} alt="Preview-Image"/>

          <div className="previewActionBlock">
            <div className="leftPreViewArrows">
              <a href="">
               <img src={leftArrow} alt="left"/>
              </a>

              <a href="">
               <img src={leftDArrow} alt="left"/>
              </a>
            </div>

            <div className="Zoom">
              <a href="">
                <img src={zoom} alt="Zoom"/>
              </a>
            </div>

            <div className="RightPreViewArrows">
              <a href="">
                <img src={rightArrow} alt="Right"/>
              </a>
              <a href="">
               <img src={rightDArrow} alt="Right"/>
              </a>
            </div>
          </div>

        </Grid>*/}
      </Grid>
      </div>
    );
  }
}

export default Nightmiddlepane;