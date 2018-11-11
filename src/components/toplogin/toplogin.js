import React, { Component } from 'react';
import './toplogin.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';


import logout from '../../assets/images/logout.png';
import cpass from '../../assets/images/pass.png';
import cpclose from '../../assets/images/close.png';
import Collapse from '@material-ui/core/Collapse';

const styles = {
    cpwPaper: {
        borderBottomLeftRadius:'7px',
        borderBottomRightRadius: '7px',
        borderTopLeftRadius:0,
        borderTopRightRadius: 0,
        minWidth:'660px',
    },
    margin: {
        padding:'10px 20px',
    },
    cssRootSave: {
        color: '#fff',
        backgroundColor: '#3b6cb4',
        textTransform:'capitalize',
        fontSize: 15,
        fontFamily:'AvenirLight',
        minWidth:'295px',
        minHeight:'42px',
        '&:hover': {
            backgroundColor: '#2f6dc8',
        },
    },
    cssRootCancel: {
        color: '#000',
        border:'1px solid #f1f1f2',
        textTransform:'capitalize',
        fontSize: 15,
        fontFamily:'AvenirLight',
        minWidth:'295px',
        minHeight:'42px',
        '&:hover': {
            backgroundColor: '#ebebeb',
        },
    },
    dActionRoot:{
        justifyContent: 'flex-start',
        margin:0,
        paddingLeft:'26px',
        paddingRight:'35px',
        paddingTop:0,
        paddingBottom:'50px',
    },
    cpwInput:{
        padding:'10px 20px',
        height: '1.1875em',
    },
    cpwInputRoot:{
        border:'1px solid #f3f3f3',
        width:'100%',
        borderRadius:'4px'
    },
    cpwLabel:{
        fontFamily:'AvenirLight',
        fontSize:'15px',
        color:'#000',
        lineHeight:'39px',
    },
    cpwContent:{
        padding:'70px 30px'
    },
    cpwGrid:{
        marginBottom:'10px',
    },
    pwIcon:{
        padding:'5px 12px',
    }
};

class Toplogin extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
          showLoginMenu: false,
          open: false,
        };
        
        this.showLoginMenu = this.showLoginMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showLoginMenu(event) {
        event.preventDefault();

        this.setState({ showLoginMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showLoginMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowOldPassword = () => {
        this.setState(state => ({ showOldPassword: !state.showOldPassword }));
    };

    handleClickShowNewPassword = () => {
        this.setState(state => ({ showNewPassword: !state.showNewPassword }));
    };

    handleClickShowCNewPassword = () => {
        this.setState(state => ({ showCNewPassword: !state.showCNewPassword }));
    };


    render () {
        const { classes } = this.props;
    return (
      <div className="toplogin">
        <div className="loginWrapper" onClick={this.showLoginMenu}>
          <div className="uavatar"></div>
          <div className="usernme_lable">Alexander Pierce</div>
        </div>

        <Collapse in={this.state.showLoginMenu}>
          <div className="dropdown">
              <ul>
                <li>
                  <a onClick={this.handleClickOpen}>
                    <img src={cpass} alt="Change Password"/>
                    <span>Change Password</span>
                  </a>
                </li>
                <span className="passSpan"></span>
                <li>
                  <a href="/isrlogin">
                    <img src={logout} alt="logout"/>
                    <span>Log Out</span>
                  </a>
                </li>

              </ul>
          </div>
        </Collapse>

        <Dialog
         classes={{
             paper: classes.cpwPaper,
          }}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
              Change Password
              <div className="cpCloseWrapper" onClick={this.handleClose}>
                  <img src={cpclose} alt="Close"/>
              </div>
          </DialogTitle>

          <DialogContent classes={{root:classes.cpwContent}}>

              <Grid container>
                  <Grid item xs={12} container classes={{container:classes.cpwGrid}}>
                      <Grid item xs={4}>
                          <InputLabel classes={{root:classes.cpwLabel}} htmlFor="adornment-password">Old Password</InputLabel>
                      </Grid>

                      <Grid item xs={8}>
                          <Input
                              className="cpwTextInput"
                              classes={{
                                  input:classes.cpwInput,
                                  root:classes.cpwInputRoot,
                              }}
                              disableUnderline={true}
                              id="adornment-password"
                              placeholder="Old Password"
                              type={this.state.showOldPassword ? 'text' : 'password'}
                              value={this.state.opassword}
                              onChange={this.handleChange('password')}
                              endAdornment={
                                  <InputAdornment position="end">
                                      <IconButton
                                          classes={{
                                              root: classes.pwIcon
                                          }}
                                          aria-label="Toggle password visibility"
                                          onClick={this.handleClickShowOldPassword}
                                      >
                                          {this.state.showOldPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                  </InputAdornment>
                              }
                          />
                      </Grid>
                  </Grid>

                  <Grid item xs={12} container classes={{container:classes.cpwGrid}}>
                      <Grid item xs={4}>
                          <InputLabel classes={{root:classes.cpwLabel}} htmlFor="adornment-password">New Password</InputLabel>
                      </Grid>
                      <Grid item xs={8}>
                          <Input
                              className="cpwTextInput"
                              classes={{
                                  input:classes.cpwInput,
                                  root:classes.cpwInputRoot,
                              }}
                              disableUnderline={true}
                              id="adornment-password"
                              placeholder="New Password"
                              type={this.state.showNewPassword ? 'text' : 'password'}
                              value={this.state.npassword}
                              onChange={this.handleChange('password')}
                              endAdornment={
                                  <InputAdornment position="end">
                                      <IconButton
                                          classes={{
                                              root: classes.pwIcon
                                          }}
                                          aria-label="Toggle password visibility"
                                          onClick={this.handleClickShowNewPassword}
                                      >
                                          {this.state.showNewPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                  </InputAdornment>
                              }
                          />
                      </Grid>
                  </Grid>

                  <Grid item xs={12} container>
                      <Grid item xs={4}>
                          <InputLabel classes={{root:classes.cpwLabel}} htmlFor="adornment-password">Confirm New Password</InputLabel>
                      </Grid>

                      <Grid item xs={8}>
                          <Input
                              className="cpwTextInput"
                              classes={{
                                  input:classes.cpwInput,
                                  root:classes.cpwInputRoot,
                              }}
                              disableUnderline={true}
                              id="adornment-password"
                              placeholder="Confirm New Password"
                              type={this.state.showCNewPassword ? 'text' : 'password'}
                              value={this.state.cnpassword}
                              onChange={this.handleChange('password')}
                              endAdornment={
                                  <InputAdornment position="end">
                                      <IconButton
                                          classes={{
                                              root: classes.pwIcon
                                          }}
                                          aria-label="Toggle password visibility"
                                          onClick={this.handleClickShowCNewPassword}
                                      >
                                          {this.state.showCNewPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                  </InputAdornment>
                              }
                          />
                      </Grid>
                  </Grid>
              </Grid>

          </DialogContent>

          <DialogActions
              className={classNames(classes.dActionRoot)}
          >
              <Button
                  onClick={this.handleClose}
                  variant="contained"
                  className={classNames(classes.margin, classes.cssRootSave)}
                  color="primary">
                  Save
              </Button>

              <Button
                  onClick={this.handleClose}
                  className={classNames(classes.margin, classes.cssRootCancel)}
                  color="primary">
                  Cancel
              </Button>

          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

export default withStyles(styles) (Toplogin);