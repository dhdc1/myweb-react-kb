import Layout from '../components/layout'
import { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {
  state = {
    isLogin :false
  }

  componentDidMount=()=>{
    let login = sessionStorage.getItem('login')
    if(login == 1){
      this.setState({
        isLogin :true
      })
    }
  }

  render () {
    let {isLogin} = this.state;
    if(!isLogin){
      return (<Layout title='ไม่ login มา'>
          <Link href='/login'> 
            <a>กรุณาลงชื่อเข้าใช้งาน</a>
          </Link>
      </Layout>)
    }

    return (
      <Layout>
        <div>
          Hello World.
        </div>
        <button>
          คลิก
        </button>
      </Layout>
    )
  }
}

