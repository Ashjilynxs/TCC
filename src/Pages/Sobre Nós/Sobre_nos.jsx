import Sobre_nos from "./Sobre_nos.module.css";
import React from "react"

function SobreNos() {
  return (
    <div className="sobre-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Sobre Nós</h1>
          <p>
            Inspiramos, conectamos e fortalecemos mulheres empreendedoras para
            transformar ideias em negócios de sucesso.
          </p>
        </div>
      </section>

      <section className="sobre-section">
        <h2>Nossa História</h2>
        <p>
          Nosso projeto nasceu com o propósito de criar um espaço onde mulheres
          possam desenvolver seus negócios, compartilhar experiências e acessar
          oportunidades de crescimento profissional.
        </p>
        <p>
          Acreditamos que o empreendedorismo feminino é uma ferramenta poderosa
          para gerar independência financeira, inovação e impacto social.
        </p>
      </section>

      <section className="missao-valores">
        <div className="card">
          <h3>Missão</h3>
          <p>
            Apoiar mulheres empreendedoras por meio de conteúdo, networking e
            capacitação.
          </p>
        </div>

        <div className="card">
          <h3>Visão</h3>
          <p>
            Ser referência na promoção do empreendedorismo feminino e da
            liderança feminina.
          </p>
        </div>

        <div className="card">
          <h3>Valores</h3>
          <p>
            Inclusão, colaboração, inovação, empoderamento e desenvolvimento
            sustentável.
          </p>
        </div>
      </section>

      <section className="impacto">
        <h2>Nosso Impacto</h2>

        <div className="stats">
          <div className="stat">
            <h3>+5.000</h3>
            <p>Mulheres impactadas</p>
          </div>

          <div className="stat">
            <h3>+300</h3>
            <p>Negócios apoiados</p>
          </div>

          <div className="stat">
            <h3>+100</h3>
            <p>Eventos realizados</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Faça Parte Dessa Transformação</h2>
        <p>
          Junte-se à nossa comunidade e descubra novas oportunidades para
          crescer e empreender.
        </p>

        <button>Quero Participar</button>
      </section>
    </div>
  );
}

export default SobreNos;
