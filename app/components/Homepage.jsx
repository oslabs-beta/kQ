import React, { Component } from 'react';
import * as ReactBootStrep from 'react-bootstrap';

class Homepage extends Component {
  render() {
    return (
      <div>
      {/* <div className="navbarHomePage">
        <nav>
          <ul id="nav">
            <li> <a href="#"> About </a></li>
            <li> <a href="#"> Documents </a></li>
            <li> <a href="#"> Team </a></li>
            <li> <a href="#"> Dashboard </a></li>
          </ul>
        </nav>
      </div>
      <div className="logoHomePage">
        kafkaQ LOGO
      </div> */}
      <ReactBootStrep.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrep.Navbar.Brand href="#home">KafkaQ</ReactBootStrep.Navbar.Brand>
  <ReactBootStrep.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrep.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrep.Nav className="mr-auto">
      <ReactBootStrep.Nav.Link href="#features">About</ReactBootStrep.Nav.Link>
      <ReactBootStrep.Nav.Link href="#pricing">Documents</ReactBootStrep.Nav.Link>
      <ReactBootStrep.NavDropdown title="Metrics" id="collasible-nav-dropdown">
        <ReactBootStrep.NavDropdown.Item href="#action/3.1">Metric1</ReactBootStrep.NavDropdown.Item>
        <ReactBootStrep.NavDropdown.Item href="#action/3.2">Metric2</ReactBootStrep.NavDropdown.Item>
        <ReactBootStrep.NavDropdown.Item href="#action/3.3">Metric3</ReactBootStrep.NavDropdown.Item>
        <ReactBootStrep.NavDropdown.Divider />
        {/* <ReactBootStrep.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrep.NavDropdown.Item> */}
      </ReactBootStrep.NavDropdown>
    </ReactBootStrep.Nav>
    <ReactBootStrep.Nav>
      <ReactBootStrep.Nav.Link href="#deets">Team</ReactBootStrep.Nav.Link>
      <ReactBootStrep.Nav.Link eventKey={2} href="#memes">
        More links if needed
      </ReactBootStrep.Nav.Link>
    </ReactBootStrep.Nav>
  </ReactBootStrep.Navbar.Collapse>
</ReactBootStrep.Navbar>

      </div>
    );
  }
}

export default Homepage;