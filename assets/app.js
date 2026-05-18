//===============================
//Console-logs
//===============================
const APP_VERSION = "2026-05-15-v2";

console.log("=== APP START ===");

if (location.search.includes("reset")) {
  console.log("RESET gevonden in URL");

  localStorage.clear();

  console.log("localStorage gewist");
  alert("Cache gewist");
}

const savedVersion = localStorage.getItem("app_version");

console.log("Opgeslagen versie:", savedVersion);
console.log("Huidige versie:", APP_VERSION);

if (savedVersion !== APP_VERSION) {
  console.log("VERSIE VERSCHILT → CACHE RESET");

  localStorage.clear();

  localStorage.setItem("app_version", APP_VERSION);

  console.log("Nieuwe versie opgeslagen:", APP_VERSION);

  alert("App werd geüpdatet. Data opnieuw geladen.");
} else {
  console.log("Versie OK → geen reset nodig");
}

console.table(
  [...document.scripts].map(s => ({
    script: s.src
  }))
);

//##################################################################

let tornooien = JSON.parse(localStorage.getItem("tornooien")) || [
  { club: "Gent", spel: "Triplet" },
  { club: "Brugge", spel: "Doublet" },
  { club: "Antwerpen", spel: "Mix" }
];

function bewaarTornooien() {
  localStorage.setItem("tornooien", JSON.stringify(tornooien));
}

function verwijderTornooi(index) {              

  tornooien.splice(index, 1);   
  bewaarTornooien();
  toonTornooien();    
}
    
function toonTornooien() { 
 console.log("Array op dit moment:", tornooien); 
  lijst.innerHTML = "";                         

  for (let i = 0; i < tornooien.length; i++) {

    const tornooi = tornooien[i];

    lijst.innerHTML += ` 
      <div class="item">
        ${tornooi.club} - ${tornooi.spel}               

        <button onclick="verwijderTornooi(${i})">
          X
        </button>
      </div>
    `;
  }
}

toonTornooien();      //Die haakjes () betekenen:

btnAdd.addEventListener("click", function () {        
  const naam = txtNaam.value.trim();                  
  if (naam === "") return;                                   
                                                      
 tornooien.push({
  club: naam,
  spel: "Onbekend"
});

bewaarTornooien();
toonTornooien();                                

  txtNaam.value = "";                                 
});
;