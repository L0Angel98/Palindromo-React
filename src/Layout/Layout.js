import React from "react";
import Palindrome from "./Palindrome/Palindrome";
import Tables from "./Tables/Tables";
import Form from "./Form/Form";
import Menu from "./Menu/Menu";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Palindrome: true,
      Tables: false,
      Form: false,
      component: <Palindrome />
    };
    this.handleChangeComponent = this.handleChangeComponent.bind(this);
  }

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
        <Menu changeComponent={this.handleChangeComponent} />
        {this.state.component}
        <footer>
          <p>&copy; 2020 Luis Ángel Velázquez Palomino</p>
        </footer>
      </div>
    );
  }
}

export default ListMenu;
