//& react
import React from "react";
import ReactDOM from "react-dom/client";

//& pages
import App from "./pages/App.jsx";

//& styles
import "./css/styles.css";

//* broadcasting ===========================
  import Pusher from 'pusher-js';
  window.Pusher = Pusher;

  import Echo from "laravel-echo";
  window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 'b88a8252e741807da26e',
      cluster: 'sa1',
      forceTLS: true
  });
//* broadcasting ===========================

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);