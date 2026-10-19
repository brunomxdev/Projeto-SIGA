const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const emailError = document.querySelector("#email-error");
const senhaError = document.querySelector("#senha-error");
const formMessage = document.querySelector("#form-message");
const togglePassword = document.querySelector("#toggle-password");

function limparErros() {
  emailError.textContent = "";
  senhaError.textContent = "";
  emailInput.removeAttribute("aria-invalid");
  senhaInput.removeAttribute("aria-invalid");
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

togglePassword.addEventListener("click", () => {
  const mostrarSenha = senhaInput.type === "password";
  senhaInput.type = mostrarSenha ? "text" : "password";
  togglePassword.setAttribute("aria-label", mostrarSenha ? "Ocultar senha" : "Mostrar senha");
  togglePassword.setAttribute("aria-pressed", String(mostrarSenha));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  limparErros();

  let formularioValido = true;
  const email = emailInput.value.trim();
  const senha = senhaInput.value;

  if (!email) {
    emailError.textContent = "Informe seu e-mail.";
    emailInput.setAttribute("aria-invalid", "true");
    formularioValido = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Digite um endereço de e-mail válido.";
    emailInput.setAttribute("aria-invalid", "true");
    formularioValido = false;
  }

  if (!senha) {
    senhaError.textContent = "Informe sua senha.";
    senhaInput.setAttribute("aria-invalid", "true");
    formularioValido = false;
  } else if (senha.length < 6) {
    senhaError.textContent = "A senha deve ter pelo menos 6 caracteres.";
    senhaInput.setAttribute("aria-invalid", "true");
    formularioValido = false;
  }

  if (!formularioValido) {
    formMessage.textContent = "Confira os campos destacados e tente novamente.";
    formMessage.classList.add("error");
    return;
  }

  // Demonstração de interface: ainda não existe autenticação com servidor.
  formMessage.textContent = "Validação concluída! Para entrar de verdade, conecte este formulário a um backend de autenticação.";
  formMessage.classList.add("success");
});

document.querySelector("#forgot-link").addEventListener("click", (event) => {
  event.preventDefault();
  formMessage.textContent = "A recuperação de senha ainda precisa ser conectada ao sistema.";
  formMessage.className = "form-message error";
});

document.querySelector("#signup-link").addEventListener("click", (event) => {
  event.preventDefault();
  formMessage.textContent = "A página de cadastro ainda não foi criada.";
  formMessage.className = "form-message error";
});