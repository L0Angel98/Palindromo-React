/*import React from "react";
import CharactersName from "./CharactersName/CharactersName";
class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films/4/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.characters
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button>{<CharactersName ipName={item} />}</button>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Characters;
*/
import React from "react";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characteristics: []
    };
  }

  componentDidMount() {
    let ipName = this.props.ipCharacters;
    let NewName = "";
    for (let i in ipName) {
      if (Number(i) === 4) {
        NewName += "s";
        NewName += ipName[i];
      } else {
        NewName += ipName[i];
      }
    }
    fetch(NewName)
      .then((res) => res.json())
      .then(
        (characteristic) => {
          this.setState({
            isLoaded: true,
            characteristics: characteristic
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
      name: ""
    });
  }

  render() {
    const { error, isLoaded, characteristics } = this.state;
    if (error) {
      return <label>Error: {error.message}</label>;
    } else if (!isLoaded) {
      return <label>Loading...</label>;
    } else {
      return <label>{characteristics.name}</label>;
    }
  }
}

export default Characters;
