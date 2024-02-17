//& react
import React from "react";
import ReactDOM from "react-dom/client";

//& pages
import App from "./pages/App.jsx";

//& config
import { PUSHER_API_KEY } from "./config.jsx";

//~ styles ===========================
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/line-awesome.min.css';
import './assets/css/vendor/nice-select.css';
import './assets/css/vendor/animate.min.css';
import './assets/css/vendor/lightcase.css';
import './assets/css/vendor/slick.css';
import './assets/css/vendor/jquery-ui.min.css';
import './assets/css/vendor/datepicker.min.css';
import './assets/css/main.css';
//~ styles ===========================

//^ scripts ===========================
import $ from 'jquery'; 
window.$ = $;

import './assets/js/vendor/bootstrap.bundle.min.js';
//^ scripts ===========================

//* broadcasting ===========================
  import Pusher from 'pusher-js';
  window.Pusher = Pusher;

  import Echo from "laravel-echo";
  window.Echo = new Echo({
      broadcaster: 'pusher',
      key: PUSHER_API_KEY,
      cluster: 'sa1',
      forceTLS: true
  });
//* broadcasting ===========================

//* =================================================================

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);