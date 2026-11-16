
// ===== Elementos do formulário =====

const cadastroForm = document.querySelector("#cadastro-form");

const nomeInput = document.querySelector("#nome");
const matriculaInput = document.querySelector("#matricula");
const telefoneInput = document.querySelector("#telefone");
const emailInput = document.querySelector("#email");
const cursoInput = document.querySelector("#curso");
const senhaInput = document.querySelector("#senha");
const confirmarSenhaInput = document.querySelector("#confirmar-senha");

const formMessage = document.querySelector("#form-message");


// ===== Limpar mensagens de erro =====

function limparErros() {

    document.querySelectorAll(".field-error").forEach(error => {
        error.textContent = "";
    });

    document.querySelectorAll(".form-field input, .form-field select").forEach(input => {
        input.removeAttribute("aria-invalid");
    });

    formMessage.textContent = "";
    formMessage.className = "form-message";

}


// ===== Exibir mensagem de erro =====

function mostrarErro(input, mensagem) {

    const error = document.querySelector(`#${input.id}-error`);

    error.textContent = mensagem;

    input.setAttribute("aria-invalid", "true");

}


// ===== Mostrar e ocultar senha =====

document.querySelectorAll(".toggle-password").forEach(button => {

    button.addEventListener("click", () => {

        const input = document.getElementById(button.dataset.target);

        const mostrarSenha = input.type === "password";

        input.type = mostrarSenha ? "text" : "password";

        button.setAttribute(
            "aria-label",
            mostrarSenha ? "Ocultar senha" : "Mostrar senha"
        );

        button.setAttribute(
            "aria-pressed",
            String(mostrarSenha)
        );

    });

});


// ===== Formatação automática do telefone =====

telefoneInput.addEventListener("input", () => {

    let telefone = telefoneInput.value.replace(/\D/g, "");

    telefone = telefone.slice(0, 11);

    if (telefone.length > 10) {

        telefone = telefone.replace(
            /^(\d{2})(\d{5})(\d{0,4})$/,
            "($1) $2-$3"
        );

    } else if (telefone.length > 6) {

        telefone = telefone.replace(
            /^(\d{2})(\d{4})(\d{0,4})$/,
            "($1) $2-$3"
        );

    } else if (telefone.length > 2) {

        telefone = telefone.replace(
            /^(\d{2})(\d{0,5})$/,
            "($1) $2"
        );

    } else if (telefone.length > 0) {

        telefone = `(${telefone}`;

    }

    telefoneInput.value = telefone;

});


// ===== Validação do cadastro =====

cadastroForm.addEventListener("submit", event => {

    event.preventDefault();

    limparErros();

    let formularioValido = true;

    const email = emailInput.value.trim();

    const telefone = telefoneInput.value.replace(/\D/g, "");


    // Validar nome completo

    if (nomeInput.value.trim().length < 3) {

        mostrarErro(
            nomeInput,
            "Informe seu nome completo."
        );

        formularioValido = false;

    }


    // Validar matrícula

    if (!matriculaInput.value.trim()) {

        mostrarErro(
            matriculaInput,
            "Informe sua matrícula."
        );

        formularioValido = false;

    }


    // Validar telefone

    if (telefone.length !== 10 && telefone.length !== 11) {

        mostrarErro(
            telefoneInput,
            "Informe um telefone válido com DDD."
        );

        formularioValido = false;

    }


    // Validar e-mail

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        mostrarErro(
            emailInput,
            "Informe um endereço de e-mail válido."
        );

        formularioValido = false;

    }


    // Validar curso

    if (!cursoInput.value) {

        mostrarErro(
            cursoInput,
            "Selecione seu curso."
        );

        formularioValido = false;

    }


    // Validar senha

    if (senhaInput.value.length < 6) {

        mostrarErro(
            senhaInput,
            "A senha deve possuir pelo menos 6 caracteres."
        );

        formularioValido = false;

    }


    // Confirmar senha

    if (!confirmarSenhaInput.value) {

        mostrarErro(
            confirmarSenhaInput,
            "Confirme sua senha."
        );

        formularioValido = false;

    } else if (senhaInput.value !== confirmarSenhaInput.value) {

        mostrarErro(
            confirmarSenhaInput,
            "As senhas não correspondem."
        );

        formularioValido = false;

    }


    // Resultado da validação

    if (!formularioValido) {

        formMessage.textContent =
            "Verifique os campos destacados e tente novamente.";

        formMessage.classList.add("error");

        const primeiroErro = cadastroForm.querySelector(
            '[aria-invalid="true"]'
        );

        if (primeiroErro) {
            primeiroErro.focus();
        }

        return;

    }


    // Cadastro validado

    formMessage.textContent =
        "Todos os campos foram preenchidos corretamente! O cadastro ainda precisa ser conectado ao banco de dados.";

    formMessage.classList.add("success");

});