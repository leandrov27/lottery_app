//& react
import { useEffect } from "react";

//& hooks
import { useTable } from "../hooks/useTable";

//* =================================================================

const Table = ({ data }) => {
  const { table, generateNumbers, handleSelectNumber, handleSort, winner, selectedNumbers, countSelectedNumbers } = useTable();

  useEffect(() => {
    generateNumbers(data);
    handleSelectNumber(data.selected_numbers);
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
            {!!winner ? `GANADOR #${winner}` : 'SORTEAR'}
          </button>
          {winner && <p>El número {winner} ha ganado!</p>}
        </div>
      </div>
    </div>
  );
};

export default Table;
