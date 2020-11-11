document.getElementById("login").addEventListener("click", login);

function login(e) {

    e.preventDefault();

    console.log("login atempmt")
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();
    let url = 'http://134.122.112.114:8080/legat/login';
    let urlLocal = 'http://localhost:8080/login';
    xhr.open('POST', url, false);

    var user = {
        "username": username,
        "password": password
    };

    var json = JSON.stringify(user);

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status != '200') {
            window.alert("pogresna lozinka");
        } else {
            localStorage.setItem('token', xhr.responseText);
            window.location.href = 'admin.html';

        }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

}

