import {useEffect, useState} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../img/Athirah_logo.png';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    //to know if user scrolls
    const [scrolled,setScrolled] = useState(false);

    const onClickedLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }


        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return(
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onClickedLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onClickedLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onClickedLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text ms-auto">
          <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onClickedLink('connect')}><button className="vvd"><span>Let’s Connect</span></button></Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}