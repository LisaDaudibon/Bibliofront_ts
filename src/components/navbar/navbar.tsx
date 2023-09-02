import { Link } from 'react-router-dom';
// import Logout from '../logout/logout';
import './navbar.css';
import { useAtomValue } from 'jotai';
import { loggedInAtom } from '../../atoms/loggedInAtom';
import Logo from './logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faUser, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import { faBookBookmark, faUser, faEnvelope, faHome, faSignOut, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const loggedIn = useAtomValue(loggedInAtom);
  const isMobile = window.innerWidth <= 600;

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <a href="/books" className="logoLink">
          <Logo />
        </a>
      </div>
      <ul className="navbar-list">
        <li className="menuListItem">
          <div className="iconContainer">
            {isMobile ? (
              <>
                <Link to="/books" className="menuLink">
                  <FontAwesomeIcon icon={faBookBookmark} className="icon" title="Books" />
                  <span>Books</span>
                </Link>
                <Link to="/about" className="menuLink">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" title="Contact" />
                  <span>Notre projet</span>
                </Link>
                {loggedIn ? (
                  <>
                    <Link to="/profile" className="menuLink">
                      <FontAwesomeIcon icon={faUser} className="icon" title="Profile" />
                      <span>Profile</span>
                    </Link>
                    {/* <Link to="/about" className="menuLink">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" title="Contact" />
                      <span>Contact</span>
                    </Link> */}
                    {/* <div className="logoutWrapper">
                      <Logout />
                    </div> */}
                  </>
                ) : (
                  <>
                    <Link to="/users/sign_in" className="menuLink">
                      <FontAwesomeIcon icon={faSignInAlt} className="icon" title="Sign In" />
                      <span>Sign In</span>
                    </Link>
                    <Link to="/users" className="menuLink">
                      <FontAwesomeIcon icon={faUser} className="icon" title="Sign Up" />
                      <span>S'inscrire</span>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="/books" className="menuLink" title="Books">
                  <FontAwesomeIcon icon={faBookBookmark} className="icon" />
                  <span>Books</span>
                </Link>
                <Link to="/about" className="menuLink">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" title="Contact" />
                  <span>Notre projet</span>
                </Link>
                {loggedIn ? (
                  <>
                    <Link to="/profile" className="menuLink" title="Profile">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <span>Profile</span>
                    </Link>
                    {/* <Link to="/about" className="menuLink" title="Contact">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />
                      <span>Contact</span>
                    </Link> */}
                    {/* <div className="logoutWrapper">
                      <Logout />
                    </div> */}
                  </>
                ) : (
                  <>
                    <Link to="/users/sign_in" className="menuLink" title="Sign In">
                      <FontAwesomeIcon icon={faSignInAlt} className="icon" />
                      <span>Sign In</span>
                    </Link>
                    <Link to="/users" className="menuLink" title="Sign Up">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <span>S'inscrire</span>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
