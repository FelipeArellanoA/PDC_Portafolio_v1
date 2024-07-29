$(document).ready(function () {


    //mostrar la barra lateral info

    $(document).ready(function () {
        $(".underNavInfo").slideToggle(800);
    })

    $(document).ready(function () {
        $(".contactoEnter").slideToggle(800);
    })


    //rotar la flecha al hacer click

    var degrees = 0;
    $('#flechaAbajoHeader').click(function rotateMe(e) {

        degrees += 180;

        $('#flechaAbajoHeader').css({
            'transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-o-transform': 'rotate(' + degrees + 'deg)'
        });
    });


    //mostrar o esconder el contenido principal

    $("#flechaAbajoHeader").click(function () {
        $(".cardsArq").fadeToggle(200);
    })

    $("#flechaAbajoHeader").click(function () {
        $(".cardsW").fadeToggle(200);
    })


    //abrir y cerrar la caja de contacto

    $("#btnContacto").click(function () {
        $(".contactoBox").fadeToggle();
    })

    $("#btnContactoCancelar").click(function () {
        $(".contactoBox").fadeToggle();
    })

    /*-------------------------------------------------------------*/

    //mostrar contenido

    $(document).ready(function () {
        $(".listaDiseñoWeb").slideToggle(800);
    })


    //mostrar boton de regreso

    $(document).ready(function () {
        $(".btnRegresar").slideToggle(1400);
    })

      /*-------------------------------------------------------------*/

    //mostrar contenido alphaland

    $(document).ready(function () {
        $(".proyectosAlphaland").hide();
    })

    $(document).ready(function () {
        $(".proyectosAlphaland").fadeToggle(800);
    })


    //mostrar contenido a-frame

    $(document).ready(function () {
        $(".proyectosAFrame").hide();
    })

    $(document).ready(function () {
        $(".proyectosAFrame").fadeToggle(800);
    })


    //mostrar contenido pines place


    $(document).ready(function () {
        $(".proyectosPines").hide();
    })

    $(document).ready(function () {
        $(".proyectosPines").fadeToggle(800);
    })
    

    //mostrar contenido titulo

    $(document).ready(function () {
        $(".proyectosTitulo").hide();
    })

    $(document).ready(function () {
        $(".proyectosTitulo").fadeToggle(800);
    })






})


