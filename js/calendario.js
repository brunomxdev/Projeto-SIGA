const botoes = document.querySelectorAll(".botao-acessar");
    const mensagem = document.querySelector("#feature-message");

    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const funcionalidade = botao.dataset.feature;

            mensagem.textContent = `Em breve: ${funcionalidade}`;

            mensagem.classList.add("visivel");

        });

    });