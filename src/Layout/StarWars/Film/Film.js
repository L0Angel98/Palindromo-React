import React from "react";
import DescriptionFilm from "./DescriptionFilm/DescriptionFilm";

const Film = ({ film, characterData }) => {
  const ONE_FILM = film;

  return (
    <DescriptionFilm
      title={ONE_FILM.title}
      opening={ONE_FILM.opening_crawl}
      director={ONE_FILM.director}
      producer={ONE_FILM.producer}
      characters={ONE_FILM.characters}
      characterData={characterData}
    />
  );
};

export default Film;
