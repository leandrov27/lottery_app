//& images
import { Link } from 'react-router-dom';
import roundShape from '../assets/images/elements/round-shape-2.png';

//* =================================================================

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="bg-shape--top">
        <img src={roundShape} alt="round-shape" />
      </div>

      <div className="container pt-120">
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <p className="copy-right-text text-lg-start text-center mb-lg-0 mb-3">
              Copyright © 2024. Todos los derechos reservados por {" "}
              <Link to="/">
                Rifa
              </Link>
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="social-links justify-content-lg-end justify-content-center">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
