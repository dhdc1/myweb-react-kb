import { Component } from 'react'
import Layout from '../components/layout'

class Login extends Component {

    state = {
        user:'',
        pass:'',
        email:'ttt@gmail.com',
        null_user:'',
        null_pass :''
        
    }
    onChange=(e)=>{
        this.setState({
            null_pass :'',
            null_user:''
        })
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    onClear = ()=>{
        this.setState({
            user:'',
            pass:'',
            email:'ssss@ddd.com'
        })
    }

    onClick=()=>{
        if(this.state.user == ''){
            this.setState({
                null_user :'ต้องกรอก',
                null_pass :  'ต้องกรอก'
            })
            return;
        }
        alert(this.state.user + this.state.pass)
    }

   

  render () {
    return (
      <Layout title='Login'>
        
            <p>User:<input name='user' onChange={this.onChange} value={this.state.user} />{this.state.null_user}</p>
            <p>Pass:<input name='pass' onChange={this.onChange} value={this.state.pass} />{this.state.null_pass}</p>
            <p>
                <button onClick={this.onClick}>OK</button>
                {' '}
                <button type='reset' onClick={this.onClear}>Cancle</button>
            </p>
            <p>
                {this.state.user}, {this.state.pass} ,{this.state.email}
            </p>
        
      </Layout>

    )
  }

}
export default Login
