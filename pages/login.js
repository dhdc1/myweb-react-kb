import { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import { Button ,Form } from 'react-bootstrap'

class Login extends Component {

  state={
    username:'',
    password:'',
    isLogin :false,
    ip :'http://203.157.118.123:4000'
  }
  onSubmit=(e)=>{
    e.preventDefault()
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render () {
    const {username,password} = this.state;

    return (
      <Layout title='Login'>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control  placeholder='Enter username' name='username' onChange={this.onChange} value={username} />
            
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type='password'  placeholder='Password' name='password' onChange={this.onChange} value={password}/>
          </Form.Group>
          
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Layout>
    )
  }

}
export default Login
