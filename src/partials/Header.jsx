//& images
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

//* =================================================================

const Header = () => {
  return (
    <header className="header">
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-3 align-items-center">
            <Link className="site-logo site-title" to="/">
              <img src={Logo} alt="logo" />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
