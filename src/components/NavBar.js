import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logos and icons from assests folder i will set up later 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false) 

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  })

  const onUpDateActiveLink = (linkClicked) => {
      setActiveLink(linkClicked)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : " "}>
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap
          <img src= {''} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activeLink === 'Home' ? 'active navbar-link' : 'navbar-link' } onClick= {() => onUpDateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#About" className= {activeLink === 'About' ? 'active navbar-link' : 'navbar-link' } onClick= {() => onUpDateActiveLink('About')}>About</Nav.Link>
            <Nav.Link href="#Projects" className= {activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link' } onClick= {() => onUpDateActiveLink('Projects')}>Projects</Nav.Link>
            <Nav.Link href="#Contact" className= {activeLink === 'Contact Info' ? 'active navbar-link' : 'navbar-link' } onClick= {() => onUpDateActiveLink('Contact Info')}>Contact Info</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"> <img src=""/></a>
            </div>
            <button className= "vvd" onclockl={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}