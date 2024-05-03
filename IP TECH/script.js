document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('aviso-exibido')) {
        Swal.fire({
            title: 'IP-TECH',
            text: 'Qualquer dúvida e necessidade entre em contato com nossa equipe de suporte!',
            icon: 'warning',
            confirmButtonText: 'Ok!'
        });
        localStorage.setItem('aviso-exibido', true);
    }

    const formContato = document.getElementById('formContato');
    const aviso = document.getElementById('aviso');

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente

        // Aqui você pode adicionar o código para enviar os dados do formulário, por exemplo, usando fetch() ou XMLHttpRequest

        // Simulando o envio do formulário com sucesso após 1 segundo
        setTimeout(function() {
            // Exibe o aviso de sucesso
            aviso.style.display = 'block';
        }, 1000);
    });
});

function scrollToContact() {
    var contatoSection = document.getElementById('contato');
    if (contatoSection) {
        var offsetTop = contatoSection.offsetTop;
        window.scrollTo({
            top: offsetTop - 50,
            behavior: 'smooth'
        });
    }
}


window.addEventListener('load', function() {
    // Oculta a animação de carregamento após um certo período de tempo (por exemplo, 2 segundos)
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000);

    // Rola a página até o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


