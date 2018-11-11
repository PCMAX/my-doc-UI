import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'

class Contact extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(Actions.test("Steve Jobs"));
  }

  render () {
    return (
      <Layout className="contact">
        Welcome Contact {this.props.test}
      </Layout>
    );
  }
}

export default Contact;