
// Seleção de elementos
const modal = document.getElementById("videoModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Abrir o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fechar o modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal clicando fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
