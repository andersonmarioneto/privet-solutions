/* Js by: Anderson Mário Neto | UI Designer */

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
let currentImages = [];
let currentIndex = 0;

// Seleciona todos os elementos com a classe 'gallery'
document.querySelectorAll(".gallery").forEach((gallery) => {
    gallery.addEventListener("click", (e) => {
        const card = e.target.closest(".caixa-img");
        if (!card) return;

        currentImages = JSON.parse(card.dataset.images);
        currentIndex = 0;
        showModal(currentImages[currentIndex]);
    });
});

function showModal(src) {
    modalImage.src = src;
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

function changeImage(dir) {
    currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
    modalImage.src = currentImages[currentIndex];
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeModal();
});