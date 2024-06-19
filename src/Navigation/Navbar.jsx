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
          <ul className={`${styles.nav}`}>
            <a>
                <img className={`${styles.logo}`} src="./icon_transparent.png" alt="" />
            </a>
            <span className={`${styles.vertBar}`} />
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
              <span className={`${styles.horBar}`}></span>
              <span className={`${styles.horBar}`}></span>
              <span className={`${styles.horBar}`}></span>
            </div>
          </ul>
        </nav>
      </header>
      <div className={`${styles.menuWrapper} ${isActive ? styles.active : ''}`}>
        <ul className={`${styles.menuInner}`}>
          <ul className={`${styles.socialLinks}`}>
            <li>
              <a className={`${styles.socialLinks_link}`} href='https://github.com/kelsbr123' target='_blank'>
                <img src="./github.svg"/>
              </a>
            </li>
            <li>
              <a className={`${styles.socialLinks_link}`} href="https://www.linkedin.com/in/kels-barrett-rivkin/" target='_blank'>
                <img src="./linkedin.svg"/>
              </a>
            </li>
            <li>
              <a className={`${styles.socialLinks_link}`} href="mailto:kelsbr@colostate.edu" target='_blank'>
                <img src="./email.svg"/>
              </a>
            </li>
          </ul>
          <ul className={`${styles.mainLinks}`}>
            <li onClick={removeActive}>
              <Link to="/">
                <p className={`${styles.mainLinks}`}>Home</p>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about">
                <p className={`${styles.mainLinks}`}>About</p>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/projects">
                <p className={`${styles.mainLinks}`}>Projects</p>
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/contact'>
                <p className={`${styles.mainLinks}`}>Contact</p>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
export default Navbar