import Sobre_nos from "./Sobre_nos.module.css";
import React from "react"

function SobreNos() {
  return (
    <div className="sobre-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Sobre Nós</h1>
          <p>
            Inspiramos, conectamos e fortalecemos mulheres para terem seu 
            transformar ideias em negócios de sucesso.
          </p>
        </div>
      </section>

      <section className="sobre-section">
        <h2>Nossa História</h2>
        <p>
          Somos uma plataforma dedicada ao incentivo do empreendedorismo feminino,
           oferecendo capacitação profissional, apoio psicológico e oportunidades de
            desenvolvimento. Nosso objetivo é fortalecer mulheres, promovendo autonomia,
             confiança e crescimento por meio do conhecimento, da colaboração e do empoderamento.
        </p>
      </section>

      <section className="missao-valores">
        <div className="card">
          <h3>Missão</h3>
          <p>
            Apoiar mulheres a conseguirem sua idependencia financeira
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

    </div>
  );
}

export default SobreNos;
