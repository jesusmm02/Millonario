const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Vector para almacenar los usuarios
let userList = [];

// Función que obtiene de la API un nombre aleatorio,
// genera una cantidad de dinero aleatoria cuyo máximo es 1.000.000
// y añade al usuario con ambos datos

//async function getRandomUser() {
  //let res = await fetch('https://randomuser.me/api');
  //let data = await res.json();
  //let user = data.results[0];
  let user = data.results

  // TODO: Crea un objeto usuario (newUser) que tenga como atributos: name y money
  let name= await fetch('https://randomuser.me/api');
  let money= (int) (Math.Random()*1000000+1);
  let newUser=(name, money)
  addData(newUser);
//}

// TODO: Función que añade un nuevo usuario (objeto) al listado de usuarios (array)
function addData(newUser) {
    userList.push(newUser);
}

add-user.addEventListener("click", addData); 

// TODO: Función que dobla el dinero de todos los usuarios existentes
  let usuarios = new Map();
  usuarios.set(userList);

  function doubleMoney() {
    userList.map(element => {
      element.money *= 2
    });
  }

double.addEventListener("click", doubleMoney);

// TODO: Función que ordena a los usuarios por la cantidad de dinero que tienen
function sortByRichest() {
  userList.sort((a, b) => b.money - a.money);
  updateDOM()
}

// TODO: Función que muestra únicamente a los usuarios millonarios (tienen más de 1.000.000)
function showMillionaires() {
  userList=userList.filter(element => element.money > 1000000)}
  updateDOM()

// TODO: Función que calcula y muestra el dinero total de todos los usuarios
function calculateWealth() {
  // TIP: Puedes usar reduce ()
}

// TODO: Función que actualiza el DOM
function updateDOM() {
  // TIP: Puedes usar forEach () para actualizar el DOM con cada usuario y su dinero
}

// Función que formatea un número a dinero
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '€';
}

// Obtenemos un usuario al iniciar la app
getRandomUser();

// TODO: Event listeners
