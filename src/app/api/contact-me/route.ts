import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

export async function POST(request: NextRequest) {
    const data: FormData = await request.json()
    const { name, email, subject, phone, message } = data

    const user = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    if (!user || !pass) {
        return NextResponse.json({ message: "missing credentials" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user,
            pass
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: email,
            to: user,
            subject,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 5px; border: 1px solid #e0e0e0;">
                    <h2 style="color: #333;">Hola, Guillermo Anguiano</h2>
                    <p style="font-size: 16px; color: #555;">
                        Tienes un nuevo mensaje desde tu portafolio, de parte de ${name}.
                    </p>
                    <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;">
                    <h3 style="color: #555;">Detalles del Mensaje:</h3>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone}</p>
                    <p><strong>Asunto:</strong> ${subject}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style="background-color: #fff; padding: 10px; border: 1px solid #e0e0e0; border-radius: 3px;">
                        ${message}
                    </p>
                    <footer style="margin-top: 20px; font-size: 12px; color: #777;">
                        <p>Este mensaje fue enviado desde tu portafolio.</p>
                    </footer>
                </div>
            `,
        });


        return NextResponse.json({ message: "Success: email was sent", mail })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "email was not sent" }, { status: 400 })
    }
}