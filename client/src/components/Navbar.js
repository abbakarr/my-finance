import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';

function Navigations() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>my Finances</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="#income">
            <Nav.Link to='Home'>Home</Nav.Link>
            <Nav.Link to='Home'>Features</Nav.Link>
            <Nav.Link to='Home'>Report</Nav.Link>
            <Nav.Link to='Home'>Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#user-profile">
              <BsFillPersonFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigations;
