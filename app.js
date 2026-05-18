const tornooien = [];

const btnAdd = document.getElementById("btnAdd");
const lijst = document.getElementById("lijst");
const txtNaam = document.getElementById("txtNaam");@
const item = document.createElement("div");

item.textContent = tornooi;

item.style.color = "red";

lijst.appendChild(item);

function renderLijst() {

  lijst.innerHTML = ""; //maakt leest telkens leegf

  for (let tornooi of tornooien) {

    const item = document.createElement("div");
    console.log(tornooien);
    item.textContent = tornooi;

    lijst.appendChild(item);
  }
}
console.log("render gestart");
console.log(tornooien);
console.log(tornooi);
btnAdd.addEventListener("click", function () {

  const naam = txtNaam.value;

  tornooien.push(naam);

  renderLijst();

  txtNaam.value = "";
});
