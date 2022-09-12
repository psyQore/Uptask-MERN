import nodemailer from "nodemailer";

export const emailRegister = async (data) => {
  const { email, name, token } = data;

  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

export const emailForgetPassword = async (data) => {
  const { email, name, token } = data;

  // TODO: Mover hacia variabls de entorno
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del email
  const info = await transport.sendMail({
    from: '"UptTask - Administrador de Proyectos" <cuentas@uptask.com> ',
    to: email,
    subject: "UpTask  - Reestablece tu Password",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p> Hola: ${name} has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:</p>
        <a href="${process.env.FRONTEND_URL}/forget-password/${token}">Reestablecer Password </a>

        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    `,
  });
};
