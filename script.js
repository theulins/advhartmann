document.addEventListener("DOMContentLoaded", function() {
    // Associar ao botão flutuante
    document.getElementById("whatsapp-float").addEventListener("click", function () {
        generateWhatsAppMessage();
    });
});

function generateWhatsAppMessage(event) {
    if (event) event.preventDefault();

    // Verifica se o formulário foi preenchido. Caso não, usa a mensagem padrão.
    const name = document.getElementById("name").value || "Visitante";
    const email = document.getElementById("email").value || "Não informado";
    const phone = document.getElementById("phone").value || "Não informado";
    const area = document.getElementById("area").value || "Geral";
    const message = document.getElementById("message").value;

    let whatsappMessage;

    // Se o formulário foi preenchido, cria a mensagem com os dados
    if (name !== "Visitante" || email !== "Não informado" || phone !== "Não informado" || area !== "Geral" || message) {
        whatsappMessage = `Olá, meu nome é ${name}. Tenho interesse na área de ${area}. Meu telefone é ${phone} e meu e-mail é ${email}.`;
        if (message) {
            whatsappMessage += ` Mensagem adicional: ${message}`;
        }
    } else {
        // Se o formulário não foi preenchido, envia a mensagem padrão
        whatsappMessage = "Olá, vim pelo site";
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5544984566718?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}
