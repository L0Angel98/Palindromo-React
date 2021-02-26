import React from "react";
import Palindrome from "./Palindrome/Palindrome";
import Tables from "./Tables/Tables";
import Form from "./Form/Form";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import StarWars from "./StarWars/StarWars";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <Palindrome />
    };
    this.handleChangeComponent = this.handleChangeComponent.bind(this);
  }

  handleChangeComponent(e) {
    const { id } = e.target;
    let comp = "";
    if (id === "pal") comp = <Palindrome />;
    else if (id === "tabs") comp = <Tables />;
    else if (id === "form") comp = <Form />;
    else comp = <StarWars />;

    this.setState({ component: comp });
  }

  render() {
    return (
      <div id="MainMenu">
        <Menu changeComponent={this.handleChangeComponent} />
        {this.state.component}
        <Footer />
      </div>
    );
  }
}

export default ListMenu;
