
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [modo, setModo] = useState("login");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setMensagem(
      modo === "login"
        ? "Login demonstrativo: a autenticação ainda precisa ser conectada."
        : "Cadastro demonstrativo: sua conta ainda não foi salva."
    );
  }

  return (
    <main className={styles.pagina}>
      <section className={styles.card}>
        <div className={styles.marca}>
          <div className={styles.logo}>IR</div>
          <h1>Instituto Recomeçar</h1>
          <p>Seu espaço para crescer e empreender.</p>
        </div>

        <div className={styles.opcoes}>
          <button
            type="button"
            className={modo === "login" ? styles.selecionado : ""}
            onClick={() => {
              setModo("login");
              setMensagem("");
            }}
          >
            Entrar
          </button>

          <button
            type="button"
            className={modo === "cadastro" ? styles.selecionado : ""}
            onClick={() => {
              setModo("cadastro");
              setMensagem("");
            }}
          >
            Criar conta
          </button>
        </div>

        <h2>
          {modo === "login" ? "Bem-vinda de volta!" : "Comece sua jornada"}
        </h2>

        <p className={styles.descricao}>
          {modo === "login"
            ? "Entre na sua conta para continuar."
            : "Crie sua conta e faça parte da nossa comunidade."}
        </p>

        <form onSubmit={handleSubmit}>
          {modo === "cadastro" && (
            <div className={styles.campo}>
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className={styles.campo}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              autoComplete={
                modo === "login" ? "current-password" : "new-password"
              }
              minLength={6}
              required
            />
          </div>

          {modo === "cadastro" && (
            <div className={styles.campo}>
              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Digite a senha novamente"
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>
          )}

          <button className={styles.botaoPrincipal} type="submit">
            {modo === "login" ? "Entrar na conta" : "Criar minha conta"}
          </button>
        </form>

        {mensagem && (
          <p className={styles.mensagem} role="status">
            {mensagem}
          </p>
        )}

        <button
          type="button"
          className={styles.voltar}
          onClick={() => navigate("/")}
        >
          Voltar para a página inicial
        </button>
      </section>
    </main>
  );
}

export default Login;
