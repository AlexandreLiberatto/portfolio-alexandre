document.getElementById('downloadBtn').addEventListener('click', function() {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = './pdf/AlexandreDev.pdf';
    link.download = 'AlexandreDev.pdf';

    // Adiciona o link ao corpo do documento
    document.body.appendChild(link);

    // Clica no link para iniciar o download
    link.click();

    // Remove o link do documento
    document.body.removeChild(link);
});