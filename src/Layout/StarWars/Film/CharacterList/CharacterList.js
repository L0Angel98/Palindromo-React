import CharacterName from "../CharactersName/CharacterName";

const CharacterList = ({ characters, characterData }) => {
  return characters.map((Character) => (
    <li key={characters.indexOf(Character)}>
      <button id={characters.indexOf(Character)} onClick={characterData}>
        <CharacterName ipName={Character} />
      </button>
    </li>
  ));
};

export default CharacterList;
