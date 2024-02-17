//& images
import Logo from '../assets/images/logo.png';

//* =================================================================

const Header = () => {
  return (
    <header className="header">
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-3 align-items-center">
            <a className="site-logo site-title" href="index.html">
              <img src={Logo} alt="logo" />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
