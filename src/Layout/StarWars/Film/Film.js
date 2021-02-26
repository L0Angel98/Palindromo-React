import React from "react";

//import ListFilms from "./ListFilms/ListFilms"

class Film extends React.Component {
  //constructor(props) {
  // super(props);
  //this.state = {

  //};
  //}
  render() {
    const ONE_FILM = this.props.film;
    return (
      <div>
        <h1>Title</h1>
        <p>{ONE_FILM.title}</p>
        <h1>Opening crawl</h1>
        <p>{ONE_FILM.opening_crawl}</p>
        <h1>Director</h1>
        <p>{ONE_FILM.director}</p>
        <h1>Producer</h1>
        <p>{ONE_FILM.producer}</p>
        <h1>Characters</h1>
      </div>
    );
  }
}

export default Film;
