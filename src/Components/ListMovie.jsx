import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../MovieApi";

const imgURL = "https://image.tmdb.org/t/p/w300/";

const ListMovie = () => {
  const [getPopularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const MaolaartMovies = () => {
    return getPopularMovie.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <img
            className="Movie-image"
            src={`${imgURL}${movie.backdrop_path}`}
            alt=""
          />
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-date">( {movie.release_date} )</div>
          <div className="Movie-rate">Rating: {movie.vote_average}/10</div>
        </div>
      );
    });
  };

  console.log({ popularMovie: getPopularMovie });

  const search = async(q) => {
    if(q.length > 2){
      const query = await searchMovie(q)
      setPopularMovie(query.results)
      // console.log({query:query});
    }
  };

  return (
    <div>
      <input
        placeholder="Search..."
        className="Movie-search"
        onChange={({ target }) => search(target.value)}
      />
      <div className="Movie-container">
        <MaolaartMovies />
      </div>
    </div>
  );
};

export default ListMovie;
