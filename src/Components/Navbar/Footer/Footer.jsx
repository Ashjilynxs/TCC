import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>

      <div className={style.container}>

        <div className={style.logoArea}>
          <h2>Instituto Recomeçar</h2>

          <p>
            Plataforma dedicada ao empreendedorismo feminino,
            promovendo oportunidades,
            capacitação e apoio para mulheres.
          </p>
        </div>

        <div className={style.links}>
          <h3>Links</h3>

          <a href="#">Início</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </div>

        <div className={style.contato}>
          <h3>Contato</h3>

          <p>institutorecomecar@email.com</p>
          <p>(11) 99999-9999</p>
        </div>

      </div>

      <div className={style.copy}>
        © 2026 Instituto Recomeçar • Todos os direitos reservados.
      </div>

    </footer>
  );
}

export default Footer;