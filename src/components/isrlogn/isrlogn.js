import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CheckBox from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';

import './isrlogn.css';

import loginlogo from '../../assets/images/login-logo.png';

import fblogin from '../../assets/images/sm/login/facebook.png';
import youtubelogin from '../../assets/images/sm/login/youtube.png';
import linkedinlogin from '../../assets/images/sm/login/linkedin.png';

import  { Redirect } from 'react-router-dom'

import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    backgroundColor: '#ebeef3',
    borderRadius:'8px',
    marginBottom:'10px',
  },
  isrLoginCheckbox:{
    color: '#8b8b8b',
  },
  margin: {
    width:'100%',
  },
  cssRoot: {
    color: '#060702',
    padding:'18px 10px',
    fontFamily:'AvenirBook',
    fontSize:'16px',
    borderRadius:'8px',
    backgroundColor: '#c6d250',
    '&:hover': {
      backgroundColor: '#aab541',
    },
  }
});

const stylesbtm = {
  footerul:{
    listStyleType:'none',
    margin:'0',
    padding:'0',
    height:'40px',
    textAlign:'center'
  },
  ftli:{
    display:'inline-block',
  },
  ftra:{
    display:'block',
    lineHeight:'40px',
    padding:'0 5px',
    textDecoration:'none',
    color:'#4f7bbc',
  },
  fticon:{
    width:'24px',
    height:'auto'
  }
}

class Isrlogn extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
	entityId: '',
    username: '',
	password: '',
    checkedB: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  
  onSign = () => {
	const request = {
		entityId: this.state.entityId,
		username: this.state.username,
		password: this.state.password
	};
    axios.post(`http://ec2-34-210-228-197.us-west-2.compute.amazonaws.com:8080/api/login`, request)
      .then(res => {
		console.log(res.data);
        const token = res.data.resultObject.token;
		localStorage.setItem("token", token);
		this.props.history.push('/');
      });
  };

  render () {
    const { classes } = this.props;

    return (
     <div className={classes.root}>
      <Grid container >
        <div className="loginHook">
        
        </div>
        <div className="loginMainWrapper">
          <Grid item md={12} lg={12} >
            <div className="login-top">
              <img src={loginlogo} alt="Login"/>
            </div>
          </Grid>

          <Grid item xs={12} className="login-center">
            <form>
              <div className="login-input">
                <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Entity ID"
                  id="standard-entity"
                  className={classes.textField}
                  type="text"
                  value={this.state.entityId}
                  onChange={this.handleChange('entityId')}
                  margin="normal"
                />
              </div>

              <div className="login-input">
                <TextField
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Username"
                  id="standard-name"
                  className={classes.textField}
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  margin="normal"
                />
              </div>
              
              <div className="login-input">
                <TextField
                  InputProps={{
                    disableUnderline: true
                  }}
                  placeholder="Password"
                  id="filled-password-input"
                  className={classes.textField}
                  type="password"
				  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
              </div>

              <div className="login-check">
                <FormControlLabel
                  control={
                    <Checkbox
                      classes={{
                        root: classes.isrLoginCheckbox,
                      }}
                      checkedIcon={<CheckBox style={{fill: "#b0b0b0"}}/>}
                      checked={this.state.checkedF}
                      onChange={this.handleCheck('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                />

                <span className="check-label">
                  Remember me
                </span>

                <span className="forgotpw">
                  Forgot Your password?
                </span>
              </div>

              <div>
                <Button
                  variant="contained"
                  className={classNames(classes.margin, classes.cssRoot,"loginBtn")}
				  onClick={this.onSign}
                >
                  Sign In
                </Button>
              </div>

            </form>
          </Grid>
        </div>

        <Grid item xs={12}>
          <div className="login-bottom">
            <div className="rights">
              <ul style={stylesbtm.footerul}>
                <li style={stylesbtm.ftli}>
                  <a style={stylesbtm.ftra} href="">© 2018 myDigitalOffice. All rights reserved.</a>
                </li>
              </ul>
            </div>

            <div className="loginSm">
              <ul style={stylesbtm.footerul}>
                <li style={stylesbtm.ftli}><a style={stylesbtm.ftra}  href=""><img style={stylesbtm.fticon} src={fblogin} alt="facebook"/></a></li>
                <li style={stylesbtm.ftli}><a style={stylesbtm.ftra}  href=""><img style={stylesbtm.fticon} src={youtubelogin} alt="Youtube"/></a></li>
                <li style={stylesbtm.ftli}><a style={stylesbtm.ftra}  href=""><img style={stylesbtm.fticon} src={linkedinlogin} alt="Linkedin"/></a></li>
              </ul>
            </div>
            
            <div className="policy">
              <ul style={stylesbtm.footerul}>
                <li style={stylesbtm.ftli}>
                  <a style={stylesbtm.ftra} href="">Privacy Policy</a>
                </li>
              </ul>
            </div>

          </div>
        </Grid>
      </Grid>
     </div>
    );
  }
}

export default withStyles(styles) (Isrlogn);