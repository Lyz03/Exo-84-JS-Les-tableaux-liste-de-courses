// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :
let ul = document.getElementById('listeCourse');
let input = document.getElementById('addItems');
let content = document.getElementById('tabContent');

content.innerText = articles.join(', ');

/*
* create li for each value in the array
* add a delete button
 */
function addLi(value) {
    let li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);
    let a = document.createElement('a');
    a.innerText = ' supprimer';
    a.style.color = 'red';
    li.appendChild(a);
    a.addEventListener("click", function () {
        li.remove();
        a.remove();
    });
}

for (let value of articles) {
    addLi(value);
}

document.getElementById('submit').addEventListener("click", function () {
    addLi(input.value);
    articles.push(input.value);
    content.innerText = articles.join(', ');
});

document.getElementById('sort').addEventListener("click", function () {
   articles.sort();
   content.innerText = articles.join(', ');
});



