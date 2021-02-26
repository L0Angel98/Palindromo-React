import React from "react";

class CharactersName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      name: ""
    };
  }

  componentDidMount() {
    let ipName = this.props.ipName;
    let NewName = "";
    for (let i in ipName) {
      if (i == 4) {
        NewName += "s";
        NewName += ipName[i];
      } else {
        NewName += ipName[i];
      }
    }
    fetch(NewName)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            name: result.name
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
    const { error, isLoaded, name } = this.state;
    if (error) {
      return <label>Error: {error.message}</label>;
    } else if (!isLoaded) {
      return <label>Loading...</label>;
    } else {
      return <label>{name}</label>;
    }
  }
}

export default CharactersName;
