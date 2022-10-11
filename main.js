
var users = [];

//Cuando la pagina haya cargado todos los documentos empieza a ejecutar
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "aplication/json",
        success: function (response) {
            users = response;
            showPaticipants(users);
        },
        error: function(error){
            console.log(error);
            alert(error);
        }
    });



});


