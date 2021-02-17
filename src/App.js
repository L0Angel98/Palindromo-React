//import "./styles.css";
import React from "react";

class SearchWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", result: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    const removeAccents = (str) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    var tex = this.state.text;
    var word;
    var chain = removeAccents(tex);
    var texOriginal = chain.toLowerCase();
    var letterSpace = texOriginal.split("");
    var chainWithoutSpace = "";
    for (let i in letterSpace) {
      if (letterSpace[i] !== " ") {
        chainWithoutSpace += letterSpace[i];
      }
    }

    var letters = chainWithoutSpace.split("");
    var lettersReverse = chainWithoutSpace.split("").reverse();
    var same = true;

    for (let i in letters) {
      if (letters[i] === lettersReverse[i]) {
      } else {
        same = false;
      }
    }

    if (same) {
      word = " es un palíndromo";
    } else {
      word = " no es un palíndromo";
    }
    this.setState({ text: this.state.text, result: word });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <section>
          <h1>Palabras palindromas</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="word"
              id="text"
              placeholder="Escribe la palabra"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input id="button" type="submit" value="Revisar" />
          </form>
        </section>

        <section id="answer">
          <h1 id="youWord">{this.state.text}</h1>
          <p id="result">{this.state.result}</p>
        </section>

        {/*<footer>
          <p>&copy; 2020 Luis Ángel Velázquez Palomino</p>
        </footer>*/}
      </div>
    );
  }
}

export default function App() {
  return <SearchWord />;
}
