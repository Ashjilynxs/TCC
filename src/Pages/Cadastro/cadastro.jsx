import { useState } from "react";
import styles from "./cadastro.module.css";

function Cadastro() {
  const [etapa, setEtapa] = useState(1);
  const [aceitouTermos, setAceitouTermos] = useState(false);

  return (
    <main className={styles.container}>

      <section className={styles.cabecalho}>
        <h1>Comece a Empreender</h1>
        <p>Informações da sua micro-empresa</p>
      </section>

      <section className={styles.progresso}>
        <div className={styles.linha}></div>

        <div className={styles.etapas}>

          <div className={styles.etapa}>
            <div className={styles.icone}>✦</div>
            <span>Sobre Você</span>
          </div>

          <div className={styles.etapa}>
            <div className={styles.icone}>▧</div>
            <span>Termos & Acordo</span>
          </div>

          <div className={styles.etapa}>
            <div className={styles.icone}>⌂</div>
            <span>Sua Loja</span>
          </div>

          <div className={styles.etapa}>
            <div className={styles.icone}>✓</div>
            <span>Pronto!</span>
          </div>

        </div>
      </section>

      {etapa === 1 && (
        <section className={styles.conteudo}>
          <h2>Sobre Você</h2>

          <div className={styles.formulario}>

            <div className={styles.campo}>
              <label>Nome Completo</label>
              <input type="text" />
            </div>

            <div className={styles.campo}>
              <label>CPF</label>
              <input type="text" />
            </div>

            <div className={styles.campo}>
              <label>E-mail</label>
              <input type="email" />
            </div>

            <div className={styles.campo}>
              <label>WhatsApp</label>
              <input type="text" />
            </div>

            <div className={styles.campoCompleto}>
              <label>Tipo de Produto que Você Vende</label>
              <input type="text" />
            </div>

            <div className={styles.campoCompleto}>
              <label>Sua História (opcional)</label>
              <textarea></textarea>
            </div>

            <button
              className={styles.botaoContinuar}
              onClick={() => setEtapa(2)}
            >
              Continuar
            </button>

          </div>
        </section>
      )}

      {etapa === 2 && (
        <section className={styles.conteudo}>
          <h2>Acordo de Vendedora</h2>

          <div className={styles.aviso}>
            🔒 Role até o fim para habilitar o aceite dos termos.
          </div>

          <div className={styles.acordo}>

            <h3>Acordo de Vendedora</h3>

            <p>Versão 2.1 - Janeiro de 2024</p>

            <p>
              Bem-vinda ao Marketplace do Instituto Recomeçar.
              Este acordo estabelece as regras para participação
              das vendedoras na plataforma.
            </p>

            <h3>1. Elegibilidade</h3>

            <p>
              A plataforma é destinada a mulheres que desejam
              comercializar seus próprios produtos ou serviços.
            </p>

            <h3>2. Produtos Permitidos</h3>

            <p>
              São aceitos apenas produtos artesanais, feitos à mão,
              ou serviços criados pela própria vendedora. Produtos
              industrializados para revenda não são permitidos.
              O Instituto se reserva o direito de recusar produtos.
            </p>

            <h3>3. Comissão Solidária</h3>

            <p>
              Parte das vendas poderá ser destinada às ações
              sociais e ao funcionamento do Instituto Recomeçar.
            </p>

            <h3>4. Qualidade e Autenticidade</h3>

            <p>
              A vendedora se compromete a fornecer informações
              verdadeiras sobre seus produtos e serviços.
            </p>

            <h3>5. Pagamentos</h3>

            <p>
              Os pagamentos serão realizados conforme as condições
              apresentadas pela plataforma.
            </p>

            <h3>6. Suporte e Comunidade</h3>

            <p>
              As participantes poderão receber suporte e participar
              das iniciativas e atividades da comunidade.
            </p>

            <p>— Fim do Acordo de Vendedora —</p>

          </div>

          <div className={styles.aceite}>

            <input
              type="checkbox"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
            />

            <label>
              Li e aceito todos os termos do Acordo de Vendedora.
            </label>

          </div>

          <div className={styles.botoes}>

            <button
              className={styles.botaoVoltar}
              onClick={() => setEtapa(1)}
            >
              Voltar
            </button>

            <button
              className={styles.botaoContinuar}
              onClick={() => setEtapa(3)}
              disabled={!aceitouTermos}
            >
              Continuar
            </button>

          </div>

        </section>
      )}

      {etapa === 3 && (
        <section className={styles.conteudo}>

          <h2>Sua Loja</h2>

          <p>
            Aqui serão cadastradas as informações da sua loja.
          </p>

          <button
            className={styles.botaoVoltar}
            onClick={() => setEtapa(2)}
          >
            Voltar
          </button>

        </section>
      )}

      {etapa === 4 && (
        <section className={styles.conteudo}>

          <h2>Pronto!</h2>

          <p>
            Seu cadastro foi concluído com sucesso.
          </p>

        </section>
      )}

    </main>
  );
}

export default Cadastro;