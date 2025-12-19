document.getElementById("login").addEventListener("click", login);

function login(e) {

    e.preventDefault();

    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    var user = {
        "username": username,
        "password": password
    };


    let url = 'https://berbernicalegat.rs/legat/login';
    let urlLocal = 'http://localhost:8080/login';

    axios.post(url, user)
        .then((response) => {
            localStorage.setItem('token', response.data);
            window.location.href = 'admin.html';
        }, (error) => {
            window.alert("Pogresna lozinka!");
        });

}

