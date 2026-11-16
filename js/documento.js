
// ===== Elementos da página =====

const documentMessage = document.querySelector("#document-message");

const documentButtons = document.querySelectorAll(".document-button");


// ===== Interatividade dos documentos =====

documentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const option = button.dataset.option;

        documentMessage.textContent = `Em breve: ${option}`;

        documentMessage.classList.add("visible");

    });

});