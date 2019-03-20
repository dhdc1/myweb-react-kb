import { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
class Person extends Component {
  

  render() {
    return (
      <Layout>
        <div>Person {this.props.stars}</div>
      </Layout>
    );
  }
}

export default Person;
