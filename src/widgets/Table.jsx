//& react
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

//& hooks
import { useTable } from "../hooks/useTable";

//* =================================================================

const Table = ({ data }) => {
  const { table, generateNumbers, handleSelectNumber, handleSort, winner, winnerName} = useTable();

  useEffect(() => {
    generateNumbers(data);
    handleSelectNumber(data.selected_numbers.map(item => item));
  }, [data]);

  return (
    <div className="col-lg-4 mb-30">
      <div className="lottery-single">
        <div className="lottery-single__header">
          <span className="titcket-number">GRILLA #{data.id}</span>
        </div>

        <div className="lottery-single__body">
          <ul className="lottery-single__number" data-bs-toggle="modal" data-bs-target="#pickNumberModal">
            {table}
          </ul>
        </div>

        <p className="mt-0 pb-0">{data.rows} x {data.columns}</p>

        <div className="lottery-single__footer text-center pt-3 pb-3">
          <button onClick={handleSort} className="cmn-btn" disabled={!!winner}>
            {!!winner ? `¡${winnerName} ha ganado!` : 'SORTEAR'}
          </button>
          {winner && <p>El número {winner} ha ganado!</p>}
          {winner && <Navigate to="/winner" replace={true} state={{ winnerName }}/>}
        </div>
      </div>
    </div>
  );
};

export default Table;