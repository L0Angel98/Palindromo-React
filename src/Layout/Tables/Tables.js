import "./Tables.css";
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
const Tables = () => {
  const allTable = () => {
    const TABLES_NUMER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return TABLES_NUMER.map((numerTable) => (
      <Table number={numerTable} key={`contaienr_${numerTable}`} />
    ));
  };

  return (
    <div className="mainTables">
      <h1>Tablas</h1>
      <div className="FlexTables">{allTable()}</div>
    </div>
  );
};

export default Tables;
