const ListFilms = ({ films, changeComponent }) => {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <button onClick={changeComponent} id={films.indexOf(film)}>
            {film.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListFilms;
