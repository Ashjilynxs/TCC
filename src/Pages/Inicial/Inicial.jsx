
import { useNavigate } from "react-router-dom";
import styles from "./Inicial.module.css";

function Inicial() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Empreendedorismo Feminino com Apoio e Oportunidades</h1>

        <p>
          Uma plataforma desenvolvida para conectar mulheres empreendedoras a
          oportunidades de venda, capacitação profissional e apoio psicológico.
        </p>

        <button
          className={styles.botao}
          onClick={() => navigate("/Cadastro")}
        >
          Criar Conta
        </button>
      </section>

      <section className={styles.destaques}>
        <h2>Recursos da Plataforma</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Marketplace</h3>
            <p>
              Cadastre seus produtos, gerencie pedidos e amplie suas vendas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cursos Profissionalizantes</h3>
            <p>
              Tenha acesso a cursos oferecidos por empresas parceiras para o
              desenvolvimento profissional.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Apoio Psicológico</h3>
            <p>
              Agende atendimentos com psicólogos voluntários e acompanhe sua
              evolução.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.destaques}>
        <h2>Por que utilizar a plataforma?</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Capacitação</h3>
            <p>
              Desenvolva habilidades para fortalecer seu negócio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Comunidade</h3>
            <p>
              Conecte-se com outras mulheres empreendedoras e compartilhe
              experiências.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Oportunidades</h3>
            <p>
              Divulgue seus produtos e alcance novos clientes.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.destaques}>
        <h2>Produtos em Destaque</h2>

        <p>
          Conheça alguns produtos artesanais criados pelas empreendedoras
          da nossa comunidade.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="/produtos/sabonetes.jpg"
              alt="Sabonetes naturais artesanais"
              className={styles.imagemProduto}
            />
            <h3>Sabonetes Naturais</h3>
            <p>Juliana Costa</p>
            <strong>R$ 29,50</strong>
          </div>

          <div className={styles.card}>
            <img
              src="/produtos/bordado.jpg"
              alt="Bordado floral artesanal"
              className={styles.imagemProduto}
            />
            <h3>Bordado Floral</h3>
            <p>Fernanda Lima</p>
            <strong>R$ 145,00</strong>
          </div>

          <div className={styles.card}>
            <img
              src="/produtos/velas.jpg"
              alt="Velas aromáticas artesanais"
              className={styles.imagemProduto}
            />
            <h3>Velas Aromáticas</h3>
            <p>Patricia Rocha</p>
            <strong>R$ 55,00</strong>
          </div>

          <div className={styles.card}>
            <img
              src="/produtos/croche.jpg"
              alt="Peça decorativa de crochê"
              className={styles.imagemProduto}
            />
            <h3>Crochê Decorativo</h3>
            <p>Amanda Souza</p>
            <strong>R$ 72,00</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicial;