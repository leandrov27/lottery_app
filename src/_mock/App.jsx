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
                    {pusherData.map((tableData) => (
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
