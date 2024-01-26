import { useState } from "react";
import Grid from './Grid';

function App() {
  const [pusherData, setPusherData] = useState([]);

  var channel = Echo.channel('chGrid');
  channel.listen('.evGrid', function(data) {
    setPusherData(data.tables);
  }, []);

  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main>
          <div className="container mt-3 d-flex justify-content-center">
            {pusherData.map((tableData) => (
              <Grid key={tableData.id} data={tableData} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
