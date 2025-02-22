import emailjs from "emailjs-com";

// Função para enviar o email e fazer o upload dos arquivos
export const sendEmail = async (formData) => {
    try {
        // Configuração do Cloudinary com a URL no formato 'cloudinary://<api_key>:<api_secret>@<cloud_name>'
        const cloudinaryUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
        
        // Realizar upload dos arquivos para o Cloudinary
        const fileUrls = await Promise.all(formData.archives.map(async (file) => {
            const formDataCloudinary = new FormData();
            formDataCloudinary.append('file', file.base64);
            formDataCloudinary.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); // Seu upload preset unsigned

            const response = await fetch(cloudinaryUrl, {
                method: 'POST',
                body: formDataCloudinary,
            });

            const result = await response.json();

            if (result.secure_url) {
                return result.secure_url; // Retorna o link do arquivo hospedado no Cloudinary
            } else {
                throw new Error("Erro ao carregar o arquivo no Cloudinary.");
            }
        }));

        // Gerar HTML com links para os arquivos
        const filesHTML = fileUrls.map(url => {
            return `<p><a href="${url}" target="_blank">Abrir Arquivo</a></p>`;
        }).join("");

        // Preparar os parâmetros do template
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            title: formData.title,
            description: formData.description,
            recipient: formData.recipient,
            to_email: formData.to_email,
            archives: filesHTML,
        };

        // Enviar o e-mail usando o EmailJS
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        );

        return { success: true, response };
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return { success: false, error };
    }
};
