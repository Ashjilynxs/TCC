import { useState } from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [secao, setSecao] = useState("Perfil");

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
      status: "Enviado",
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
        <h2>Instituto<br />Recomeçar</h2>

        <button
          className={secao === "Perfil" ? styles.ativo : ""}
          onClick={() => setSecao("Perfil")}
        >
          ♙ Perfil
        </button>

        <button
          className={secao === "Meus Pedidos" ? styles.ativo : ""}
          onClick={() => setSecao("Meus Pedidos")}
        >
          ▢ Meus Pedidos
        </button>

        <button
          className={secao === "Meus Produtos" ? styles.ativo : ""}
          onClick={() => setSecao("Meus Produtos")}
        >
          ♧ Meus Produtos
        </button>
      </aside>

      <main className={styles.conteudo}>
        {secao === "Perfil" && (
          <>
            <div className={styles.atividade}>
              <strong>Notificações e atividades</strong>
              <p>Nova atividade · Uma cliente visitou sua loja!</p>
            </div>

            <header className={styles.cabecalho}>
              <div>
                <p>Bem-vinda de volta!</p>
                <h1>Ana Paula</h1>
                <span>Confira as novidades da sua loja.</span>
              </div>

              <button
                className={styles.botao}
                onClick={() => setSecao("Meus Produtos")}
              >
                ✦ Comece a Empreender
              </button>
            </header>

            <div className={styles.resumo}>
              <section className={styles.bloco}>
                <div className={styles.tituloBloco}>
                  <h2>Meus Produtos Cadastrados</h2>
                  <button onClick={() => setSecao("Meus Produtos")}>
                    Ver todos →
                  </button>
                </div>

                {produtos.slice(0, 2).map((produto) => (
                  <article className={styles.produtoLinha} key={produto.nome}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <div>
                      <h3>{produto.nome}</h3>
                      <p>Estoque demonstrativo</p>
                    </div>
                    <strong>{produto.preco}</strong>
                  </article>
                ))}
              </section>

              <section className={styles.bloco}>
                <div className={styles.tituloBloco}>
                  <h2>Pedidos Recentes</h2>
                  <button onClick={() => setSecao("Meus Pedidos")}>
                    Ver todos →
                  </button>
                </div>

                {pedidos.map((pedido) => (
                  <article className={styles.pedidoLinha} key={pedido.codigo}>
                    <div>
                      <h3>{pedido.nome}</h3>
                      <p>{pedido.codigo}</p>
                      <span>{pedido.status}</span>
                    </div>
                    <strong>{pedido.preco}</strong>
                  </article>
                ))}

                <div className={styles.curso}>
                  <strong>Curso em andamento</strong>
                  <p>Empreendedorismo Digital — 40%</p>
                  <div className={styles.progresso}>
                    <div />
                  </div>
                  <button className={styles.botaoCurso}>
                    Continuar curso
                  </button>
                </div>
              </section>
            </div>

            <section className={styles.bloco}>
              <div className={styles.tituloBloco}>
                <h2>♡ Catálogo da Plataforma</h2>
                <button onClick={() => setSecao("Meus Produtos")}>
                  Ver tudo →
                </button>
              </div>

              <div className={styles.catalogo}>
                {produtos.map((produto) => (
                  <article className={styles.cardCatalogo} key={produto.nome}>
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
                          alert(`Você selecionou: ${produto.nome}`)
                        }
                      >
                        ♡ Comprar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.bloco}>
              <h2>🏆 Ranking das Vendedoras do Mês</h2>

              <div className={styles.ranking}>
                {vendedoras.map((vendedora, indice) => (
                  <article className={styles.vendedora} key={vendedora.nome}>
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
            <p>Acompanhe os pedidos demonstrativos da sua loja.</p>

            {pedidos.map((pedido) => (
              <article className={styles.pedidoLinha} key={pedido.codigo}>
                <div>
                  <h3>{pedido.nome}</h3>
                  <p>{pedido.codigo} · {pedido.status}</p>
                </div>
                <strong>{pedido.preco}</strong>
              </article>
            ))}
          </section>
        )}

        {secao === "Meus Produtos" && (
          <section className={styles.bloco}>
            <h1>Meus Produtos</h1>
            <p>Confira os produtos cadastrados na demonstração.</p>

            <div className={styles.catalogo}>
              {produtos.map((produto) => (
                <article className={styles.cardCatalogo} key={produto.nome}>
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