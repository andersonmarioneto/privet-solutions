/* Js by: Anderson Mário Neto | UI Designer */

function filterElements(category, event) {
    const cards = document.querySelectorAll(".sub-container-pro");
    const buttons = document.querySelectorAll(".buttons button");

    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => button.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    event.currentTarget.classList.add('active');

    // Mostra ou oculta os elementos com base na categoria
    cards.forEach(element => {
        if (category === "All" || element.classList.contains(category)) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
}
