// ===== Elementos da página =====

const barraBusca = document.getElementById("busca");

const cards = document.querySelectorAll(".card");

const mensagemVazia = document.getElementById("empty-message");

const contadorCursos = document.getElementById("course-count");

const mensagemCurso = document.getElementById("course-message");


// ===== Pesquisa de cursos =====

barraBusca.addEventListener("input", () => {

    const textoDigitado = barraBusca.value
        .trim()
        .toLowerCase();

    let cursosEncontrados = 0;

    cards.forEach(card => {

        const titulo = card.querySelector("h2").textContent.toLowerCase();

        const descricao = card.querySelector("p").textContent.toLowerCase();

        const categoria = card.querySelector(".course-category").textContent.toLowerCase();

        const corresponde =
            titulo.includes(textoDigitado) ||
            descricao.includes(textoDigitado) ||
            categoria.includes(textoDigitado);

        if (corresponde) {

            card.style.display = "flex";

            cursosEncontrados++;

        } else {

            card.style.display = "none";

        }

    });


    // Atualizar contador

    contadorCursos.textContent = cursosEncontrados;


    // Mostrar mensagem quando não houver resultados

    mensagemVazia.hidden = cursosEncontrados !== 0;

    // Limpar mensagem anterior

    mensagemCurso.textContent = "";

});



 // ===== Acesso aos cursos =====

const gradeCursos = document.querySelector(".grade-cursos");

gradeCursos.addEventListener("click", (event) => {

    const botao = event.target.closest(".botao");

    // Verificar se o clique ocorreu em um botão de curso
    if (!botao) return;

    event.preventDefault();

    const nomeCurso = botao.dataset.course;

    // Exibir mensagem de disponibilidade
    mensagemCurso.textContent = `Em breve: ${nomeCurso}`;

    mensagemCurso.classList.add("visible");

});