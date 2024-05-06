const sobreMi = document.getElementById('sobreMi');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let userList = [];

// Obtener datos del localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  userList = JSON.parse(localStorage.getItem('userList')) || [];
  updateDOM();
  updateLocalStorage(); // Asegúrate de actualizar LocalStorage al cargar la página
});

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

async function getRandomUser() {
  let res = await fetch('https://randomuser.me/api');
  let data = await res.json();
  let user = data.results[0];
  let newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.random() * 100000,
  };
  addData(newUser);
  updateLocalStorage(); // Actualiza LocalStorage después de agregar un nuevo usuario
}

function addData(obj) {
  userList.push(obj);
  updateLocalStorage();
  updateDOM();
}

function doubleMoney() {
  // Forma 1
  userList.forEach((element) => {
    element.money *= 2;
  });

  // Forma 2
  // userList = userList.map((element) => ({
  //   name: element.name,
  //   money: element.money * 2,
  // }));

  updateDOM();
  updateLocalStorage(); // Actualiza LocalStorage después de duplicar el dinero
}

function sortByRichest() {
  userList.sort((a, b) => b.money - a.money);
  updateDOM();
  updateLocalStorage(); // Actualiza LocalStorage después de ordenar por riqueza
}

function showMillionaires() {
  userList = userList.filter((element) => element.money > 1000000);
  updateDOM();
  updateLocalStorage(); // Actualiza LocalStorage después de mostrar solo millonarios
}

function calculateWealth() {
  let wealth = userList.reduce((acc, user) => (acc += user.money), 0);
  let wealthElement = document.createElement('div');
  let wealthFormatted = formatMoney(wealth);
  wealthElement.id= "total";
  let comprobacion= document.getElementById("total");
  if (comprobacion){
    comprobacion.parentElement.removeChild(comprobacion);
  }
  wealthElement.innerHTML = `<h3>Dinero total: <strong>${wealthFormatted}</strong></h3>`;
  sobreMi.appendChild(wealthElement);
  
}

function updateDOM() {
  sobreMi.innerHTML = '<h2><strong>Persona</strong> Dinero</h2>';

  userList.forEach((user) => {
    let userElement = document.createElement('div');
    userElement.classList.toggle('person');
    let moneyFormatted = formatMoney(user.money);
    userElement.innerHTML = `<strong>${user.name} </strong> ${moneyFormatted}`;
    sobreMi.appendChild(userElement);
  });
}

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '€';
}

function updateLocalStorage() {
  localStorage.setItem('userList', JSON.stringify(userList));
}