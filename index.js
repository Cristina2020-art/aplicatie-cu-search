let users = ["Andrei", "Daniel", "Cosmin", "Rares"];

let div = document.querySelector("div");

function showUser () {
    let inputSearch = document.querySelector("#input-search");

    for (let i = 0; i < users.length; ++i) {
        // name -> users[i]
        if (inputSearch.value.toUpperCase() == users[i].toUpperCase()) {
            div.innerHTML = "<h1>" + inputSearch.value + "</h1>";
        }
    }
}