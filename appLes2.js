// ============================
// DATA
// ============================

const tornooien = [];
const tornooien2 = [];


// ============================
// DOM ELEMENTEN
// ============================

const btnAdd = document.getElementById("btnAdd");
const lijst = document.getElementById("lijst");
const txtNaam = document.getElementById("txtNaam");

const btnAdd2 = document.getElementById("btnAdd2");
const lijst2 = document.getElementById("lijst2");
const txtNaam2 = document.getElementById("txtNaam2");

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


function renderLijst2() {        

  console.log("render gestart");

  lijst.innerHTML = "";     

  console.log(tornooien);

  for (let tornooi of tornooien2) {     

    console.log(tornooi);

    const item = document.createElement("div");    

    item.textContent = tornooi;    

    item.style.color = "blue";      

    lijst2.appendChild(item);      
  }                           
}    




btnAdd.addEventListener("click", function () {   

  const naam = txtNaam.value;    

  tornooien.push(naam); 

  renderLijst();  

  txtNaam.value = "";   
});        


  btnAdd2.addEventListener("click", function () {   

  const naam = txtNaam2.value;    

  tornooien2.push(naam); 

  renderLijst2();  

  txtNaam2.value = "";   
});                 