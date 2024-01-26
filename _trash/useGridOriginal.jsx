import { useEffect, useState } from "react";

export function useGrid() {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [table, setTable] = useState([]);

  const generateNumbers = (data) => {
    setRows(data.rows);
    setColumns(data.columns);
    setNumbers(data.numbers);
  };

  const handleSelectNumber = (selectedNumbersFromPusher) => {
    setSelectedNumbers(selectedNumbersFromPusher);
  };

  useEffect(() => {
    let newTable = [];
    for (let i = 0; i < rows; i++) {
      let children = [];
      for (let j = 0; j < columns; j++) {
        const number = numbers[i * columns + j];
        const isSelected = selectedNumbers.includes(number);
        children.push(
          <th
            className={isSelected ? "selected" : "no-selected"}
            key={j}
            style={{ backgroundColor: isSelected ? "green" : "white" }}
          >
            {number}
          </th>
        );
      }
      newTable.push(<tr key={i}>{children}</tr>);
    }
    setTable(newTable);
  }, [numbers, rows, columns, selectedNumbers]);

  return { table, generateNumbers, handleSelectNumber };
}
