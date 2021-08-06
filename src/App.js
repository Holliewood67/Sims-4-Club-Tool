import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import CreateClub from './components/create-club.component';
import Clubs from './components/clubs.component';

function App() {
  return (<Router>
    <div className="App">
      <header>
        <Navbar expand="lg" className="navigationBar">
          <Container>
            <Navbar.Brand href="/">Sims 4 Club Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav me="auto">
              <Link className="nav-link" to={"/create-club"}>Create Club</Link>
              <Link className="nav-link" to={"/clubs"}>Club List</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path='/' component={CreateClub} />
              <Route path="/create-club" component={CreateClub} />
              <Route path="/clubs" component={Clubs}/>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;