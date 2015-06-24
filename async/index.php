<?php 
/* ASYNKRONE FILER 

Hvad betyder asynkron i denne sammenhæng?:

AJAX står for Asynchronous JavaScript and XML. Vi bruger Javascript, PHP og JSON i vores asynkrone kald.
Med AJAX kan vi konsolidere serveren og databasen fra klientens viewport (feks en browser), og returnere ny data til klienten uden at genopfriske siden.
For eksempel på Faaborg Gymnasiums forside. Øverst på siden kommer en oversigt over projekter og temaer. De hentes asynkront. Dvs. Siden indlæses som normalt, og når alle elementer er hentet af browseren, beder vi javascriptet om at hente en oversigt over projekter og temaer fra filen projekt-tema-preview.php. Denne fil konsoliderer databasen og returnerer et json objekt. Javascript-filen opretter så nye elementer i siden ud fra de modtagede oplysninger. Uden at siden skal genopfriske. Dette nedsætter request-tiden for siden, fordi vi kan fortsætte med at hente data efter siden er hentet. Der er skisme smart :-)

Dvs. vi arbejder med 3 komponenter:
  · En HTML-fil, eller et DOM (Document Object Model), som er der vi gerne vil opdatere data
  · En javascript-fil, som er den der sender en request til serveren efter DOM er indlæst, og opdaterer DOM
  · En PHP-fil, som udgør serverscript og svarer med json-data (Javascript Object Notation)

Hvis du vil vide mere, kan du besøge disse sider:
http://www.w3schools.com/ajax/
http://www.w3schools.com/json/
http://www.w3schools.com/js/js_htmldom.asp

Generelt er w3schools en forrygende ressource til forståelse af internetteknologi.
Thumbs up :-)

KH Jeppe, Smartmonkey
jeppe@smartmonkey.dk

*/
?>