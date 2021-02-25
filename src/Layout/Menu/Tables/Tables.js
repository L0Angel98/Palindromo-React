import "./stylesTables.css";
import React from "react";

class Table extends React.Component {
  render() {
    const TABLE_ROWS_NUMER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const TABLE_NUMER = this.props.number;
    const TABLE = TABLE_ROWS_NUMER.map((row) => (
      <li key={row}>
        {TABLE_NUMER} x {row} = {TABLE_NUMER * row}
      </li>
    ));
    return (
      <div>
        <ul>{TABLE}</ul>
      </div>
    );
  }
}

// class Tables extends React.Component {
//   render() {

//     return (

//     );
//   }
// }

const Tables = () => {
  // const TABLES_NUMER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const ALL_TABLES = TABLES_NUMER.map((numerTable) => (
  //   <Table number={numerTable} key={`contaienr_${numerTable}`} />
  // ));
  const allTable = (table) => {
    const TABLES_NUMER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return TABLES_NUMER.map((numerTable) => (
      <Table number={numerTable} key={`contaienr_${numerTable}`} />
    ));
  };

  return (
    <div className="mainTables">
      <h1>Tablas</h1>
      <input value="2" />
      <div className="FlexTables">{allTable(2)}</div>
    </div>
  );
};

export default function Tabla() {
  return <Tables />;
}
