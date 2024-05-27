/* ========Gerador de PDF======= */


// Esta função será responsável por gerar o PDF a partir do conteúdo do curriculo.html
function generatePDF() {
    // Carrega o conteúdo do arquivo curriculo.html
    fetch('curriculo.html')
        .then(response => response.text())
        .then(html => {
            console.log("Conteúdo do curriculo.html:", html); // Adiciona um log para verificar o conteúdo

            // Agora temos o conteúdo HTML do currículo
            // Vamos gerar o PDF a partir desse HTML
            var element = document.createElement('div');
            element.innerHTML = html;

            // Configurações para a biblioteca html2pdf
            var opt = {
                margin:       1,
                filename:     'AlexandreDev.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Gera o PDF
            html2pdf()
                .from(element)
                .set(opt)
                .save();
        })
        .catch(error => {
            console.error("Erro ao carregar o curriculo.html:", error); // Adiciona um log de erro
        });
}

// Captura o evento de clique no botão de download do currículo
document.getElementById('download').addEventListener('click', function() {
    // Chama a função para gerar o PDF
    generatePDF();
}); 



  

