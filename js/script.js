window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("rolagem", window.scrollY > 250);
});

// document.querySelectorAll(".faq-question").forEach((button) => {
//   button.addEventListener("click", () => {
//     const answer = button.nextElementSibling;
//     answer.style.display = answer.style.display === "block" ? "none" : "block";
//   });
// });

// Adicionando funcionalidade de acordeão
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    // Fecha todas as respostas antes de abrir a clicada
    document.querySelectorAll(".faq-question").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.display = "none";
      }
    });

    // Alterna a classe "active" no botão clicado
    button.classList.toggle("active");

    // Mostra ou esconde a resposta correspondente
    const answer = button.nextElementSibling;
    if (button.classList.contains("active")) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
