import CharacterName from "../CharactersName/CharactersName";

const CharacterList = ({ characters, characterData }) => {
  return (
    <ul>
      {characters.map((Character) => (
        <li key={characters.indexOf(Character)}>
          <button onClick={characterData} id={characters.indexOf(Character)}>
            <CharacterName ipName={Character} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
