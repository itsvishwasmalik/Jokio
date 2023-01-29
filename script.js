const text = document.querySelector("#joke");
var type = "random";

var dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    var buttonText = e.target.innerHTML;
    type = e.target.textContent;
    var dropdownToggle = document.querySelector("#dropdownMenuButton");
    dropdownToggle.innerHTML = buttonText;
});

document.querySelector("#get").addEventListener("click", () => {
    fetch(
        "https://api.chucknorris.io/jokes/random?category=" + type.toLowerCase()
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data["value"]) {
                text.innerText = data["value"];
            }
        })
        .catch("404");
});
