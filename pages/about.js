import { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
import {Button} from 'react-bootstrap'

class About extends Component {
  state = {
    cat: {}
  };

  componentDidMount = async () => {
    let resp = await axios.get("https://aws.random.cat/meow");
    this.setState({
      cat: resp.data
    });
  };

  onClick = async () => {
    let resp = await axios.get("https://aws.random.cat/meow");
    this.setState({
      cat: resp.data
    });

    sessionStorage.setItem('cat',resp.data.file)

  };

  render() {
    return (
      <Layout>
        <div>นี่คือไฟล์ about</div>

        <img src={this.state.cat.file} width="200" height="200" />
        <p>
        <Button variant="outline-primary" onClick={this.onClick}>Primary</Button>
        </p>
      </Layout>
    );
  }
}

export default About;
