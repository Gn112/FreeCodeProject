// Menu de Dropdown

const app = { // Objeto que armazena nossas variáveis dentro do escopo fechado
    $: {
        menu: document.querySelector(".menu"),
        menuItens: document.querySelector(".itens"),
    },
};

app.$.menu.addEventListener("click", (event) => {
    app.$.menuItens.classList.toggle("hidden");
})
//