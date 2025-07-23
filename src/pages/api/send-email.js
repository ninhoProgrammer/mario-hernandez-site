import nodemailer from 'nodemailer';

export async function POST({ request }) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 587,
        auth: {
        user: import.meta.env.MAILTRAP_USER,
        pass: import.meta.env.MAILTRAP_PASS,
        },
    });

    try {
        // Enviar a tu correo
        await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: import.meta.env.MAILTRAP_TO,
        subject: 'Nuevo mensaje desde tu portafolio',
        html: `
            <h2>Nuevo contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong><br/>${message}</p>
        `,
        });

        // Enviar confirmación al usuario
        await transporter.sendMail({
        from: `"Mario Hernández" <${import.meta.env.MAILTRAP_TO}>`,
        to: email,
        subject: 'Gracias por contactarte conmigo',
        html: `
            <h2>Hola ${name},</h2>
            <p>Gracias por escribirme. He recibido tu mensaje y te responderé pronto.</p>
            <hr />
            <p><strong>Tu mensaje:</strong><br/>${message}</p>
            <p>Un saludo,<br/>Mario Hernández</p>
        `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}