/* ====Configurações para o usuario envia os dados do form por e-mail ( emailjs )==== */

document.addEventListener("DOMContentLoaded", function () {
  // Inicialize o EmailJS com o seu user ID
  emailjs.init("9tXYtReILnscqjyS-"); /*  ===chave publica (emailjs)==== */

  document
    .getElementById("form-contato")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_u2zw90i"; /* ==== (Gmail) ID do serviço ==== */

      const templateID = "template_hi985re"; // ID do seu template

      const templateParams = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        numero: document.getElementById("numero").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value,
      };

      emailjs.send(serviceID, templateID, templateParams).then(
        function (response) {
          console.log("ENVIADO!", response.status, response.text);
          alert(
            "Obrigado pelo seu contato, retornarei o mais breve possível!"
          );
        },
        function (error) {
          console.log("FALHOU...", error);
          alert(
            "Desculpa, houve um erro ao enviar a mensagem. Se preferir, entre em contato através do número: (48) 99160-4054"
          );
        }
      );
    });
});
