import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <main className={styles.container}>

      <section className={styles.cabecalho}>
        <h1>Olá, empreendedora! 👋</h1>
        <p>Confira o que está acontecendo na sua loja.</p>
      </section>

      <section className={styles.produtos}>
        <h2>🛍️ Produtos Mais Vendidos</h2>
        <p>Os favoritos da nossa comunidade — feitos com amor pelas empreendedoras do Instituto</p>

        <div className={styles.cards}>

          <div className={styles.card}>
            <div className={styles.imagem}>
              Imagem
            </div>

            <h3>Sabonetes Naturais</h3>
            <p>Juliana Costa</p>
            <strong>R$ 29,50</strong>

            <button>🛒 Comprar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.imagem}>
              Imagem
            </div>

            <h3>Bordado Floral</h3>
            <p>Fernanda Lima</p>
            <strong>R$ 145,00</strong>

            <button>🛒 Comprar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.imagem}>
              Imagem
            </div>

            <h3>Velas Aromáticas</h3>
            <p>Patricia Rocha</p>
            <strong>R$ 55,00</strong>

            <button>🛒 Comprar</button>
          </div>

          <div className={styles.card}>
            <div className={styles.imagem}>
              Imagem
            </div>

            <h3>Crochê Decorativo</h3>
            <p>Amanda Souza</p>
            <strong>R$ 72,00</strong>

            <button>🛒 Comprar</button>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Dashboard;