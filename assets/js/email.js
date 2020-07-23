const sendEmail = () => {
  const nombre = document.querySelector('input[name="name"]');
  const correo = document.querySelector('input[name="email"]');
  const mensaje = document.querySelector('textarea[name="message"]');
  const form = document.querySelector("#formulario");
  const botoncito = document.querySelector('input[type="submit"]');

  emailjs.init("user_GMxdgDYSn1WpD3E0vZxI2");
  emailjs
    .send("gmail", "plataforma", {
      name: nombre.value,
      message: mensaje.value,
      email: correo.value,
    })
    .then(() => {
      form.reset();
      botoncito.value = "Se ha enviado";
      botoncito.style.backgroundColor = "rgb(1, 185, 124)";
      botoncito.style.color = "white";
      botoncito.style.borderColor = "white";
      setTimeout(() => {
        botoncito.value = "Enviar Mensaje";
        botoncito.style.background = "none";
        botoncito.style.color = "#ea1f4b";
        botoncito.style.borderColor = "#ea1f4b";
      }, 1500);
    });
};
