import Link from 'next/link'
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.css";

export default ({ children, title = 'This is the default title' }) => (
  <div style={{margin:'15px'}}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>หน้าแรก</a>
        </Link>{' '}
        |
        <Link href='/about'>
          <a>เกี่ยวกับ</a>
        </Link>{' '}
        |
        <Link href='/contact'>
          <a>ติดต่อ</a>
        </Link>{' '}
        |
        <Link href='/login'>
          <a>เข้าใช้งาน</a>
        </Link>
      </nav>
    </header>

    {children}  

    <footer>{'ส่วนท้ายของ page'}</footer>
  </div>
)
