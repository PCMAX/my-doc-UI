import React, { Component } from 'react';

import fb from '../../assets/images/sm/facebook.png';
import youtube from '../../assets/images/sm/youtube.png';
import linkedin from '../../assets/images/sm/linkedin.png';


const styles = {
  footerul:{
    listStyleType:'none',
    margin:'0',
    height:'45px',
    textAlign:'center'
  },
  ftli:{
    display:'inline-block'
  },
  ftra:{
    display:'block',
    lineHeight:'58px',
    padding:'0 5px'
  },
  fticon:{
    width:'24px',
  }
}

class Footersm extends Component {
  
  render () {
    return (
      <div>
        <ul style={styles.footerul}>
          <li style={styles.ftli}><a style={styles.ftra}  href=""><img style={styles.fticon} src={fb} alt="facebook"/></a></li>
          <li style={styles.ftli}><a style={styles.ftra}  href=""><img style={styles.fticon} src={youtube} alt="Youtube"/></a></li>
          <li style={styles.ftli}><a style={styles.ftra}  href=""><img style={styles.fticon} src={linkedin} alt="Linkedin"/></a></li>
        </ul>
      </div>
    );
  }
}

export default Footersm;