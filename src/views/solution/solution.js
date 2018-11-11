import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'
import MiniDrawer from '../../components/MiniDrawer'
import Nightaudit from '../../components/nightaudit';

class Solution extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(Actions.test("Steve Jobs"));
  }

  render () {
    return (
      <Layout className="home">
      <MiniDrawer/>
      <Nightaudit/>


      </Layout>
    );
  }
}

export default Solution;