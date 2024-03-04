//& react
import { useState } from "react";

//& components
import ScrollToTop from "../components/ScrollToTop";

//& partials
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Hero from "../partials/Hero";

//& widgets
import PickNumberModal from "../widgets/PickNumberModal";
import LotteryInfo from "../widgets/LotteryInfo";
import Table from "../widgets/Table";

//& config
import { PUSHER_CHANNEL, PUSHER_EVENT } from "../config.jsx";

//* =================================================================

function App() {
  
  const [pusherData, setPusherData] = useState([]);

  var channel = Echo.channel(PUSHER_CHANNEL);
  channel.listen(PUSHER_EVENT, function(data) {
    setPusherData(data.tables);
  }, []);

  const test_data =  
  { 
    "tables": [
      {
        "id": 1,
        "rows": 3,
        "columns": 3,
        "numbers": [12, 45, 78, 34, 89, 56, 23, 67, 90],
        "selected_numbers": [
          {
            "customer": "Leandro Valdez",
            "lucky_number": 12
          },
          {
            "customer": "Vanessa Silva",
            "lucky_number": 78
          }
        ]
      },
      {
        "id": 2,
        "rows": 5,
        "columns": 5,
        "numbers": [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 122, 133, 144, 155, 166, 177, 188, 199, 200, 211, 222, 233, 244, 255],
        "selected_numbers": [
          {
            "customer": "Claudio Daniel",
            "lucky_number": 133
          },
          {
            "customer": "Markeloff Dimitri",
            "lucky_number": 66
          },
          {
            "customer": "John Doe",
            "lucky_number": 200
          }
        ]
      },
      {
        "id": 3,
        "rows": 7,
        "columns": 7,
        "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        "selected_numbers": [
          {
            "customer": "Like Mike",
            "lucky_number": 4
          },
          {
            "customer": "Micaela Davalos",
            "lucky_number": 66
          },
          {
            "customer": "John Trabolta",
            "lucky_number": 27
          },
          {
            "customer": "Robin Hood",
            "lucky_number": 47
          }
        ]
      }
    ]
  }

  return (
    <>
      <ScrollToTop />

      <div className="page-wrapper">
        <Header />

        <Hero />

        <section className="pb-0 mt-minus-300">
          <div className="container">
            <div className="row">
              <LotteryInfo />

              <div className="col-lg-12">
                <div className="lottery-wrapper">
                  <h2 className="lottery-wrapper__title" style={{marginTop: -60}}>POZO ACUMULADO: 700.000 gs.</h2>

                  <p>
                    Elige tu número de la suerte, si sale sorteado 5 veces eres el ganador!
                  </p>

                  <div className="row mt-50 mb-none-30">
                    {
                      /*
                        {pusherData.map((tableData) => (
                          <Table key={tableData.id} data={tableData}/>
                        ))}
                      */
                    }

                    {test_data.tables.map((tableData) => (
                      <Table key={tableData.id} data={tableData}/>
                    ))}

                    <button className="cmn-btn" data-bs-toggle="modal" data-bs-target="#pickNumberModal">
                      Asignar Números
                    </button>
                    <PickNumberModal />
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
