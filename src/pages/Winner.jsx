//& react
import { Link, useLocation } from "react-router-dom";

import "../assets/css/pyro.scss";

export const Winner = () => {
  const location = useLocation();
  const winnerName = location.state.winnerName;

  return (
    <>
      <div class="pyro">
        <div class="firework-1"></div>
        <div class="firework-2"></div>
        <div class="firework-3"></div>
        <div class="firework-4"></div>
        <div class="firework-5"></div>
        <div class="firework-6"></div>
        <div class="firework-7"></div>
        <div class="firework-8"></div>
        <div class="firework-9"></div>
        <div class="firework-10"></div>
        <div class="firework-11"></div>
        <div class="firework-12"></div>
        <div class="firework-13"></div>
        <div class="firework-14"></div>
        <div class="firework-15"></div>
        <div class="title">Felicitaciones {winnerName} 🎉</div>

        <Link className="cmn-btn btn-regresar" to="/">
          REGRESAR A INICIO
        </Link>
      </div>
    </>
  );
};
