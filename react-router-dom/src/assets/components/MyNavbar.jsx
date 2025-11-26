import { Component } from 'react'
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Container,
  Dropdown,
} from 'react-bootstrap'

class MyNavbar extends Component {
  render() {
    return (
      <>
        <Navbar
          variant="dark"
          expand="lg"
          style={{ backgroundColor: '#221f1f' }}
        >
          <Navbar.Brand href="/">
            <img
              src="assets/logo.png"
              alt="logo"
              style={{ width: '100px', height: '55px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link active className="font-weight-bold" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="font-weight-bold" href="/">
                TV Shows
              </Nav.Link>
              <Nav.Link className="font-weight-bold" href="/">
                Movies
              </Nav.Link>
              <Nav.Link className="font-weight-bold" href="/">
                Recently Added
              </Nav.Link>
              <Nav.Link className="font-weight-bold" href="/">
                My List
              </Nav.Link>
            </Nav>
            <span className="d-flex align-items-center">
              <InputGroup className="icons">
                <FormControl
                  placeholder="Search and press enter"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div id="kids">KIDS</div>
              <i className="fa fa-bell icons"></i>
              <i className="fa fa-user icons"></i>
            </span>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="ml-4 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: '#221f1f' }}
                    id="dropdownMenuButton"
                    className="btn-secondary btn-sm dropdown-toggle rounded-0"
                  >
                    Genres
                  </Dropdown.Toggle>
                  <Dropdown.Menu bg="dark">
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <i className="fa fa-th-large icons"></i>
              <i className="fa fa-th icons"></i>
            </div>
          </div>
        </Container>
      </>
    )
  }
}

export default MyNavbar
