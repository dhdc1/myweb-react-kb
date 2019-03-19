import { Component } from 'react'
import Layout from '../components/layout'

class Login extends Component {

  render () {
    return (
      <Layout title='Login'>
        <form>
            <p>User:<input/></p>
            <p>Pass:<input/></p>
            <p>
                <button>OK</button>
                {' '}
                <button type='reset'>Cancle</button>
            </p>
        </form>
      </Layout>

    )
  }

}

export default Login
