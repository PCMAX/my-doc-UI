import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Navlist from './tileData';

import logo from '../assets/images/logo.png';
import clogo from '../assets/images/cloud-logo.png';
import Toplogin from './toplogin/toplogin';
import burger from '../assets/images/ham-btn.png';
import Nightaudit from './nightaudit/nightaudit';
import Hidden from '@material-ui/core/Hidden';

import  { Redirect } from 'react-router-dom';
import Isrlogn from '../components/isrlogn';

import axios from 'axios';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    background:'#3b6cb4',
    height:'60px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    position:'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 80,
    marginRight: 36,

    [theme.breakpoints.down('sm')]: {
      marginLeft:25,
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    background:'#2e4f81',
    zIndex:'1299',
    overflowX:'hidden',
    color:'#FFF',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  isricon: {
    color:'#fff'
  },
  logocWrap:{
    width:'40px',
    margin:'0 auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoWrap:{
    width:'170px',
    height:'auto',
    margin:'0 auto',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop:0,
    marginBottom: '45px',
    overflow: 'hidden',
    position: 'relative',
  },
  contentMain:{
    padding: theme.spacing.unit * 0.6,
    position: 'absolute',
    top:0,
    bottom: 0,
    left: 0,
    right: '-15px',
    overflow: 'auto',
    paddingRight:'15px',
  },
  TopLogin:{
    position:'absolute',
    right:0,
    top:'5px',
  },
  drawerPaperMobile:{
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    background:'#2e4f81',
    color:'#FFF',
  },
});

const selectedProjectIndexesTemp = [
	{
		name: 'Select a Project',
		fieldValues : {
			valueList: []
		}
	},
	{
		name: 'Select a Project',
		fieldValues : {
			valueList: []
		}
	},
	{
		name: 'Select a Project',
		fieldValues : {
			valueList: []
		}
	},
	{
		name: 'Select a Project',
		fieldValues : {
			valueList: []
		}
	}
];
	
var TOKEN = ""

class MiniDrawer extends React.Component {
  state = {
    open: false,
    mobileOpen: false,
	projects: [],
	selectedProject: {},
	selectedProjectIndexes: selectedProjectIndexesTemp
  };

  handleDrawerOpen = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen , open: true }));
  };

  handleDrawerClose = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen , open: false }));
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  componentDidMount() {
	var tk = localStorage.getItem("token");
	if(tk){
		TOKEN = tk;
	}else{	
		//TODO redirect to signin page
	}
	
	const request = {
		token: TOKEN
	};
    axios.post(`http://ec2-34-210-228-197.us-west-2.compute.amazonaws.com:8080/api/projects/?results=500`, request)
      .then(res => {
		console.log(res.data);
        const projects = res.data.resultObject.projects;
        this.setState({ projects });
      });
  }
  
  projectSelected = (project) => {
	const request = {
		token: TOKEN
	};
    axios.post(`http://ec2-34-210-228-197.us-west-2.compute.amazonaws.com:8080/api/projects/`+project.projectId, request)
      .then(res => {
		console.log(res.data);
        const selectedProject = res.data.resultObject;
		
		var firstIndex = selectedProject.indexFields[0];
		var secondIndex = selectedProject.indexFields[1];
		var thirdIndex = selectedProject.indexFields[2];
		var dateIndex = {};
		for(var i=3;i<selectedProject.indexFields.length;i++){
			if(selectedProject.indexFields[i].type == "Date"){
				dateIndex = selectedProject.indexFields[i];
				break;
			}
		}
		const selectedProjectIndexes = [firstIndex,secondIndex,thirdIndex,dateIndex];
		
    this.setState({ selectedProject });
		this.setState({ selectedProjectIndexes });
		console.log(selectedProjectIndexes);
      });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
            <img
              className={classNames(classes.logoWrap,!this.state.open && classes.hide)}
              src={logo} alt="logo"/>

            <img 
              className={classNames(classes.logocWrap,this.state.open && classes.hide)}
              src={clogo} alt="clogo"/>
        </div>
          
        <Divider />
          <Navlist 
            handleDrawerOpen={this.handleDrawerOpen}
            projects={this.state.projects} onClickProject={this.projectSelected}
          />
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            > 
              {/* <MenuIcon/> */}
              <img className="hamIcon" src={burger} alt="burger-icon"/>
            </IconButton>

            <Typography variant="title" color="inherit" noWrap>
              <IconButton 
                onClick={this.handleDrawerClose}
                className={classNames(classes.isricon,!this.state.open && classes.hide )}
              >
                {theme.direction === 'rtl' ? null :  <img className="hamIcon" src={burger} alt="burger-icon"/> }
              </IconButton>
            </Typography>

            <div className={classes.TopLogin}>
                <Toplogin/>
            </div>
           
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMobile,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden smDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <main className={classes.content}>
          <div className={classes.contentMain}>
            <div className={classes.toolbar} className="topHeader" />
            <Nightaudit selectedProjectIndexes={this.state.selectedProjectIndexes}/>
          </div>
        </main>
      </div>
     
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);