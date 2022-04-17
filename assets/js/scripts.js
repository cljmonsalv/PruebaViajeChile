var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//JQUERY
// Best practice, esperar que el documento este ready
$(document).ready(function(){

  $("#enviarForms").click(function(){
    alert("Gracias por su contacto, nos comunicaremos con Ud a la brevedad...");
  });

// Requerimiento 4
  $("h5").dblclick(function(){
      $(this).css({
        "color": "red",
      });
  });

// Requerimiento 5
  $(".Titulo").click(function(){
    //selector y accion que muestra y oculta los contenidos de postre
      $(".Cards").toggle();
  });

 
});
