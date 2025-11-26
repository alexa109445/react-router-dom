import { Row, Spinner } from 'react-bootstrap'
import SingleMovie from './SingleMovie'
import { Component } from 'react'

class MovieList extends Component {
  state = {
    gallery: [],
    loading: true,
    error: false,
  }

  OMDB_URL = 'http://www.omdbapi.com/?apikey=24ad60e9'

  fetchMovies = () => {
    fetch(this.OMDB_URL + '&s=' + this.props.title)
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.Response === 'True') {
          this.setState({ gallery: responseObject.Search, loading: false })
        } else {
          this.setState({ error: true, loading: false })
        }
      })
      .catch((err) => {
        this.setState({ error: true })
        console.log('An error has occurred:', err)
      })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    return (
      <>
        <h4>{this.props.title}</h4>
        {this.state.error && (
          <Alert variant="danger" className="text-center">
            An error has occurred, please try again!
          </Alert>
        )}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
          {this.props.loading ? (
            <div className="spinner-container">
              <Spinner animation="border" variant="light" />
            </div>
          ) : (
            this.state.gallery.map((movie) => (
              <SingleMovie data={movie} key={movie.imdbID + movie.Poster} />
            ))
          )}
        </Row>
      </>
    )
  }
}

export default MovieList
