import React, { Component } from 'react';
import Api from '../../api/api_solution'
import Actions from './actions'
import Layout from '../../components/layout'
class Sidebar extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
  }

  render () {
    return (
      <Layout className="sidebar">
          <span></span>
           <Api/>
      </Layout>
    );
  }
}

export default Sidebar;