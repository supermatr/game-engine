// Seleciona o botão e o pop-up
const mostrarPopUpBtn = document.getElementById('mostrarPopUp');
const popUp = document.getElementById('popUp');
const fecharPopUpBtn = document.getElementById('fecharPopUp');

// Adiciona um evento de clique ao botão "Mostrar Pop-up"
mostrarPopUpBtn.addEventListener('click', function() {
    // Exibe o pop-up
    popUp.style.display = 'block';
});

// Adiciona um evento de clique ao botão "Fechar"
fecharPopUpBtn.addEventListener('click', function() {
    // Esconde o pop-up
    popUp.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    // Configurações do carrossel
    var intervalo = 3000; // Intervalo de troca de imagem em milissegundos (3 segundos)
    var imagens = document.querySelectorAll(".carrossel img");
    var indice = 0;

    // Função para exibir a próxima imagem
    function mostrarProximaImagem() {
        imagens[indice].style.display = "none";
        indice = (indice + 1) % imagens.length;
        imagens[indice].style.display = "block";
    }

    // Inicia o carrossel
    imagens[indice].style.display = "block";

    // Salva a posição atual do scroll
    var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    setInterval(function() {
        var currentScrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        
        // Se a posição do scroll mudou, não faça nada
        if (currentScrollTop === scrollTop) {
            mostrarProximaImagem();
            // Restaura o scroll para onde estava
            window.scrollTo(0, scrollTop);
        }
    }, intervalo);
});


document.addEventListener("DOMContentLoaded", function() {
    var intervalo = 3000; // Intervalo de troca de imagem em milissegundos (3 segundos)
    var slides = document.querySelectorAll(".sim .slide");
    var indiceAtual = 0;

    function mostrarProximaImagem() {
        slides[indiceAtual].classList.remove("ativo");
        indiceAtual = (indiceAtual + 1) % slides.length;
        slides[indiceAtual].classList.add("ativo");
    }

    slides[indiceAtual].classList.add("ativo");

    setInterval(mostrarProximaImagem, intervalo);
});
