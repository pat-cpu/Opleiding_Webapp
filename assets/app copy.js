

const tornooien = [
  { club: "Gent" },
  { club: "Brugge" },
  { club: "Antwerpen" }
];

toonTornooien();


// function toonTornooien() {
//   console.log("Array op dit moment:", tornooien);

//   lijst.innerHTML = "";  //maakt lijst leeg

//   for (let tornooi of tornooien) {
//     const item = document.createElement("div");
//     item.textContent = tornooi;
//     lijst.appendChild(item);
//   }
// }

function toonTornooien() {
  console.log("Array op dit moment:", tornooien);
  lijst.innerHTML = "";

  for (let tornooi of tornooien) {

    lijst.innerHTML += `
      <div class="item">
        ${tornooi.club}
      </div>
    `;
  }
}

btnAdd.addEventListener("click", function () {
  const naam = txtNaam.value;

  tornooien.push({
  club: naam
});

  toonTornooien();

  txtNaam.value = "";
});