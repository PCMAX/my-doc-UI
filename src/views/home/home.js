import React, { Component } from 'react';
import './home.css'
import Layout from '../../components/layout'
import MiniDrawer from '../../components/MiniDrawer'
import Actions from './actions'
import Sidebar from '../sidebar/sidebar'


export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(Actions.test("mydigital office"));
  }
  
  render() {
    return (
      <Layout className="home">
      <MiniDrawer/>


      </Layout>
    );
  }
}