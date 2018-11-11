import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class NavBar extends Component {
  
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
   

  }

  render () {
    return (
      <Layout className="NavBar">
      
      <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application

				
                </Typography>
            </Toolbar>
        </AppBar>
      </Layout>
    );
  }
}

export default NavBar;