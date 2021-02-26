import React from "react";

//import ListFilms from "./ListFilms/ListFilms"
import CharacterName from "../Characters/CharactersName/CharactersName";
class Film extends React.Component {
  //constructor(props) {
  // super(props);
  //this.state = {

  //};
  //}
  render() {
    const ONE_FILM = this.props.film;
    const CharacterList = ONE_FILM.characters.map((Character) => (
      <li key={Character.id}>
        <button>
          <CharacterName ipName={Character} />
        </button>
      </li>
    ));
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
        <ul>{CharacterList}</ul>
      </div>
    );
  }
}

export default Film;
