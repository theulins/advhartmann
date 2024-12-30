function generateWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const area = document.getElementById("area").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Olá, meu nome é ${name}. Tenho interesse na área de ${area}. Meu telefone é ${phone} e meu e-mail é ${email}.`;
    if (message) {
        whatsappMessage += ` Mensagem adicional: ${message}`;
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5544984566718?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}
