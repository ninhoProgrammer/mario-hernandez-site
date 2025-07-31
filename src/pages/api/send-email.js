import nodemailer from 'nodemailer';

function validateEmail(email) {
    // validación básica; puedes sustituir por una más robusta si quieres
    return /\S+@\S+\.\S+/.test(email);
}

export async function GET() {
    return new Response('Endpoint activo. Usa POST para enviar el correo.', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
    });
}

export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ success: false, error: 'Faltan campos requeridos.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!validateEmail(email)) {
            return new Response(JSON.stringify({ success: false, error: 'Email inválido.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Evitar inyección en headers (escape básico)
        const safeName = String(name).replace(/["<>]/g, '');
        const safeEmail = String(email).replace(/["<>]/g, '');
        const safeMessage = String(message).replace(/</g, '&lt;').replace(/>/g, '&gt;');

        const transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 587,
            auth: {
                user: import.meta.env.MAILTRAP_USER,
                pass: import.meta.env.MAILTRAP_PASS,
            },
        });

        // Enviar a tu correo
        await transporter.sendMail({
            from: `"${safeName}" <${safeEmail}>`,
            to: import.meta.env.MAILTRAP_TO,
            subject: 'Nuevo mensaje desde tu portafolio',
            html: `
                <h2>Nuevo contacto</h2>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Mensaje:</strong><br/>${safeMessage}</p>
            `,
        });

        // Enviar confirmación al usuario
        await transporter.sendMail({
            from: `"Mario Hernández" <${import.meta.env.MAILTRAP_TO}>`,
            to: safeEmail,
            subject: 'Gracias por contactarte conmigo',
            html: `
                <h2>Hola ${safeName},</h2>
                <p>Gracias por escribirme. He recibido tu mensaje y te responderé pronto.</p>
                <hr />
                <p><strong>Tu mensaje:</strong><br/>${safeMessage}</p>
                <p>Un saludo,<br/>Mario Hernández</p>
            `,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (error) {
            return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
