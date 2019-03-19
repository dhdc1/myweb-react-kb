import { Component } from 'react'
import Layout from '../components/layout'

class Login extends Component {

    state = {
        user:'',
        pass:'',
        email:'ttt@gmail.com',
        
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    onClear = (e)=>{
        this.setState({
            user:'',
            pass:''
        })
    }

   

  render () {
    return (
      <Layout title='Login'>
        <form>
            <p>User:<input name='user' onChange={this.onChange} value={this.state.user} /></p>
            <p>Pass:<input name='pass' onChange={this.onChange} value={this.state.pass} /></p>
            <p>
                <button>OK</button>
                {' '}
                <button type='reset' onClick={this.onClear}>Cancle</button>
            </p>
            <p>
                {this.state.user}, {this.state.pass} ,{this.state.email}
            </p>
        </form>
      </Layout>

    )
  }

}
export default Login
