import { useEffect } from "react";
import { useGrid } from "../hooks/useGrid";

function Grid({ data }) {
  const { table, generateNumbers, handleSelectNumber, handleSort, winner } = useGrid();

  useEffect(() => {
    generateNumbers(data);
    handleSelectNumber(data.selected_numbers);
  }, [data]);

  return (
    <div className="row g-3">
      <div className="container">
        <div className="card text-center">
          <div className="card-header">TABLA {data.id}</div>

          <div className="card-body">
            <table className="table table-borderless">
              <tbody>{table}</tbody>
            </table>
          </div>

          <div className="card-footer text-muted">{data.rows} x {data.columns}</div>
        </div>

          <div>
            <button onClick={handleSort}>SORTEAR</button>
            {winner && <p>El número {winner} ha ganado!</p>}
          </div>
      </div>
    </div>
  );
}

export default Grid;
