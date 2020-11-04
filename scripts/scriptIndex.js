var email = document.getElementById("email");
var password = document.getElementById("password");
var avatar = document.getElementById("foto");



function login(event) {
    event.preventDefault();

    var usuario = buscaUser(email.value);

    if (usuario === null) {
        alert("Usuário não encontrado");
        return;
    }

    if (usuario.login.password !== password.value) {
        alert("Senha incorreta");
        return;
    }
    localStorage.setItem("usuarios", JSON.stringify(usuario));
    location.href = "dashboard.html";

}

function trocaFoto() {
    avatar.src = "./images/user.svg";

    if (email.value === "") {
        return;
    }

    var usuario = buscaUser(email.value);

    if (usuario === null) {
        alert("Usuário não encontrado");
        return;
    }

    email.value = usuario.login.username;
    avatar.src = usuario.picture.large;

}

function buscaUser(identidade) {

    var index = usersList.findIndex(
        user => user.email === identidade ||
        user.login.username === identidade
    );

    if (index === -1) {
        return null;
    }

    return usersList[index];

}

let idadeMedia = 0;
let idadeTotal = 0;
let idadeMale = 0;
let idadeFemale = 0;

function somaIdade() {
    for (const user of usersList) {
        if (user.gender === "female") {
            idadeFemale += user.age;
            console.log("Mulher", user.age);
            console.log("soma Mulher", idadeFemale);
        } else if (user.gender === "male") {
            idadeMale += user.age;
            console.log("Homem", user.age);
            console.log("soma Homem", idadeMale);
        }
        idadeTotal += user.age;
        console.log("soma total", idadeTotal);
    }
    idadeMedia = idadeTotal / usersList.length;
    console.log("media", idadeMedia);

}