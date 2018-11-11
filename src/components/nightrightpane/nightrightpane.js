import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

import './nightrightpane.css';
import signbtn from '../../assets/images/actionbtns/sign.png';
import sharebtn from '../../assets/images/narightpane/share.png';
import tagbtn from '../../assets/images/narightpane/tag.png';
import lockbtn from '../../assets/images/narightpane/lock.png';
import redactbtn from '../../assets/images/narightpane/redact.png';
import expirationbtn from '../../assets/images/actionbtns/retention.png';
import retentionbtn from '../../assets/images/actionbtns/retention.png';
import versionbtn from '../../assets/images/narightpane/version.png';
import annotatebtn from '../../assets/images/narightpane/annotate.png';


const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: 8,
    paddingRight: theme.spacing.unit,
    paddingBottom: 8,
    paddingLeft: theme.spacing.unit * 4,
    width: '100%',
    color:'#000'
  },
  cssRoot: {
    color:'#030303',
    minHeight:'30px',
    paddingTop: 6,
    paddingBottom: 6,
    marginTop:'4px',
    backgroundColor: '#fff',
    fontFamily:'AvenirBook',
    fontSize:'14px',
    textTransform:'capitalize',
    width:'100%',
    boxShadow:'none',
    border:'1px solid #e3e3e3',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
});

class Nightrightpane extends Component {
  
  constructor(props) {
    super(props);
  }

  render () {
    const { classes, theme } = this.props;
    return (
      <div className="nightAuditRightBlock">
        <Grid item lg={12}>
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <Input
              placeholder="Search…"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={signbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Sign
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={annotatebtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Annotate
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={sharebtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Share
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={tagbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Tag
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={lockbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Lock
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={redactbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Redact
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={expirationbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Set Expiration
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={retentionbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Set Retention
              </span>
            </Button>
          </div>
        </Grid>

        <Grid item lg={12}>
          <div className="actionbtnBlock">
            <Button
              variant="contained"
              className={classNames(classes.cssRoot)}
            >
              <div className="btnImageBlock">
                <img className="btnImage" src={versionbtn} alt="upload"/>
              </div>

              <span className="rightPanebtnLabel">
                Version History
              </span>
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles) (Nightrightpane);