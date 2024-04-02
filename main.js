
//document.querySelector("header button").addEventListener('click', function (e){}) é a mesma coisa que o codigo abaixo, só q embaixo e utilizando o jQuery
// linha de codigo para usar o jQuerry
$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#button-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const urlImg = $('#input-url-img').val();
        const novoItem = $('<li style="display: none"></li>');

        // Adicionando a imagem e o overlay ao novo item da lista
        $(`<img src="${urlImg}" />`).appendTo(novoItem);
        $(`
                <div class="overlay-image-link">
                    <a href="${urlImg}" target="_blank" title="Ver imagem em tamanho real">
                        Ver tamanho em tamanho real.
                    </a>
                </div>
            `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#input-url-img').val('');
    });
});
