const tornooien = [];

const btnAdd = document.getElementById("btnAdd");
const lijst = document.getElementById("lijst");
const txtNaam = document.getElementById("txtNaam");

btnAdd.addEventListener("click", function () {

  const naam = txtNaam.value;

  tornooien.push(naam);

  console.log(tornooien);

  const item = document.createElement("div");

  item.textContent = naam;

  lijst.appendChild(item);

  txtNaam.value = "";
});