import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            VIP Motors
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory" className="text-white">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-white">
                Blogs
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link
                    as={Link}
                    to="/manageinventories"
                    className="text-white"
                  >
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addinventory" className="text-white">
                    Add Items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
