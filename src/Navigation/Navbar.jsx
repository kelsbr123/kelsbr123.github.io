import { useState } from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <Link to="/about">
                <a className={`${styles.navLink}`}>About</a>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/projects">
                <a className={`${styles.navLink}`}>Projects</a>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/contact'>
                <a className={`${styles.navLink}`}>Contact</a>
              </Link>
            </li>
          </ul>
          <ul className={`${styles.nav}`}>
            <a>
              <img className={`${styles.logo}`} src="./icon_transparent.png" alt="" />
            </a>
            <span className={`${styles.vertBar}`}>
            </span>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
              <span className={`${styles.horBar}`}></span>
              <span className={`${styles.horBar}`}></span>
              <span className={`${styles.horBar}`}></span>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Navbar