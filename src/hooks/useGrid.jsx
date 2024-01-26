//& react
import { useEffect, useState } from "react";

//* ===================================================================

export function useGrid() {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [countSelectedNumbers, setCountSelectedNumbers] = useState({});

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [table, setTable] = useState([]);
  
  const [winner, setWinner] = useState(null);

  const generateNumbers = (data) => {
    setRows(data.rows);
    setColumns(data.columns);
    setNumbers(data.numbers);
  };

  const handleSelectNumber = (selectedNumbersFromPusher) => {
    setSelectedNumbers(selectedNumbersFromPusher);
  };

  const handleSort = () => {
    const randomIndex = Math.floor(Math.random() * selectedNumbers.length);
    const selectedNumber = selectedNumbers[randomIndex];
    const newCount = {...countSelectedNumbers, [selectedNumber]: (countSelectedNumbers[selectedNumber] || 0) + 1};
    setCountSelectedNumbers(newCount);
    if (newCount[selectedNumber] === 4) {
      setWinner(selectedNumber);
    }
  };

  useEffect(() => {
    let newTable = [];
    for (let i = 0; i < rows; i++) {
      let children = [];
      for (let j = 0; j < columns; j++) {
        const number = numbers[i * columns + j];
        const isSelected = selectedNumbers.includes(number);
        const count = countSelectedNumbers[number] || 0;
        children.push(
          <th
            className={isSelected ? "selected" : "no-selected"}
            key={j}
            style={{ backgroundColor: isSelected ? "green" : "white" }}
          >
            {number} {Array(count).fill('⭐')}
          </th>
        );
      }
      newTable.push(<tr key={i}>{children}</tr>);
    }
    setTable(newTable);
  }, [numbers, rows, columns, selectedNumbers, countSelectedNumbers]);

  return { table, generateNumbers, handleSelectNumber, handleSort, winner };
}