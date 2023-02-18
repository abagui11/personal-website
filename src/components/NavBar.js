import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/twitter.png'
import navIcon3 from '../assets/img/github.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
        <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className = 'navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className = {activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                
            </Nav>
            <span className = "navbar-text">
                <div className = "social-icon">
                    <a href = "https://www.linkedin.com/in/arpan-bagui/"><img src={navIcon1} alt="" /></a>
                    <a href = "https://twitter.com/Arpan_BagHolder"><img src={navIcon2} alt="" /></a>
                    <a href = "https://github.com/abagui11"><img src={navIcon3} alt="" /></a>
                </div>
                <a target="_blank" href="../assets/img/Arpan_Bagui_Resume.pdf" download><button className ="vvd"><span>Resume</span></button></a>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}