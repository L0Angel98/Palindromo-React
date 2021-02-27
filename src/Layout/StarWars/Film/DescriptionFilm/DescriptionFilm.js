import CharacterList from "../CharacterList/CharacterList";
const DescriptionFilm = ({
  title,
  opening,
  director,
  producer,
  characters,
  characterData
}) => {
  return (
    <div>
      <h1>Title</h1>
      <p>{title}</p>
      <h1>Opening crawl</h1>
      <p>{opening}</p>
      <h1>Director</h1>
      <p>{director}</p>
      <h1>Producer</h1>
      <p>{producer}</p>
      <h1>Characters</h1>
      <ul>
        <CharacterList characters={characters} characterData={characterData} />
      </ul>
    </div>
  );
};

export default DescriptionFilm;
