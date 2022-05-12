const navLogin = document.getElementById("login");
const navUser = document.getElementById("user");
const isLoggedIn = JSON.parse(localStorage.getItem('userLogged'));


logout = () => {
    localStorage.removeItem('userLogged');
    window.location.reload();
}

if (isLoggedIn) {
    document.getElementById("logout").addEventListener("click", logout);
}



loadUser = () => {
    if (isLoggedIn) {
        navLogin.style.display = "none";
        navUser.innerText=isLoggedIn.fullname;
    } else {
        navUser.style.display = "none";
    }
}

loadUser();