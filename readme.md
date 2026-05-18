1\. DOCTYPE + html  → start pagina

2\. head            → instellingen (onzichtbaar)

3\. body            → wat je ziet

4\. script          → gedrag (JS start hier)

\----------------------------------------------------------

<body> = pagina

id=""  = haakje voor JavaScript

class="" = haakje voor CSS

script = start app.js

\---------------------------------------------------------

<button id="btnAdd" class="primary-button">

&#x20; Toevoegen

</button>


button             = er staat een knop

id="btnAdd"        = JavaScript kan deze knop vinden

class="primary-button" = CSS kan deze knop mooi maken

Toevoegen          = tekst op de knop

\----------------------------------------------------------


HTML:

<button id="btnAdd" class="primary-button">Toevoegen</button>


CSS:

.primary-button { ... }


JavaScript:

document.getElementById("btnAdd")


Dat is de koppeling.

HTML zet de knop neer, CSS maakt hem proper, JavaScript laat hem werken.

\-------------------------------------------------------------------------------


**Stap 2 = JavaScript: de knop laten werken.**


We hebben in HTML dit:


<button id="btnAdd">Tornooi toevoegen</button>

<div id="lijst"></div>

\----------------------------------------------------------

Nu zegt JavaScript:

1\. Zoek de knop
2\. Luister naar een klik
3\. Zet tekst in de lijst

\----------------------------------------------------------

Zet dit in assets/app.js:
#############################################################
// 1. Zoek onderdelen uit de HTML

const btnAdd = document.getElementById("btnAdd");

const lijst = document.getElementById("lijst");

// 2. Luister naar een klik op de knop

btnAdd.addEventListener("click", function () {


  // 3. Zet iets op het scherm

  lijst.innerHTML = "Je hebt op de knop geklikt!";

});

###############################################################

Wat gebeurt hier?

const btnAdd = document.getElementById("btnAdd");

1 .JavaScript zoekt de knop met id="btnAdd".

btnAdd.addEventListener("click", function () {

2. JavaScript wacht tot jij klikt.

lijst.innerHTML = "Je hebt op de knop geklikt!";

3. JavaScript zet tekst in:

<div id="lijst"></div>

\----------------------------------------------------------

            De gouden regel blijft:

            HTML = wat bestaat

            CSS = hoe het eruitziet

            JS = wat het doet



