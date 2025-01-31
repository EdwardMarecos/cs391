function checkAge() {
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    if (isNaN(ageInput)) {
        document.getElementById("main-content").style.visibility="hidden";
        document.getElementById("error-message").innerHTML = "Please enter a valid number";
        document.getElementById("error-content").style.visibility = "visible";
    } else if (age % 1 !== 0) {
        document.getElementById("main-content").style.visibility="hidden";
        document.getElementById("error-message").innerHTML = "Please enter an integer";
        document.getElementById("error-content").style.visibility = "visible";
    } else if (age < 0) {
        document.getElementById("main-content").style.visibility="hidden";
        document.getElementById("error-message").innerHTML = "Please enter a positive number";
        document.getElementById("error-content").style.visibility = "visible";
    } else if (age < 18) {
        document.getElementById("main-content").style.visibility="hidden";
        document.getElementById("error-message").innerHTML = "Please return when you are old enough";
        document.getElementById("error-content").style.visibility = "visible";
    } else if (age > 120) {
        document.getElementById("main-content").style.visibility="hidden";
        document.getElementById("error-message").innerHTML = "You are too old to be on this website";
        document.getElementById("error-content").style.visibility = "visible";
    } else {
        document.getElementById("main-content").style.visibility="visible";
        document.getElementById("error-content").style.visibility = "hidden";
    }

}