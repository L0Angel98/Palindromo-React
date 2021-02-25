import "./styles.css";
import React from "react";
import Palindrome from "./Palindrome/Palindrome";
import Tables from "./Tables/Tables";
import Form from "./Form/Form";

const Mmenu = () => {
  return (
    <header>
      <ul>
        <li>
          <button onClick={this.handlesPalindrome}>Palindromo</button>
        </li>
        <li>
          <button onClick={this.handlesTables}>Tablas</button>
        </li>
        <li>
          <button onClick={this.hanlesForm}>Formulario</button>
        </li>
      </ul>
    </header>
  );
};

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Palindrome: true,
      Tables: false,
      Form: false,
      component: <Palindrome />
    };
    // this.handlesPalindrome = this.handlesPalindrome.bind(this);
    // this.handlesTables = this.handlesTables.bind(this);
    // this.hanlesForm = this.hanlesForm.bind(this);
    this.handleChangeComponent = this.handleChangeComponent.bind(this);
  }
  // handlesPalindrome() {
  //   this.setState({ Palindrome: true, Tables: false, Form: false });
  // }
  // handlesTables() {
  //   this.setState({ Palindrome: false, Tables: true, Form: false });
  // }
  // hanlesForm() {
  //   this.setState({ Palindrome: false, Tables: false, Form: true });
  // }

  handleChangeComponent(e) {
    const { id } = e.target;
    let comp = "";
    if (id === "pal") comp = <Palindrome />;
    else if (id === "tabs") comp = <Tables />;
    else comp = <Form />;

    this.setState({ component: comp });
  }

  render() {
    return (
      <div id="MainMenu">
        {/* <Mmenu /> */}
        <header>
          <ul>
            <li>
              <button onClick={this.handleChangeComponent} id="pal">
                Palindromo
              </button>
            </li>
            <li>
              <button onClick={this.handleChangeComponent} id="tabs">
                Tablas
              </button>
            </li>
            <li>
              <button onClick={this.handleChangeComponent} id="form">
                Formulario
              </button>
            </li>
          </ul>
        </header>

        {this.state.component}

        <footer>
          <p>&copy; 2020 Luis Ángel Velázquez Palomino</p>
        </footer>
      </div>
    );
  }
}

export default function Menu() {
  return <ListMenu />;
}
// export default Menu
