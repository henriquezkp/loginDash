var nameUser = document.getElementById("nameUser");
var tagUser = document.getElementById("tagUser");
var imageUser = document.getElementById("imageUser");


function calculaMedia(gender) {
    var total = 0;
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === gender || gender === null) {
            total += usuario.age;
            quantidade++;
        }
    }

    return total / quantidade;
}

function somaIdades() {
    var soma = 0;
    for (var usuario of usersList) {
        soma += usuario.age;
    }

    return soma;
}

function quantidadeDeHomens() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "male") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeDeMulheres() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "female") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeTotal() {
    return usersList.length;
}

function logout() {
    location.href = "index.html";
    localStorage.clear("usuarios");
}

window.addEventListener('load', function() {
    // Soma das idades
    document.getElementById("somaIdades").innerText = somaIdades();
    // Media geral de idade
    document.getElementById("mediaGeral").innerText = calculaMedia(null).toFixed(0);
    // Média de idade dos homens
    document.getElementById("mediaHomens").innerText = calculaMedia("male").toFixed(0);
    // Media de idade das mulheres
    document.getElementById("mediaMulheres").innerText = calculaMedia("female").toFixed(0);

    // População de homens
    document.getElementById("percHomens").innerText = ((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(0) + "%";
    document.getElementById("percHomensBar").style = `width: ${((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(0)}%`;

    // População de mulheres
    document.getElementById("percMulher").innerText = ((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(0) + "%";
    document.getElementById("percMulherBar").style = `width: ${((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(0)}%`;

    setInterval(function() {
        document.getElementById("horario").innerHTML = `${new Date().toTimeString().substring(0, 8)} <br>
        ${new Date().toLocaleDateString()}`;
        //new Date().toTimeString().substring(0, 8) + " " + new Date().toLocaleDateString();
    }, 1000);

    //colocando imagem do usuário na tela
    usuario = JSON.parse(localStorage.getItem("usuarios"))

    nameUser.innerHTML = usuario.name;
    tagUser.innerHTML = usuario.login.username
    imageUser.src = usuario.picture.large;

});