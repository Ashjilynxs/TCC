import  "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>MeuSite</div>

      <ul className={style.navLinks}>
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className={style.btnLogin}>Entrar</button>
    </nav>
  );
}

export default Navbar;