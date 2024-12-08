/* Js by: Anderson Mário Neto | UI Designer */

function filterElements(category, event) {
    const cards = document.querySelectorAll(".sub-container-pro");
    const links = document.querySelectorAll(".categories a");

    // Remove a classe 'active' de todos os botões
    links.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' à âncora clicada
    event.preventDefault(); // Evita o comportamento padrão do link
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
