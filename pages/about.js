import { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";

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
  };

  render() {
    return (
      <Layout>
        <div>นี่คือไฟล์ about</div>

        <img src={this.state.cat.file} width="200" height="200" />
        <p>
          <button onClick={this.onClick}>เปลี่ยน</button>
        </p>
      </Layout>
    );
  }
}

export default About;
