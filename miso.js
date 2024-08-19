const menuButton = document.querySelector("#menu-button");
const dropDown = document.querySelector(".dropdown");
const signUp = document.querySelector("#sign-up");

function handleOpenDropdown(){
    dropDown.classList.add("open");
}

function handleCloseDropdown(){
    dropDown.classList.remove("open");
}

signUp.addEventListener("click", () => {
    window.location.href = "signup.html";
});