
import { useState } from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [secao, setSecao] = useState("Perfil");

  const produtos = [
    {
      nome: "Bordado Floral",
      categoria: "Artesanato",
      preco: "R$ 145,00",
      imagem: "/produtos/bordado.png",
    },
    {
      nome: "Velas Aromáticas",
      categoria: "Decoração",
      preco: "R$ 55,00",
      imagem: "/produtos/velas.jpg",
    },
    {
      nome: "Crochê Decorativo",
      categoria: "Artesanato",
      preco: "R$ 72,00",
      imagem: "/produtos/croche.jpg",
    },
  ];

  return (
    <div className={styles.painel}>
      <aside className={styles.menu}>
        <h2>Instituto<br />Recomeçar</h2>

        <button
          className={secao === "Perfil" ? styles.ativo : ""}
          onClick={() => setSecao("Perfil")}
        >
          Perfil
        </button>

        <button
          className={secao === "Meus Pedidos" ? styles.ativo : ""}
          onClick={() => setSecao("Meus Pedidos")}
        >
          Meus Pedidos
        </button>

        <button
          className={secao === "Meus Produtos" ? styles.ativo : ""}
          onClick={() => setSecao("Meus Produtos")}
        >
          Meus Produtos
        </button>
      </aside>

      <main className={styles.conteudo}>
        {secao === "Perfil" && (
          <section>
            <p className={styles.subtitulo}>Bem-vinda de volta!</p>
            <h1>Minha Loja</h1>

            <div className={styles.perfil}>
              <div className={styles.avatar}>A</div>
              <div>
                <h2>Ana Paula</h2>
                <p>Empreendedora</p>
                <p>Bem-vinda à sua área da loja!</p>
              </div>
            </div>

            <h2>Meus Produtos</h2>
            <div className={styles.produtos}>
              {produtos.slice(0, 2).map((produto) => (
                <article className={styles.card} key={produto.nome}>
                  <img src={produto.imagem} alt={produto.nome} />
                  <div>
                    <h3>{produto.nome}</h3>
                    <p>{produto.categoria}</p>
                    <strong>{produto.preco}</strong>
                  </div>
                </article>
              ))}
            </div>

            <button
              className={styles.botao}
              onClick={() => setSecao("Meus Pedidos")}
            >
              Ver meus pedidos
            </button>
          </section>
        )}

        {secao === "Meus Pedidos" && (
          <section>
            <h1>Meus Pedidos</h1>
            <p>Acompanhe as compras realizadas na sua loja.</p>

            <div className={styles.pedido}>
              <div>
                <h3>Bordado Floral</h3>
                <p>Pedido demonstrativo</p>
              </div>
              <strong>R$ 145,00</strong>
            </div>

            <div className={styles.pedido}>
              <div>
                <h3>Velas Aromáticas</h3>
                <p>Pedido demonstrativo</p>
              </div>
              <strong>R$ 55,00</strong>
            </div>
          </section>
        )}

        {secao === "Meus Produtos" && (
          <section>
            <h1>Meus Produtos</h1>
            <p>Veja os produtos apresentados na sua loja.</p>

            <div className={styles.produtos}>
              {produtos.map((produto) => (
                <article className={styles.card} key={produto.nome}>
                  <img src={produto.imagem} alt={produto.nome} />
                  <div>
                    <h3>{produto.nome}</h3>
                    <p>{produto.categoria}</p>
                    <strong>{produto.preco}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
