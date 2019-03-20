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
  onSubmit=async (e)=>{
    e.preventDefault()
    let {username,password,ip} = this.state;

    let data = {
      username : username,
      password : password
    }
    let res = await axios.post(ip+'/user',data)

    console.log(res.data[0].id)
    if(res.data[0].id>0){
      sessionStorage.setItem('login',1)
    }else{
      sessionStorage.setItem('login',0)
    }

    this.setState({
      username:'',
      password:''
    })
    

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
            Login
          </Button>
        </Form>
      </Layout>
    )
  }

}
export default Login
