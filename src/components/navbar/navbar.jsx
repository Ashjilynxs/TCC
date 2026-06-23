import style from  "./Navbar.module.css";
 
function Navbar() {
  return (
<nav className="navbar">
<div className="logo">MeuSite</div>
 
      <ul className="nav-links">
<li><a href="#home">Início</a></li>
<li><a href="#sobre">Sobre</a></li>
<li><a href="#servicos">Serviços</a></li>
<li><a href="#contato">Contato</a></li>
</ul>
 
      <button className="btn-login">Entrar</button>
</nav>
  );
}
 
export default Navbar;