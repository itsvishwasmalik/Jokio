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
    var selectedCetegory = type.toLowerCase();
    var url =
        type === "random" || selectedCetegory === "random"
            ? "https://api.chucknorris.io/jokes/random"
            : "https://api.chucknorris.io/jokes/random?category=" +
              selectedCetegory;
    fetch(url)
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
