'use client';
import React from "react";
import Link from "next/link";
import './Footer.css'
import logo from '../../public/assets/LOGO.webp'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image'
import {Container,Row,Col,Stack,Nav,NavLink} from 'react-bootstrap'

function Footer(){
    return(
        <footer>
            <Container fluid>
                <Row className="back text-white p-4">
                    <Col className="mx-5">
                        <Stack>
                            <Image className="autoservices" src={logo} alt="company logo" rounded width={150} height={150}/>
                            
                        </Stack>
                    </Col>

                    <Col>
                    <Nav className="flex-column listz">
                        <NavLink href="./" className="text-white">Home</NavLink>
                        <NavLink href="./privacy" className="text-white">Privacy Policy</NavLink>
                        <NavLink href="./t&c" className="text-white">Terms and Conditions</NavLink>
                    </Nav>
                    </Col>

                    <Col className="con">

                    <h4 className="uscont listz">Contact Us!</h4>
                    <p className="list1">Email: <a
                      href="mailto:vikramautoservices@gmail.com"
                    >
                      vikramautoservices@gmail.com
                    </a></p>
                    <p className="list1">Phone: <a href="tel:+91 82680 07000">
                       +91 82680 07000
                    </a>
                    </p>
                    </Col>
                    <Col>
                    <div className="list-unstyleds2ss list1ss">
                    <span className="tweet"><a href="https://twitter.com/?lang=en"><FaTwitter size={30}/></a></span>
                    <span className="post"><a href="https://www.instagram.com/" ><FaInstagram size={30}/></a></span>    
                </div>
                    </Col>
                    <div className="footer-copyright ">© 2024 Copyright: <span> </span>
        <Link className="vpp" href="/">Vikram Auto Services</Link>
    </div>

    
                </Row>
            </Container>
        </footer>
    )
}

export default Footer