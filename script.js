// Função para abrir o modal e configurar o título e o link
function openModal(title, link) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-link").href = link;
  document.getElementById("modal").style.display = "flex";
}

// Função para fechar o modal ao clicar no "X" ou fora dele
function closeModal(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}
