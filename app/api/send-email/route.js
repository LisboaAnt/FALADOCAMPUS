import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuração do transporter do nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Validar dados necessários
        if (!formData.title || !formData.description) {
            return NextResponse.json(
                { error: 'Dados obrigatórios faltando' },
                { status: 400 }
            );
        }

        // Configurar o email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: formData.to_email,
            subject: `C.A. Fala Dev: ${formData.type}`,
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #4B2DBB; text-align: center; border-bottom: 2px solid #4B2DBB; padding-bottom: 10px;">
                    📬 Nova Mensagem - Fala Dev ; ${formData.type} 
                </h2>
        
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin: 15px 0;">
                    ${formData.name || formData.email || formData.phone ? `
                        <h3 style="color: #4B2DBB; margin-top: 20px;">👤 Dados do Remetente</h3>
                        ${formData.name ? `<p style="margin: 8px 0;"><strong>Nome:</strong> ${formData.name}</p>` : ''}
                        ${formData.email ? `<p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>` : ''}
                        ${formData.phone ? `<p style="margin: 8px 0;"><strong>Telefone:</strong> ${formData.phone}</p>` : ''}
                    ` : `
                        <h3 style="margin: 8px 0; color: #666; font-style: italic;">
                            🔒 Remetente optou por não se identificar
                        </h3>
                    `}

                    <h3 style="color: #4B2DBB; margin-top: 20px;">📋 Informações da Mensagem</h3>
                    <p style="margin: 8px 0;"><strong>Título:</strong> ${formData.title}</p>
                    <p style="margin: 8px 0;"><strong>Descrição:</strong> ${formData.description}</p>
                    
                    ${formData.recipient ? `
                        <p style="margin: 8px 0;"><strong>Destinatário ${formData.recipient}:</strong> ${formData.to_email} </p>
                    ` : ''}
                </div>
        
                <footer style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666;">
                    <p style="font-size: 12px;">Esta é uma mensagem automática do sistema Fala Dev.</p>
                    <p style="font-size: 12px;">Por favor, não responda diretamente a este email.</p>
                </footer>
            </div>
            `,
            attachments: formData.archives ? formData.archives.map(file => ({
                filename: file.name,
                content: file.data,
                encoding: 'base64'
            })) : []
        };

        // Enviar o email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email enviado com sucesso' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erro na rota de envio de email:', error);
        return NextResponse.json(
            { success: false, error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
} 