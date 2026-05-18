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


const tornooien = [
  {
    club: "Gent",
    spel: "Triplet"
  },
  {
    club: "Brugge",
    spel: "Doublet"
  },
  {
    club: "Antwerpen",
    spel: "Mix"
  }
];

function verwijderTornooi(index) {              // Deze functie verwijdert een tornooi uit de array op basis van de index.

  tornooien.splice(index, 1);                  // De splice-methode verwijdert item nummer 1  tornooien.splice(1, 1); 
                                              // verwijdert Brugge.
                                              
  toonTornooien();    //Na het verwijderen wordt de lijst opnieuw opgebouwd.
}
                                                      /*array verandert
                                                      ↓
                                                      toonTornooien()
                                                      ↓
                                                      scherm wordt opnieuw gemaakt*/



function toonTornooien() {                      // Deze functie tekent de tornooien op het scherm.

  lijst.innerHTML = "";                         // Eerst maken we de lijst leeg, Anders zou alles telkens dubbel verschijnen.

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


btnAdd.addEventListener("click", function () {        //Als er op de knop btnAdd geklikt wordt, voer dan deze code uit.”
  const naam = txtNaam.value.trim();                  //Hier leest JS wat er in het tekstveld staat.
                                                      //Trim haalt spaties voor- en achteraan weg
  if (naam === "") return;                            // Hier leest JS wat er in het tekstveld staat. bv als je Rumst typt           
                                                      
  tornooien.push({                                    //Hier voeg je een nieuw object toe aan de array.
    club: naam
  });

    toonTornooien();                                  //Nu wordt de lijst opnieuw getekend op het scherm.

  txtNaam.value = "";                                 //Hier wordt het tekstveld leeg gemaakt.
});
;