const tornooien = [];

const btnAdd = document.getElementById("btnAdd");
const lijst = document.getElementById("lijst");
const txtNaam = document.getElementById("txtNaam");

function renderLijst() {

  console.log("render gestart");

  lijst.innerHTML = "";

  console.log(tornooien);

  for (let tornooi of tornooien) {

    console.log(tornooi);

    const item = document.createElement("div");

    item.textContent = tornooi;

    item.style.color = "red";

    lijst.appendChild(item);
  }
}

btnAdd.addEventListener("click", function () {

  const naam = txtNaam.value;

  tornooien.push(naam);

  renderLijst();

  txtNaam.value = "";
});