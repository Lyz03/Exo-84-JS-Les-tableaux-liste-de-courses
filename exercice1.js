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
const ul = document.getElementById('listeCourse');
const input = document.getElementById('addItems');
const content = document.getElementById('tabContent');

content.innerText = articles.join(', ');

/*
* create li for each value in the array
* add a delete and hide button
 */
function addLi(value) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let hide = document.createElement('a');

    li.innerText = value;
    ul.appendChild(li);

    // delete button
    a.innerText = 'supprimer ';
    a.style.color = 'red';
    li.prepend(a);
    a.addEventListener("click", function () {
        li.remove();
        articles.splice(articles.indexOf(this.parentElement.lastChild.nodeValue), 1);
        content.innerText = articles.join(', ');
        console.log(articles);
    });

    // hide button
    hide.innerText = 'masquer ';
    hide.style.color = 'green';
    li.prepend(hide);
    hide.addEventListener("click", function () {
        this.parentElement.style.opacity = '0';
    });
}

for (let value of articles) {
    addLi(value);
}

document.getElementById('submit').addEventListener("click", function () {
    if (input.value.length > 0) {
        addLi(input.value);
        articles.push(input.value);
        content.innerText = articles.join(', ');
    }
});

document.getElementById('sort').addEventListener("click", function () {
    articles.sort();
    content.innerText = articles.join(', ');
});

document.getElementById('delete_last').addEventListener("click", function () {
    ul.lastChild.remove();
    articles.pop();
    content.innerText = articles.join(', ');
});



