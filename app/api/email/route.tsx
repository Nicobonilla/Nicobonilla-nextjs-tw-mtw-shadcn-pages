import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Email from "../../templates/Email";

type Article = {
  nombre : string; 
  rut : string;
  edad : string;
  celular : string;
  comuna : string;
  email : string;
  rentaImponible : string;
  comentario : string;
}

export async function POST(request: NextRequest) {
  const { nombre,
    rut,
    edad,
    celular,
    comuna,
    email,
    rentaImponible,
    comentario,
  }  : Article = await request.json();

  const emailHtml = render(
    <Email
      nombre={nombre}
      rut={rut}
      edad={edad}
      celular={celular}
      comuna={comuna}
      email={email}
      rentaImponible={rentaImponible}
      comentario={comentario}
    />
  );

  const my_email = process.env.MY_EMAIL;
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: my_email,
      pass: process.env.MY_PASSWORD_APP,
    },
  });

  try {
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: my_email,
      to: process.env.CLIENT_EMAIL,
      subject: `Red Isapres: ${nombre} RI: ${rentaImponible}`,
      html: emailHtml,
    };
    
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, mailres) => {
        if (err) {
          reject(err);
        } else {
          resolve(mailres);
        }
      });
    });
    return NextResponse.json( {status: 200 });
  } catch ( error) {
    console.error(error); // Registra el error en la consola
    return NextResponse.json({ status: 500});
  }
}
