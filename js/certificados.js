$(document).ready(function() {
    // Função para adicionar a classe de animação
    function adicionarAnimacao() {
        $('.carousel-item.active img').addClass('animacao-3d');
    }

    // Função para remover a classe de animação após a animação terminar
    function removerAnimacao() {
        $('.carousel-item img').removeClass('animacao-3d');
    }

    // Garantir que a animação é removida antes de adicionar novamente
    $('#carousel-controles').on('slid.bs.carousel', function() {
        removerAnimacao();
        adicionarAnimacao();
    });

    // Adicionar animação na carga inicial
    adicionarAnimacao();
});
