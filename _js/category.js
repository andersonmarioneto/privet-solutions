/* Js by: Anderson Mário Neto | UI Designer */

function filterElements(category) {
    const card = document.querySelectorAll(".sub-container-pro");
    const buttons = document.querySelectorAll(".buttons button");

    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => button.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    event.target.classList.add('active');

    card.forEach((element) => {
        element.classList.remove("show");
        if (category === "All" || element.classList.contains(category)) {
            element.classList.add("show");
        }
    });
}