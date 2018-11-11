import React from 'react';
import Grid from '@material-ui/core/Grid';

import Footersm from './footersm/footersm';

const footerstyle = {
  footerul:{
    listStyleType:'none',
    margin:'0',
    height:'45px',
  },
  ftli:{
    display:'inline-block',
    lineHeight:'45px',
    color:'#fff',
    fontSize:'14px',
    fontFamily:'AvenirBook'
  },
  ftra:{
    display:'block',
    lineHeight:'45px',
    padding:'0 10px',
    textDecoration:'none',
    color:'#fff',
    fontSize:'14px',
    fontFamily:'AvenirBook'
  },
  fticon:{
    width:'20px',
  },
  ftspan:{
    width:'2px',
    background:'#fff',
    height:'18px',
    display:'inline-block',
    position:'relative',
    top:'4px'
  },
  footerulterms:{
    listStyleType:'none',
    margin:'0',
    height:'45px',
    textAlign:'center'
  }
}

const footer = (props) => {
  
  return (
    <div className="footerisr">
      <Grid container
            direction="row"
            justify="flex-end"
            alignItems="center">
          <Grid item xs={5}>
            <ul style={footerstyle.footerul}>
              <li style={footerstyle.ftli}>© 2018 myDigitalOffice. All Rights Reserved.</li>
            </ul>
          </Grid>

          <Grid item xs={2}>
            <Footersm/>
          </Grid>

          <Grid item xs={4}>
            <ul style={footerstyle.footerulterms}>
              <li style={footerstyle.ftli}><a style={footerstyle.ftra} href="/isrlogin">Privacy Policy </a></li>
              <span style={footerstyle.ftspan}></span>
              <li style={footerstyle.ftli}><a style={footerstyle.ftra} href="">Terms and Conditions</a></li>
            </ul>
          </Grid>
      </Grid>
    </div>
  );
};

export default footer;