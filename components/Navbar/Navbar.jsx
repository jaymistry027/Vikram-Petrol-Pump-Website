'use client'
import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link'; // Add Link import
import logo from '../../public/assets/LOGO.webp';
import './Navbar.css';

const Nav = () => {
  return (
    <div className="navext sticky-top"> {/* Added sticky-top class here */}
      {/* <Navbar expand="lg" className="bg-body-tertiary nav2" fluid> */}
        <Container className="nav1 d-flex justify-content-between align-items-center" fluid>
          {/* <Link href="/">
            <a><Image src={logo} height="60px" className='image'></Image></a>
          </Link> */}
          <Link href="/">
            <Image src={logo} height="60px" className='image' />
          </Link>


          <a href="#" className="navtext mx-auto">
            Vikram Petrol Pump
          </a>
        </Container>
      {/* </Navbar> */}
    </div>
  );
};

export default Nav;
