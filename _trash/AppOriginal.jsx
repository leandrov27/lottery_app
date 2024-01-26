import { useEffect, useState } from "react";
import { useGrids } from "../hooks/useGrids";

function AppOriginal() {
  const [pusherData, setPusherData] = useState([]);

  const [inputRows, setInputRows] = useState(0);
  const [inputColumns, setInputColumns] = useState(0);

  const { generateTable, generateNumbers, handleSelectNumber } = useGrids();

  var channel = Echo.channel('chGrid');
  channel.listen('.evGrid', function(data) {
    setPusherData(data);
  }, []);

  useEffect(() => {
    generateNumbers(pusherData);
    handleSelectNumber(pusherData.selected_numbers);
    setInputRows(pusherData.rows);
    setInputColumns(pusherData.columns);
  }, [pusherData]);

  return (
    <>
      <div className="container mt-3 d-flex justify-content-center">
        <div className="row g-3">
        <div className="container">
          <div className="card text-center">
            <div className="card-header">TABLA</div>

            <div className="card-body">
              <table className="table table-borderless">
                <tbody>{generateTable()}</tbody>
              </table>
            </div>

            <div className="card-footer text-muted">{inputRows} x {inputColumns}</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
