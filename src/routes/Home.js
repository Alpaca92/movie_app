import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../scss/App.scss";

class Home extends React.Component {
  state = {
    isLoading: true,
    list: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          "Loading..."
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
