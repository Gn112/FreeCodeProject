// Menu de Dropdown

const app = { // Objeto que armazena nossas variáveis dentro do escopo fechado
    $: {
        menu: document.querySelector(".menu"),
        menuItens: document.querySelector(".itens"),
    },

    init() { // Podemos controlar quando o evento irá iniciar
        app.$.menu.addEventListener("click", (event) => { //
            app.$.menuItens.classList.toggle("hidden");
        })
    }
}

window.addEventListener("load", app.init); // gatilho para inicialização do evento
//