import React from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import './Home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by:rating'
    )
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies()
  }
  componentDidUpdate() {
    console.log('업데이트완료')
  }
  componentWillUnmount() {
    console.log('종료')
  }
  render() {
    console.log('랜더링중')
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home
