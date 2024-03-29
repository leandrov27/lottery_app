//& react
import { useEffect, useState } from "react";

//* ===================================================================

export function useTable() {
  const [numbers, setNumbers] = useState([]); // Almacena los números que se mostrarán en la tabla
  const [selectedNumbers, setSelectedNumbers] = useState([]); // Almacena los números que han sido seleccionados
  const [customers, setCustomers] = useState([]);
  const [countSelectedNumbers, setCountSelectedNumbers] = useState({}); // Almacena cuántas veces ha sido seleccionado cada número

  const [rows, setRows] = useState(0); // Almacena la cantidad de filas que tendrá la tabla
  const [columns, setColumns] = useState(0); // Almacena la cantidad de columnas que tendrá la tabla
  const [table, setTable] = useState([]); // Almacena la tabla generada

  const [winner, setWinner] = useState(null); // Almacena el número ganador, si es que hay uno
  const [winnerName, setWinnerName] = useState(''); // Almacena el nombre del ganador, si es que hay uno

  // Función para generar los números que se mostrarán en la tabla
  const generateNumbers = (data) => {
    setRows(data.rows); // Establece la cantidad de filas
    setColumns(data.columns); // Establece la cantidad de columnas
    setNumbers(data.numbers); // Establece los números
  };

  // Función para manejar la selección de números
  const handleSelectNumber = (selectedNumbersFromPusher) => {
    setSelectedNumbers(selectedNumbersFromPusher.map(number => number.lucky_number)); // Actualiza los números seleccionados con los recibidos de Pusher
    setCustomers(selectedNumbersFromPusher.map(number => number)); // Actualiza el cliente seleccionado con los datos recibidos de Pusher
  };

  /* 
    - La función `handleSort` se encarga de seleccionar un número aleatorio de la lista de números seleccionados (`selectedNumbers`), que se recibe de Pusher.
    - Calcula un índice aleatorio y usa ese índice para seleccionar un número de la lista `selectedNumbers`.
    - Luego, actualiza el estado `countSelectedNumbers` incrementando el conteo para el número seleccionado. Si el número seleccionado no existe en `countSelectedNumbers`, se inicializa su conteo a 1.
    - `countSelectedNumbers` es un objeto donde las claves son los números seleccionados y los valores son las veces que cada número ha sido seleccionado.
    - Finalmente, si el conteo para el número seleccionado alcanza 5, se actualiza el estado `winner` con el número seleccionado. Esto podría indicar que el número seleccionado ha sido "ganado" o alcanzado un cierto umbral.
  */
  const handleSort = () => {
    const randomIndex = Math.floor(Math.random() * selectedNumbers.length);
    const selectedNumber = selectedNumbers[randomIndex];
    const newCount = {
      ...countSelectedNumbers,
      [selectedNumber]: (countSelectedNumbers[selectedNumber] || 0) + 1,
    };
    setCountSelectedNumbers(newCount);
    if (newCount[selectedNumber] === 5) {
      const winnerName = getWinnerName(selectedNumber);
      setWinner(selectedNumber);
      setWinnerName(winnerName);
    }
  };

  /* 
    - La función `useEffect` se encarga de generar una tabla de números en React.
    - La tabla se genera en función de la cantidad de filas (`rows`) y columnas (`columns`) recibidas de Pusher.
    - Para cada celda de la tabla, se selecciona un número de la lista `numbers` y se verifica si ese número está en la lista de números seleccionados (`selectedNumbers`).
    - Si el número está en `selectedNumbers`, se le asigna la clase "active", lo que podría indicar que ese número ha sido seleccionado por un usuario.
    - Finalmente, se actualiza el estado `table` con la nueva tabla generada.
    - Este efecto se ejecuta cada vez que cambian `numbers`, `rows`, `columns`, `selectedNumbers` o `countSelectedNumbers`.
  */
  useEffect(() => {
    let newTable = [];
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const number = numbers[i * columns + j];
        const isSelected = selectedNumbers.includes(number);
        const isWinner = number === winner;
        const count = countSelectedNumbers[number] || 0;

        const customerName = getWinnerName(number);
  
        newTable.push(
          <li title={customerName} className={`${isSelected ? (count === 4 ? "active almostWinner" : "active") : ""} ${isWinner ? "winner" : ""}`} key={number}>
            <div>
              {number} 

              {Array(count).fill(0).map((_, index) => (
                <i key={index + 1} className={`neon star-${index + 1}`}>⭐</i>
              ))}
            </div>
          </li>
        );
      }
    }
  
    setTable(newTable);
  }, [numbers, rows, columns, selectedNumbers, countSelectedNumbers]);

  // Función para obtener el nombre del ganador
  const getWinnerName = (selectedNumber) => {
    // Buscar el objeto que tenga el mismo lucky_number que el selectedNumber
    const winnerObject = customers.find(
      (item) => item.lucky_number === selectedNumber
    );

    // Si se encuentra el objeto, devolver el nombre del cliente
    if (winnerObject) {
      return winnerObject.customer;
    }

    // Si no se encuentra el objeto, devolver un valor por defecto
    return "Desconocido";
  };

  return { table, generateNumbers, handleSelectNumber, handleSort, winner, winnerName, selectedNumbers, countSelectedNumbers };
}