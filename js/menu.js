document.querySelectorAll(".menu-navegacao").forEach((menu) => {
    const botao = menu.querySelector(".menu-botao");
    const opcoes = menu.querySelector(".menu-opcoes");

    function fecharMenu() {
        opcoes.hidden = true;
        botao.setAttribute("aria-expanded", "false");
    }

    botao.addEventListener("click", () => {
        const abrir = opcoes.hidden;

        opcoes.hidden = !abrir;
        botao.setAttribute("aria-expanded", String(abrir));
    });

    document.addEventListener("click", (evento) => {
        if (!menu.contains(evento.target)) {
            fecharMenu();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && !opcoes.hidden) {
            fecharMenu();
            botao.focus();
        }
    });
});