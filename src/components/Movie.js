import React from "react";
import PropTypes from "prop-types";
import "../scss/Movie.scss";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <article class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <ul class="movie__genres">
          {genres.map((genre) => (
            <li class="genres__genre">📌 {genre}</li>
          ))}
        </ul>
        <p class="movie__summary">{summary}</p>
      </div>
    </article>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;