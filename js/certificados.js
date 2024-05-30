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


/* =====Transformando menu hamburguer em X==== */
const menuHamburguer = document.querySelector(".menu-hamburguer");

menuHamburguer.addEventListener("click", () => {
    toggleMenu()
});


function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

}

