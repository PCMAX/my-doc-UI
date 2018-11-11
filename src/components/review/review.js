import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'

class Review extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.dispatch(Actions.test("Steve Jobs"));
  }

  render () {
    return (
      <Layout className="review">
       
      </Layout>
    );
  }
}

export default Review;