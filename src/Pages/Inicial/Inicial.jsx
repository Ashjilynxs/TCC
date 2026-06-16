import styles from "./Inicial.module.css";

function Inicial() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Pizzaria Galáxia </h1>
        <p>
          Sabores de outro planeta para tornar sua noite inesquecível.
        </p>

        <button className={styles.botao}>
          Ver Cardápio
        </button>
      </section>

      <section className={styles.destaques}>
        <h2>Pizzas Mais Pedidas</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Galáxia Suprema</h3>
            <p>Calabresa, queijo especial e molho da casa.</p>
          </div>

          <div className={styles.card}>
            <h3>Estrela de Frango</h3>
            <p>Frango com catupiry cremoso.</p>
          </div>

          <div className={styles.card}>
            <h3>Nebulosa Portuguesa</h3>
            <p>Presunto, ovos, cebola e muito queijo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicial;