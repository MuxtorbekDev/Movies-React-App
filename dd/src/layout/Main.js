import React from "react";
import Movies from "../companents/Movies";
import Loading from "../companents/Loading";
import Search from "../companents/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=52d4c6e2&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=52d4c6e2&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <div className="container content">
        <div className="search">
          <Search searchMovies={this.searchMovies} />
        </div>
        <div>
          {this.state.loading ? (
            <Loading />
          ) : (
            <Movies movies={this.state.movies} />
          )}
        </div>
      </div>
    );
  }
}
