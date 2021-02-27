import React from "react";

import ListFilms from "./ListFilms/ListFilms";
import Film from "./Film/Film";
//import Character from "./Character/Character";

const Back = ({ show, returnComponent }) => {
  return show !== 0 ? <button onClick={returnComponent}> Atrás </button> : "";
};
class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      dataFilm: "",
      showList: 0,
      selectFilm: [],
      dataCharacter: ""
    };
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleReturnComponent = this.handleReturnComponent.bind(this);
    this.handleDataCharacter = this.handleDataCharacter.bind(this);
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

  componentWillUnmount() {
    this.setState({
      error: null,
      isLoaded: false,
      items: [],
      dataFilm: "",
      showList: 0,
      selectFilm: [],
      dataCharacter: ""
    });
  }

  handleChangeData(e) {
    const { id } = e.target;
    const FILM_DATA = this.state.items[id];
    this.setState({
      dataFilm: (
        <Film film={FILM_DATA} characterData={this.handleDataCharacter} />
      ),
      showList: 1,
      selectFilm: FILM_DATA
    });
  }

  handleDataCharacter(e) {
    const number = e.target.id;
    //const { selectFilm } = this.state;
    this.setState({
      dataCharacter: number,
      showList: 2
    });
  }

  handleReturnComponent() {
    let numberComponent = 0;
    let change = this.state.showList > 0;
    if (change) {
      numberComponent = this.state.showList - 1;
    }
    this.setState({ showList: numberComponent });
  }

  render() {
    const {
      error,
      isLoaded,
      items,
      dataFilm,
      showList,
      dataCharacter
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {showList === 0 ? (
            <ListFilms films={items} changeComponent={this.handleChangeData} />
          ) : showList === 1 ? (
            dataFilm
          ) : (
            dataCharacter
          )}
          <Back show={showList} returnComponent={this.handleReturnComponent} />
        </div>
      );
    }
  }
}

export default StarWars;
