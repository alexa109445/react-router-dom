import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './styles/styles.css'
import { Container, Alert, Dropdown } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MovieList from './components/MovieList'

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Container fluid className="px-4">
          <MovieList title="Lord of the rings" />
          <MovieList title="The Avengers" />
          <MovieList title="Star Wars" />
          <MyFooter />
        </Container>
      </div>
    )
  }
}

export default App
