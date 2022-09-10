import nodemailer from "nodemailer";

export const emailRegister = async (data) => {
  const { email, name, token } = data;

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3f03b7423afb1b",
      pass: "446a2dc0d49efe",
    },
  });

  // Informacion del email
  const info = await transport.sendMail({
    from: '"UptTask - Administrador de Proyectos" <cuentas@uptask.com> ',
    to: email,
    subject: "UpTask  - Comprueba tu Cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p> Hola: ${name} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirm/${token}">Comprobar Cuenta </a>

        <p>Si tu no creaste esta cuenta, puedes ifnorar el mensaje</p>
    `,
  });
};
