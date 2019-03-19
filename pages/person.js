import { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
class Person extends Component {
  state = {
    person: {}
  };
  componentDidMount(){
      this.getPerson();
  }
  getPerson = async () => {
      let resp = await axios.get('https://localhost:8443/smartcard/data/')
      if(resp.data){
        this.setState({
            person:resp.data
        })
      }
      
  };
  render() {
    return (
      <Layout>
        <div>Person {this.state.person.cid}</div>
      </Layout>
    );
  }
}

export default Person;
