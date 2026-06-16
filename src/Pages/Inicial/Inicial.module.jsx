.container {
  padding: 40px 20px;
  flex: 1;
}

.hero {
  padding: 80px 20px;
}

.hero h1 {
  margin-bottom: 16px;
}

.hero p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text);
}

.botao {
  margin-top: 24px;
  padding: 12px 24px;
  border: 1px solid var(--accent-border);
  border-radius: 8px;
  background: var(--accent);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

.botao:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.destaques {
  margin-top: 60px;
}

.cards {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}

.card {
  width: 280px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
  box-shadow: var(--shadow);
  text-align: left;
}

.card h3 {
  color: var(--text-h);
  margin-bottom: 10px;
}

.card p {
  color: var(--text);
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 10px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
