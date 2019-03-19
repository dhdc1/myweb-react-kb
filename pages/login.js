import { Component } from "react";
import Layout from "../components/layout";
import axios from 'axios';

import {Button,ProgressBar} from 'react-bootstrap'

class Login extends Component {
  state = {
    user: "",
    pass: "",
    email: "ttt@gmail.com",
    null_user: "",
    null_pass: "",
   
  };

 

  onChange = e => {
    this.setState({
      null_pass: "",
      null_user: ""
    });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClear = () => {
    this.setState({
      user: "",
      pass: "",
      email: "ssss@ddd.com"
    });
  };

  onClick = () => {
    if (this.state.user == "") {
      this.setState({
        null_user: "ต้องกรอก"
      });
      return;
    }
    let user = this.state.user;
    let pass = this.state.pass;
    localStorage.setItem('user',user);
    localStorage.setItem('pass',pass);
    alert(this.state.user + this.state.pass);
    this.setState({
      user:'',
      pass:''
    })
  };


  render() {
    return (
      <Layout title="Login">
        <div style={{textAlign:'center',marginTop:'15px'}}>
          <p>
            User:
            <input
              name="user"
              onChange={this.onChange}
              value={this.state.user}
            />
            {this.state.null_user}
          </p>
          <p>
            Pass:
            <input
              name="pass"
              onChange={this.onChange}
              value={this.state.pass}
            />
            {this.state.null_pass}
          </p>
          <p>
           
           <Button variant="outline-primary" onClick={this.onClick}>OK</Button>
           {' '}
           
           <button className='btn btn-success' onClick={this.onClear}>Cancle</button>
          </p>
          <p>
            {this.state.user}, {this.state.pass} ,{this.state.email}
          </p>
          <ProgressBar variant="success" now={40} />

          
        </div>
      </Layout>
    );
  }
}
export default Login;
