import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';

function Navigations() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>my Finances</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="#income">
            <Nav.Link to='home'>Home</Nav.Link>
            <Nav.Link to='/'>Features</Nav.Link>
            <Nav.Link to='/'>Report</Nav.Link>
            <Nav.Link to='/'>Contact us</Nav.Link>
          </Nav>
          <Nav> 
            <Nav.Link onClick={logout}>
              <BsFillPersonFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigations;
