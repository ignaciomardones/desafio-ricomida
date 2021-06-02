/* <!-- Un botón "Enviar por correo " con un tooltip aplicado. -->
 */
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


/* <!-- Evento “click” de jquery para mostrar una alerta al hacer un clic sobre el botón de "Enviar por Correo " mediante el uso de los selectores por Id, implementar el id a la etiqueta del botón con nombre: "enviarCorreo​ --> */

$('#enviarCorreo').click(function() {
    alert("El correo fue enviado correctamente. ");
})

/* <!-- Modificar el color del texto de los títulos "INGREDIENTES " y "PREPARACIÓN " a color rojo cuando se haga doble clic sobre cada uno de ellos por individual​. --> */
$('#cambioColorIngredientes').on('dblclick', function() {
    $(this).css({
        'color': 'red'
    });
});

$('#cambioColorPreparacion').on('dblclick', function() {
    $(this).css({
        'color': 'red'
    });
});

/* <!-- Método de jQuery denominado `toggle` para hacer desaparecer y aparecer el contenido de la sección de Recetas Relacionadas --> */
$('.card-title').click(function() {
    $('.card-text').toggle();
});