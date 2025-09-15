document.getElementById("avancar").addEventListener("click", function() {
  const login = document.getElementById("login").value;

  if (login.trim() === "") {
    alert("Por favor, insira seu celular, e-mail ou nome de usuário.");
  } else {
    alert("Login simulado para: " + login);
  }
});
