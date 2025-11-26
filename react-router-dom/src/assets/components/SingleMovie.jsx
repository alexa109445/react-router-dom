import { Component } from 'react'
import { Col } from 'react-bootstrap'

class SingleMovie extends Component {
  render() {
    return (
      <Col className="mb-2">
        <img className="img-fluid" src={this.props.data.Poster} alt="movie" />
      </Col>
    )
  }
}

export default SingleMovie
