import Link from 'next/link'
import Head from 'next/head'

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
          หน้าแรก
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
          เข้าใช้งาน
        </Link>
      </nav>
    </header>

    {children}  

    <footer>{'ส่วนท้ายของ page'}</footer>
  </div>
)
