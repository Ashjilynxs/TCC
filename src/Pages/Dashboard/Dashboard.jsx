
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [secao, setSecao] = useState("Perfil");
  const navigate = useNavigate();

  const produtos = [
    {
      nome: "Bordado Floral",
      categoria: "Artesanato",
      preco: "R$ 145,00",
      imagem: "/produtos/bordado.jpg",
      vendedora: "Fernanda Lima",
    },
    {
      nome: "Velas Aromáticas",
      categoria: "Decoração",
      preco: "R$ 55,00",
      imagem: "/produtos/velas.jpg",
      vendedora: "Patricia Rocha",
    },
    {
      nome: "Crochê Decorativo",
      categoria: "Artesanato",
      preco: "R$ 72,00",
      imagem: "/produtos/croche.jpg",
      vendedora: "Amanda Souza",
    },
    {
      nome: "Kit Chás Naturais",
      categoria: "Natural",
      preco: "R$ 38,00",
      imagem: "/produtos/chas.jpg",
      vendedora: "Renata Alves",
    },
  ];

  const pedidos = [
    {
      nome: "Bordado Floral",
      codigo: "#BR-4521",
      preco: "R$ 145,00",
      status: "Em preparação",
    },
    {
      nome: "Velas Aromáticas",
      codigo: "#BR-4498",
      preco: "R$ 55,00",
      status: "Entregue",
    },
  ];

  const vendedoras = [
    { nome: "Maria Silva", vendas: 142, valor: "R$ 12.780" },
    { nome: "Juliana Costa", vendas: 118, valor: "R$ 9.430" },
    { nome: "Fernanda Lima", vendas: 97, valor: "R$ 8.120" },
    { nome: "Patricia Rocha", vendas: 83, valor: "R$ 6.890" },
    { nome: "Ana Paula", vendas: 71, valor: "R$ 5.640" },
  ];

  return (
    <div className={styles.painel}>
      <aside className={styles.menu}>
        <h2>
          Instituto
          <br />
          Recomeçar
        </h2>

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
          <>
            <div className={styles.atividade}>
              <strong>Notificações e atividades</strong>
              <p>Uma cliente visitou sua loja recentemente.</p>
            </div>

            <header className={styles.cabecalho}>
              <div>
                <p className={styles.subtitulo}>Bem-vinda de volta!</p>
                <h1>Ana Paula</h1>
                <span>Confira as novidades da sua loja.</span>
              </div>

              <button
                className={styles.botao}
                onClick={() => navigate("/Cadastro")}
              >
                Comece a Empreender
              </button>
            </header>

            <div className={styles.perfil}>
              <div className={styles.avatar}>A</div>
              <div>
                <h2>Ana Paula</h2>
                <p>Empreendedora</p>
                <p>Bem-vinda à sua área da loja.</p>
              </div>
            </div>

            <div className={styles.resumoLoja}>
              <section className={styles.painelProdutos}>
                <div className={styles.tituloSecao}>
                  <h2>Meus Produtos Cadastrados</h2>
                  <button onClick={() => setSecao("Meus Produtos")}>
                    Ver todos
                  </button>
                </div>

                {produtos.slice(0, 2).map((produto) => (
                  <article
                    className={styles.produtoLinha}
                    key={produto.nome}
                  >
                    <img src={produto.imagem} alt={produto.nome} />

                    <div>
                      <h3>{produto.nome}</h3>
                      <p>{produto.categoria}</p>
                    </div>

                    <strong>{produto.preco}</strong>
                  </article>
                ))}
              </section>

              <section className={styles.painelPedidos}>
                <div className={styles.tituloSecao}>
                  <h2>Pedidos Recentes</h2>
                  <button onClick={() => setSecao("Meus Pedidos")}>
                    Ver todos
                  </button>
                </div>

                {pedidos.map((pedido) => (
                  <article
                    className={styles.pedidoMini}
                    key={pedido.codigo}
                  >
                    <div>
                      <h3>{pedido.nome}</h3>
                      <p>{pedido.codigo}</p>
                      <span>{pedido.status}</span>
                    </div>

                    <strong>{pedido.preco}</strong>
                  </article>
                ))}


              </section>
            </div>

            <section className={styles.catalogo}>
              <div className={styles.tituloSecao}>
                <h2>Catálogo da Plataforma</h2>
                <span>Produtos artesanais</span>
              </div>

              <div className={styles.catalogoCards}>
                {produtos.map((produto) => (
                  <article
                    className={styles.cardCatalogo}
                    key={produto.nome}
                  >
                    <img src={produto.imagem} alt={produto.nome} />

                    <div className={styles.infoCatalogo}>
                      <span className={styles.categoria}>
                        {produto.categoria}
                      </span>

                      <h3>{produto.nome}</h3>
                      <p>{produto.vendedora}</p>
                      <strong>{produto.preco}</strong>

                      <button
                        onClick={() =>
                          alert(
                            `Compra demonstrativa: ${produto.nome}`
                          )
                        }
                      >
                        Comprar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.bloco}>
              <h2>Ranking das Vendedoras do Mês</h2>

              <div className={styles.ranking}>
                {vendedoras.map((vendedora, indice) => (
                  <article
                    className={styles.vendedora}
                    key={vendedora.nome}
                  >
                    <strong>{indice + 1}º</strong>

                    <div>
                      <h3>{vendedora.nome}</h3>
                      <p>
                        {vendedora.vendas} vendas · {vendedora.valor}
                      </p>
                    </div>

                    {vendedora.nome === "Ana Paula" && (
                      <span className={styles.voce}>Você</span>
                    )}
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {secao === "Meus Pedidos" && (
          <section className={styles.bloco}>
            <h1>Meus Pedidos</h1>
            <p>Acompanhe os pedidos da sua loja.</p>

            {pedidos.map((pedido) => (
              <article
                className={styles.pedido}
                key={pedido.codigo}
              >
                <div>
                  <h3>{pedido.nome}</h3>
                  <p>
                    {pedido.codigo} — {pedido.status}
                  </p>
                </div>

                <strong>{pedido.preco}</strong>
              </article>
            ))}
          </section>
        )}

        {secao === "Meus Produtos" && (
          <section className={styles.bloco}>
            <div className={styles.tituloSecao}>
              <div>
                <h1>Meus Produtos</h1>
                <p>Confira os produtos da demonstração.</p>
              </div>

              <button
                className={styles.botao}
                onClick={() => navigate("/Cadastro")}
              >
                Adicionar produto
              </button>
            </div>

            <div className={styles.catalogoCards}>
              {produtos.map((produto) => (
                <article
                  className={styles.cardCatalogo}
                  key={produto.nome}
                >
                  <img src={produto.imagem} alt={produto.nome} />

                  <div className={styles.infoCatalogo}>
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
