//Nav


//Ventana Emergente Botones

//Nombre  
function verinfo1() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let nombre;
    let foto;
    let info;

    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].nombre

            info = `
                <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                 `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            nombre = data.results[0].name.first

            info = `
                <p id="descripcion" class="text-center">
                ${nombre}</p>
                `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
            <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
            `

            foto1.innerHTML = info

        });

}

//Email
function verinfo2() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let email;
    let foto;
    let info;


    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].Email

            info = `
                <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                 `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            email = data.results[0].email

            info = `
                <p id="descripcion" class="text-center">
                ${email}</p>
                `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
            <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
            `

            foto1.innerHTML = info

        });

}


//Cumpleaños
function verinfo3() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let cumpleaños;
    let foto;
    let info;

    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].Edad

            info = `
                    <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                     `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            cumpleaños = data.results[0].dob.age

            info = `
                    <p id="descripcion" class="text-center">
                    ${cumpleaños} Años </p>
                    `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
                <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
                `

            foto1.innerHTML = info

        });

}

//Dirección 
function verinfo4() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let Direccion;
    let foto;
    let info;

    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].Direccion

            info = `
                    <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                     `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            Direccion = data.results[0].location.country

            info = `
                    <p id="descripcion" class="text-center">
                    ${Direccion}</p>
                    `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
                <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
                `

            foto1.innerHTML = info

        });

}

//Teléfono
function verinfo5() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let Telefono;
    let foto;
    let info;

    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].Telefono

            info = `
                <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                 `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            Telefono = data.results[0].cell

            info = `
                <p id="descripcion" class="text-center">
                ${Telefono}</p>
                `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
            <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
            `

            foto1.innerHTML = info

        });

}

//Usuario
function verinfo6() {
    let api00 = "encabezado.json"
    let api01 = "https://randomuser.me/api/";
    let titulo = document.getElementById("tituloEmer")
    let descripcion = document.getElementById("descripcionEmer");
    let foto1 = document.getElementById("imgEmer");
    let encabezado;
    let Usuario;
    let foto;
    let info;

    fetch(api00)
        .then(response => response.json())
        .then(data => {
            encabezado = data.encabezados[0].Usuario

            info = `
                <h2 id="tituloEmer" class="text-center">${encabezado}</h2>
                 `

            titulo.innerHTML = info
        });


    fetch(api01)
        .then(response => response.json())
        .then(data => {
            Usuario = data.results[0].login.username

            info = `
                <p id="descripcion" class="text-center">
                ${Usuario}</p>
                `
            descripcion.innerHTML = info

        });

    fetch(api01)
        .then(response => response.json())
        .then(data => {
            foto = data.results[0].picture.large

            info = `
            <img class="rounded-circle d-block m-auto"  src="${foto}" alt="">
            `

            foto1.innerHTML = info

        });

}

//Fin Ventana Emergente

//Datos de los Botones, Ocultos
$(document).ready(function() {
    $(info1).hide(info1);

});

$(document).ready(function() {
    $(info2).hide(info2);

});

$(document).ready(function() {
    $(info3).hide(info3);

});


//Botones para mostrar y ocultar datos de usuarios
$(document).ready(function() {
    $("#infoToggle1").click(function() {
        $(info1).toggle(info1);

    });
});

$(document).ready(function() {
    $("#infoToggle2").click(function() {
        $(info2).toggle(info2);

    });
});

$(document).ready(function() {
    $("#infoToggle3").click(function() {
        $(info3).toggle(info3);

    });
});

//Scroll Reveal Animations

window.sr = ScrollReveal();

sr.reveal(".logo", {
    scale: 0.3,
    duration: 5000
});

sr.reveal('.rounded', {
    duration: 3000,
    origin: 'bottom'
});


sr.reveal('.direccion', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.mapscroll', {
    duration: 5000,
    origin: 'top',
    distance: '300px'
});