import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logoArea}>
          <h2>Instituto Recomeçar</h2>
          <p>Plataforma dedicada ao empreendedorismo feminino.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;