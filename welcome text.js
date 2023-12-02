
function showWelcomeText() {
    var welcomeText = document.createElement("div");
    welcomeText.id = "welcome-text";
    welcomeText.textContent = "welcome to my well about or bio!";
    document.querySelector(".glass").appendChild(welcomeText);
}

showWelcomeText();
