import "./Palindrome.css";
import React from "react";

class CheckWord extends React.Component {
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

    let tex = this.state.text,
      word,
      chain = removeAccents(tex),
      texOriginal = chain.toLowerCase(),
      letterSpace = texOriginal.split(""),
      chainWithoutSpace = "";

    for (let i in letterSpace) {
      if (letterSpace[i] !== " ") {
        chainWithoutSpace += letterSpace[i];
      }
    }

    let letters = chainWithoutSpace.split("");
    let lettersReverse = chainWithoutSpace.split("").reverse();
    let same = true;

    for (let i in letters) {
      let equalLetter = !(letters[i] === lettersReverse[i]);
      if (equalLetter) {
        same = false;
      }
    }

    same ? (word = " es un palíndromo") : (word = " no es un palíndromo");

    this.setState({ text: this.state.text, result: word });
    event.preventDefault();
  }

  render() {
    return (
      <div className="main">
        <section id="check">
          <h1>Palabras palindromas</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="word"
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
      </div>
    );
  }
}

export default CheckWord;
