var cargarPagina= function(){
  $("#cameraInput").change(capturar);
    if (image != null) {
      $("#image-map").attr("src", image);
      $("#image-prof").attr("src", image);
    }
  $("#nombre_edit").val(nombre);
  $("#apellido_edit").val(apellido);
  $("#email_edit").val(email);
  $("#nombre_usuario").text(nombre);
};
$(document).ready(cargarPagina) 
  var nombre = localStorage.getItem("nombreEdit");
  var apellido = localStorage.getItem("apellidoEdit");
  var email = localStorage.getItem("emailEdit");
  var image = localStorage.getItem("fotoAlmacenada");
  var capturar = function(event) {
    if(event.target.files && event.target.files[0]){
    var reader = new FileReader();

    reader.onload = function(event){
      var recuperar = event.target.result;
      $("#image-prof").attr("src", recuperar);
      localStorage.setItem("fotoAlmacenada", recuperar);
      
    }
    reader.readAsDataURL(event.target.files[0]);
  } 

	// $("#siguiente").click(function(evento){
 //    $("#inputFile").change(function(){
 //    readURL(this);
 //    });
 //  }); 
 //   ponerNombre();
}; 

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//     $('#put').attr('src', e.target.result);
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }
// $("#cameraInput").change(function (event) {
//       if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
//        $("#inputFile").attr("src", URL.createObjectURL(event.target.files[0]));
//    }  
//        // readURL(this);
// });
// function ponerNombre(){
// 	var ponerNom= $("#nombrePerfil");
// 	$(ponerNom).html(localStorage.getItem("nombre"));
// }
// var imagenValidada=$("#imagen").val();
// window.localStorage.setItem("image",imagenValidada);
// var img=  localStorage.getItem("image");



