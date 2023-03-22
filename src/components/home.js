import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Amdalat's Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#homePage">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#ContactMe">Contact</Nav.Link>
            <Nav.Link href="#ContactPage">Contact Me</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#ProjectsGallery">
                Projects Gallery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <div id="intro">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <title>Amdalat's Profile</title>
            <a href="#homePage">
              Home<span className="sr-only">(current)</span>
            </a>
            <a href="#Projects">
              Projects<a href="#ProjectsGallery"> Projects Gallery </a>
            </a>
            <a href="#ContactPage">Contact Me</a>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
          {/* <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav> */}
      <h1 id="homePage">Home Page</h1>
      <img src="/assets/MyPhoto.jpg" alt="myPhotograph"></img>
      <h2>Amdalat Jinadu</h2>I am a postgraduate student with a vast range of
      executive skills and training.
      <ol>
        <p></p>
        <p>
          LinkedIn: https://www.linkedin.com/in/amdalat Github:
          https://github.com/Amdalat1000000
          <p></p>
          <h3 id="#ContactMe">Contact Details</h3>
          Email: babi.jinadu@gmail.com
        </p>
        <p>For enquiries please fill out the form below.</p>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add your enquiry here</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
<div>
<p></p>
</div>
        <h3>My CV</h3>
        <p>
          Open a PDF file:{" "}
          <a href="/assets/AmdalatJinaduCV23_2.PDF">Amdalat Jinadu's CV</a>
        </p>
      </ol>
    </div>);
}
export default Home;
