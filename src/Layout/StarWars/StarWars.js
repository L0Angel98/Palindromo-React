import React from "react";

import ListFilms from "./ListFilms/ListFilms";
import Film from "./Film/Film";

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      dataFilm: "",
      returnListFilms: false
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChangeData(e) {
    /* const { id } = e.target;
    //const { items } = this.state;
    //const FILM_DATA = items[id];
    this.setState({ dataFilm: id });*/
  }

  render() {
    const { error, isLoaded, items, dataFilm } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ListFilms films={items} changeComponent={this.handleChangeData} />
          {dataFilm}
        </div>
      );
    }
  }
}

export default StarWars;
