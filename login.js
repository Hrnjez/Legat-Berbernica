document.getElementById("login").addEventListener("click", login);

function login() {

    console.log("login atempmt")
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login?username=' + username + '&password=' + password, true);

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status != '200') {
            window.alert("pogresna lozinka");
        } else {
            localStorage.setItem('token', xhr.responseText);
            window.location.href='admin.html';
        }
    };

    xhr.send(null);

    // $.ajax('http://localhost:8080/login', {
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify({"username": username, "password": password}),
    //     dataType:'json',
    //     success: function() {
    //         window.alert("test")
    //     }
    //     ,
    //     error: function (request, status, err) {
    //         window.alert("pogresna lozinka" + err);
    //     }
    //
    // });
}
