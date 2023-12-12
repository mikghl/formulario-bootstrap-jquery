$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    
    $('form').validate({

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira seu telefone'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos!`)
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        }
    })
})