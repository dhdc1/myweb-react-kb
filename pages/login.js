import { Component } from 'react'
import Layout from '../components/layout'

class Login extends Component {

    state = {
        user:'admin',
        pass:'1234'
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  render () {
    return (
      <Layout title='Login'>
        <form>
            <p>User:<input name='user' onChange={this.onChange} /></p>
            <p>Pass:<input name='pass' /></p>
            <p>
                <button>OK</button>
                {' '}
                <button type='reset'>Cancle</button>
            </p>
            <p>
                {this.state.user}, {this.state.pass}
            </p>
        </form>
      </Layout>

    )
  }

}
export default Login
