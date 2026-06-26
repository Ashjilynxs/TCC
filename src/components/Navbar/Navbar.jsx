
function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Instituto Recomeçar</div>

      <ul className={style.navLinks}>
        <li><Link to="/Inicial">Início </Link></li>
        <li><Link to="/Sobre">Sobre nós </Link></li>
      
      </ul>

      <button className={style.btnLogin}>Entrar</button>
    </nav>
  );
}

export default Navbar;