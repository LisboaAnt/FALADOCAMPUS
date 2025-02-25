
// Função para enviar o email e fazer o upload dos arquivos
export const sendEmail = async (formData) => {
    try {
        // Preparar os parâmetros do template
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            title: formData.title,
            description: formData.description,
            recipient: formData.recipient,
            to_email: formData.to_email,
            archives: formData.archives,
        };

        
        return { success: true, response };
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return { success: false, error };
    }
};