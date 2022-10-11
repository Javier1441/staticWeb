var users = [];

const showPaticipants = (data) => {
    let aux = [];

    data.forEach(element => {
        
        aux.push(element.name)
    });

    $("#users").text("Participant: " + aux);  
    //$("#users").html("<strong>Participants: </strong>" + aux); 

};

const getWiner = (data) => {

    const aleat = Math.floor(Math.random() * data.lenght());

    alert("hey")

    //$("#selected").html("<strong>seleccionado: </strong>" + data[aleat].name());
}

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

