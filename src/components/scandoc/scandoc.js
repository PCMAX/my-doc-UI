import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import cpclose from '../../assets/images/close.png';
import TextField from '@material-ui/core/TextField';
import './scandoc.css';

const theme1 = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        minWidth:0,
        minHeight:'20px',
        paddingRight:'10px',
        paddingLeft:'18px',
        fontFamily:'AvenirBook',
        fontSize:'16px',
        lineHeight:'16px',
        color:'#000',
        border:'1px solid #eaeaea',
        "&:focus": {
          background: "#fff",
        }
      },
      icon:{
          fontSize:'34px',
          top: 'calc(50% - 18px)',
          color:'#d8d8d8',
      }
    }
  }
});

const styles = theme => ({
  cpwPaper: {
      borderBottomLeftRadius:'7px',
      borderBottomRightRadius: '7px',
      borderTopLeftRadius:0,
      borderTopRightRadius: 0,

      [theme.breakpoints.down('lg')]: {
        minWidth:'450px',
      },

      [theme.breakpoints.up('lg')]: {
        minWidth:'660px',
      },
  },
  margin: {
      padding:'10px 20px',
      margin:'0 4px'
  },
  cssRootSave: {
      color: '#fff',
      backgroundColor: '#3b6cb4',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'285px',
      minHeight:'42px',
      '&:hover': {
          backgroundColor: '#2f6dc8',
      },

      [theme.breakpoints.down('md')]: {
        minWidth:'200px',
      }
  },
  cssRootCancel: {
      color: '#000',
      border:'1px solid #f1f1f2',
      textTransform:'capitalize',
      fontSize: 15,
      fontFamily:'AvenirLight',
      minWidth:'285px',
      minHeight:'42px',
      '&:hover': {
          backgroundColor: '#ebebeb',
      },

      [theme.breakpoints.down('md')]: {
        minWidth:'200px',
      }
  },
  dActionRoot:{
      justifyContent: 'flex-start',
      margin:'0 auto',
      paddingLeft:'25px',
      paddingRight:'25px',
      paddingTop:0,
      paddingBottom:'50px',
  },
  scanContent:{
      padding:'35px 45px 75px'
  },
  textFieldScan:{
    width:'99%',
  },
  scanLabel:{
    fontSize: 16,
    fontFamily:'AvenirMedium',
    color:'#000',
    lineHeight: '32px'
  },
  scanGrid: {
    marginBottom:'10px',
  },
  scanGridSub: {
    marginBottom:'10px',
    margin:0,
  },
  scanGridSubItem: {
    padding:'0 10px 15px',
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Scandoc extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currency: 'EUR',
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpenScan = () => {
    this.setState({ open: true });
  };

  handleCloseScan = () => {
    this.setState({ open: false });
  };

  render () {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme1}>
        <Button onClick={this.handleClickOpenScan}>Open form dialog</Button>

          <Dialog
            classes={{
              paper: classes.cpwPaper,
            }}
            open={this.state.open}
            onClose={this.handleCloseScan}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
                Scan Documents
                <div className="cpCloseWrapper" onClick={this.handleCloseScan}>
                    <img src={cpclose} alt="Close"/>
                </div>
            </DialogTitle>

            <DialogContent classes={{root:classes.scanContent}}>
              <Grid container>
                <Grid item xs={12} container classes={{container:classes.scanGrid}}>
                    <Grid item xs={4}>
                        <InputLabel classes={{root:classes.scanLabel}} >Scanner</InputLabel>
                    </Grid>

                    <Grid item xs={8}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                </Grid>

                <Grid item xs={12} container classes={{container:classes.scanGrid}}>
                    <Grid item xs={4}>
                        <InputLabel classes={{root:classes.scanLabel}} >File Type</InputLabel>
                    </Grid>

                    <Grid item xs={8}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                </Grid>

                <div className="scanDocDetails">
                  <Grid item xs={12} container classes={{container:classes.scanGridSub}}>
                    <Grid item xs={6} classes={{item:classes.scanGridSubItem}}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={6} classes={{item:classes.scanGridSubItem}}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                 
                    <Grid item xs={6} classes={{item:classes.scanGridSubItem}}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={6} classes={{item:classes.scanGridSubItem}}>
                      <TextField
                        InputProps={{
                          disableUnderline: true,
                        }}
                        select
                        className={classes.textFieldScan}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                      >
                        {currencies.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </DialogContent>

            <DialogActions
              className={classNames(classes.dActionRoot)}
            >
              <div>
                <Button
                    variant="contained"
                    className={classNames(classes.margin, classes.cssRootSave)}
                    color="primary">
                    Save
                </Button>

                <Button
                  onClick={this.handleCloseScan}
                  className={classNames(classes.margin, classes.cssRootCancel)}
                  color="primary">
                  Cancel
                </Button>
              </div>
            </DialogActions>

          </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles) (Scandoc);