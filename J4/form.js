

function form(obj) {

    var name = document.getElementById("firstname").value;

    var password = document.getElementById("password").value;

    if (name = null || name == "") {
        alert("Name can't be blank");

        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long ");

        return false;
    }
    else {
        return true;
    }
}
