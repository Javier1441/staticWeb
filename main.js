var users = [];

const showPaticipants = (data) => {
    let aux = [];

    data.array.forEach(element => {
        
        aux.push(data.element)
    });

    //$("#users").text("Participant: " + aux);  
    $("#users").html("<strong>Participants: </strong>" + aux); 

};

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


