import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid px-5">

        {/* Logo */}
        <Link className={`navbar-brand ${styles.logo}`} to="/">
          Instituto Recomeçar
        </Link>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/">
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/sobre">
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>

        {/* Botão */}
        <Link to="/login" className={styles.btnEntrar}>
          Entrar
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;