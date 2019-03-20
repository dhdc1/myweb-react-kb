import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Navbar bg='primary' expand='lg' fixed='top' >
      <Navbar.Brand href='#'>
        SmartOffice
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>

          <Link href='/'>
          <a className='nav-link' role='button' >หน้าแรก</a>
          </Link>

          <Link href='/about'>
          <a className='nav-link' role='button'>เกี่ยวกับ</a>
          </Link>

          <Link href='/contact'>
          <a className='nav-link' role='button'>ติดต่อ</a>
          </Link>

          <Link href='/person'>
          <a className='nav-link' role='button'>ข้อมูล</a>
          </Link>
          
          <NavDropdown title='ผู้ใช้' id='basic-nav-dropdown'>
            <Link href='/login'>
            <a className='dropdown-item'>เข้าระบบ</a>
            </Link>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <div style={{marginTop: '65px'}}>
        {children}
      </div>
    </Container>
  </div>
)
