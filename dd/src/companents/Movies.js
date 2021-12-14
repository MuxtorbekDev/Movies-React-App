import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <div className="notFound">
          <img
            src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg"
            alt="404 eror"
          />
        </div>
      )}
    </div>
  );
}
