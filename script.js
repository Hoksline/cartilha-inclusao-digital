const telas = document.querySelectorAll(".tela");
const botoesNavegacao = document.querySelectorAll("[data-tela]");

function mostrarTela(id) {
  telas.forEach((tela) => {
    tela.classList.remove("ativa");
  });

  const telaSelecionada = document.getElementById(id);

  if (telaSelecionada) {
    telaSelecionada.classList.add("ativa");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

botoesNavegacao.forEach((botao) => {
  botao.addEventListener("click", () => {
    mostrarTela(botao.dataset.tela);
  });
});

// Acessibilidade: aumenta o tamanho do texto.
document.getElementById("btnFonte").addEventListener("click", () => {
  document.body.classList.toggle("texto-grande");

  const ativado = document.body.classList.contains("texto-grande");
  document.getElementById("btnFonte").textContent =
    ativado ? "🔍 Texto normal" : "🔎 Aumentar texto";
});

// Quiz sobre golpes no WhatsApp.
document.getElementById("simularGolpe").addEventListener("click", () => {
  document.getElementById("quizGolpe").classList.remove("oculto");
});

document.querySelectorAll(".opcoes button").forEach((botao) => {
  botao.addEventListener("click", () => {
    const resultado = document.getElementById("resultadoQuiz");
    const correta = botao.dataset.correta === "true";

    if (correta) {
      resultado.textContent = "✅ Muito bem! O correto é confirmar a identidade antes de enviar dinheiro.";
      resultado.style.color = "#16834b";
    } else {
      resultado.textContent = "❌ Cuidado! Nunca faça uma transferência sem confirmar quem está pedindo.";
      resultado.style.color = "#c62828";
    }
  });
});

// Checklist de segurança bancária.
document.getElementById("verificarChecklist").addEventListener("click", () => {
  const itens = document.querySelectorAll(".checklist input");
  const marcados = [...itens].filter((item) => item.checked).length;
  const resultado = document.getElementById("resultadoBanco");

  if (marcados === itens.length) {
    resultado.textContent = "✅ Excelente! Você conferiu todos os itens de segurança.";
    resultado.style.color = "#16834b";
  } else {
    resultado.textContent = `⚠️ Você marcou ${marcados} de ${itens.length}. Confira os itens que faltam antes de continuar.`;
    resultado.style.color = "#c62828";
  }
});
