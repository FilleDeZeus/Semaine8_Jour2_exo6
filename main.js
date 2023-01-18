//EXERCICE 1
let div = document.getElementById('content');
let para = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

div.onclick = function (e){
    e.target.style.border = 'red 1px solid';

    para.style.font = 'red bold';

    h1.style.backgroundColor = "blue";

    if (e.target == h2){
        h2.innerHTML = h2.innerHTML.slice(0,-1);
    }
}

let text =  "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
let section = document.getElementById("content");

section.addEventListener("mouseover",function () {
    this.innerHTML += "<p>" + text + "</p>";
});
