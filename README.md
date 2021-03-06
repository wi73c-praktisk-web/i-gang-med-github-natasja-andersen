# i-gang-med-github-natasja-andersen
## Forklaring på hvordan man laver er repository

Liste over hvordan du opretter et repository på Github ( Og console.log(); )
* Først skal du være sikker på at du er logget ind 
* Derefter går du op i højre hjørne og klikker på #New repository
* Hernæst skal du være sikker på at ejeren står som organisationens navn i dette tilfælde "WI73c-praktisk-web
* Du giver herefter repositoriet et navn f.eks *i-gang-med-github-natasja-andersen*
* Så sætter du enten repositoriet som private eller public
* Du skal være sikker på at "Initialize this repository with a README" boksen er markeret og at "add.gigtnore" er sat til "node"
* Derefter trykker du på "create reposity"

[Link til wi73 organisationen](https://github.com/wi73c-praktisk-web)



```javascript
function boxAlert() {
  alert('Denne tekst vil komme op i alert boksen');
}
console.log(alert);
```
*Console.log(); er noget du bruger i forbindelse med testning og fejlretning. Det kan f.eks være at du gerne vil se om dine variabler virker som de burde*

----------------------------------------------------------------
# Forklaring af if else
*Nedenunder vil du kunne læse en forklaring omkring if else:*

Du bruger en if else sætning i forbindelse med ting der skal opfylde bestemte kriterier
det kan f.eks være at du har et navn som er "Anders". I if sætningen er sand (true) så vil koden køre, men HVIS IKKE navnet er "Anders" så er det ikke sandt (true) og det er her "else" kommer ind. Så det er simpelthen noget der bruges hvis en betingelse/betingelser ikke er opfyldt.

Foklaring af tegnene i en if else satement:
Først skriver du betingelsen som er "if" efter det tilføjer du () og inden I dem skriver du selve betingelsen der skal opfyldes for at få koden til at køre. 
* Så det nu vil se sådan her ud;
``` javascript
if(navn == "Anders") nu skal der så tilføjes krølle parenteser {

} og inden i dem skriver du f.eks hvad der skal ud til brugeren eller konsollen 
console.log("teksten her vil komme frem hvis betingelsen er opfyldt"); Derefter lukker du if betingelsen med et }
``` 

Herefter tilføjer du et else statement som vil blive kørt hvis if betingelsen IKKE er opfyldt, det vil sige hvis den er falsk, og det vil se sådan her ud:

``` javascript
else{
console.log("Navnet er ikke Anders");
}
``` 
Den færdige version vil se sådan her ud:
```javascript
if(navn == "Anders"){
  console.log("Denne tekst vil komme frem hvis betingelsen er opfyldt");
}else{
  console.log("Navnet er ikke Anders");
}
``` 
*Uploadet fra Maries computer da min egen havde en kæmpe opdatering på det tidspunkt (Computere har bare dårlig timing nogle gange...)*

----------------------------------------------------------------
# Beskrivelse af operatorer
*Forneden vil du kunne læse en lille forklaring om hvornår man bruger hver enkelt operator:*

* = Dette er en tildelings operator som du bruger i f.eks en variabel, altså når noget skal have en værdi. 

* == Dette er en sammenlignings operator og den bruges i if statements når vi gerne vil se om en variabel har en bestemt værdi og på den måde kan javascript se om statementet er true eller false.

* === Dette bruges til at sammenligne datatyper. Det kan f.eks bruges ved if statements 
``` javascript
var tal = "5" if(tal ===5){}.
```
 Her vil de tre operatorer tjekke om tallet er lig med et tal, men i denne variabel er tallet lavet til et string og derfor vil dette statement være false.

* ! Udråbstegnet betyder er ikke

* != betyder hvis det ikke har samme værdi 

* !==  betyder er ikke lig med en værdi eller ikke lig med en bestemt datatype

* (<) Betyder mindre end, det bruger du f.eks i løkker

* (>) Betyder er større end, det bruger du f.eks i løkker

* <= Betyder mindre end eller lig med (det samme som)

* (>=) Betyder større end eller lig med (det samme som)

* (+) Betyder plus... det bruger du når du skal sætte flere variabler / værdier sammen

* (-) Betyder minus... det bruger du når du skal trække tal / værdier fra hinanden

* (*) Betyder gange... det bruger du når du skal gange tal / værdier med hinanden

* (/) Betyder dividere... det bruger du til at dividere tal / værdier med hinanden 

* % Dette her angiver et modulus, du bruger modulus til at finde en rest værdi af dividerede tal, f.eks kan du sige 11%2 det vil være = 1 da restbeløbet er en.

* && De her ampersands betyder "og" det bruger du når du gerne vil have flere betingelser opfyldt før en kode bliver kørt. F.eks
``` javascript
 if(navn == "Anders" && tal ==4){}
 ```
så skal begge betingelser være opfydlt før koden bliver kørt

* || Betyder "eller". Dette bruger du typisk i if statements hvis vi siger der er tre betingelser men at kun den ene behøver at være opfyldt for at koden kører.

-------------------------------------------------------------
# Beskrivelse af for løkker
*Nedenunder kan du læse en beskrivelse af for løkker:*

En for løkke fungerer på den måde at man f.eks kan angive en variabel med et bestemt tal og så vil for løkken blive ved med at tælle enten op eller ned indtil den når til det første eller det sidste tal f.eks:
```javascript
var tal = 2000;
for(var tal = 2000; tal > 1990; tal--){
console.log(tal);
}
``` 
I eksemplet foroven vil løkken blive ved med at køre indtil den når til tallet 1990, for så er betingelsen true, men når variablen ikke længere er større end 1990 vil det være false og løkken stoppes derfor.

------------------------------------------------------------
# Forklaring af funktioner
*Nedenunder vil du kunne se en forklaring om funktioner*

Du bruger en funktion til at bede Javascript om at gøre et bestemt event f.eks når du klikker på en knap og der så sker 'noget' så er det faktisk en funktion der går ind og sørger for at der sker den specifikke ting det kan f.eks være at når du trykker på knappen så kommer der mere tekst frem fra et 'skjult' afsnit på siden.

Funktioner kan brugers til: 
* At manipulere med HTML tags, f.eks tekst, knapper osv.
* At lave specielle 'events' på en hjemmeside, f.eks et billedegalleri med pile der skifter billedet, email valideringer og dropdown menuer
* Du kan også lave effekter, såsom snefald på et billede (Har selv prøvet det og det virker! \o/ )

Et eksempel på en funktion:
``` javascript
var langTekst = "Hejsa, hvordan går det med dig i dag?";

function afkort(tekst){
   return tekst.substr(0, 19);
}
  console.log(afkort(langTekst));
```
*Funktionen foroven vil skære noget af teksten af, i dette tilfælde alt efter "går" vil ikke blive vist*
I eksemplet definerer man funktionen ved at give den et navn i dette tilfælde "afkort" derefter skal den have sine parenteser, i eksemplet har jeg givet den et argument som bliver brugt nede i return som er inde i selve funktionen. Du starter en funktion med { og slutter funktionen med et}. "substr" som fortæller at vi gerne ved skære noget af en tekst af i () skal man først definere hvor man starter, her har jeg sagt fra tegn 0 og derefter fortæller jeg hvor mange tegn jeg vil have med. Alt efter 19 tegn bliver fjernet.
Udenfor funktionen har jeg lavet en console.log hvor jeg har sagt at jeg gerne vil have funktionen og min variabel med, så når jeg udskriver til min konsol vil den vise de første 19 tegn fra teksten i "var langTekst"

------------------------------------------------------------
# Asynkronitet

*Forklaring af asynkronitet*
* Først laver du funktionen, så laver du i dette tilfælde to arguements 
``` javascript 
function getData(dataURI, callback) { 
  ``` 
  * Derefter vil console.log udskrive den tekst der nu er skrevet ind
  ``` javascript
  console.log('første linje i getData funktionen...');
  ```

  * Den næste linje er en timeout med en anonym funktion som vil fortælle javascript at det skal vente i de angivne sekunder
  ``` javascript
  var timer = setTimeout(function () {
      console.log('Her der der gået 2 sekunder.');
      var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
      callback(dataArray);
   }, 2000);
}
``` 
I koden ovenover vil console.log aktivere efter der er gået to sekunder, det er defineret til ellersidst med "2000" da javascript bruger milisekunder så derfor vil "2000" være = to sekunder.

``` javascript
function outputData(myData) {
   console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
}
```
Denne kode stump udskriver tallene fra arrayet som du kan se i boksen længere oppe.

``` javascript
getData('http://www.domain.com/something', outputData);
console.log("Denne kode linje burde være den sidste.");
```
Som du kan se -burde- denne linje være den sidste, men den er faktisk nummer to i konsollen, og grunden til det er at i timeOut funktionen fortæller den at alt i kodeblokken skal vente med at 'execute' indtil der er gået to sekunder, så derfor hopper den videred til næste kodeblok med det samme.

Den samlede kode ser sådan her ud:
``` javascript
function getData(dataURI, callback) {
   console.log('første linje i getData funktionen...');
   var timer = setTimeout(function () {
      console.log('Her der der gået 2 sekunder.');
      var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
      callback(dataArray);
   }, 2000);
}

function outputData(myData) {
   console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
}

getData('http://www.domain.com/something', outputData);
console.log("Denne kode linje burde være den sidste.");
```
---------------------------------------------------------
# Forklaring af callbacks
*Nedenunder vil du kunne læse en forklaring med callbacks*

Du bruger callbacks til at sende funktioner med arguments til en anden funktion i koden.

Et eksempel hvor man bruger callbacks: 
``` javascript
 // tænk på dette som den primære funktion der kaldes fra vores kode
function doSomething(someValue, callback){ //når doSomething er færdig med at gøre det den skal vil vi gerne have den til at gøre noget andet og derfor bruger vi "callback" efter,
   callback(someValue); //Kald funktionen "callback" det her sker efter den første handling
}
// denne funktion vil blive udført som en callback FRA doSomething funktionen, den første funktion gør noget og så bliver denne her funktion tilføjet efterfølgende
function outputSomething(value){
   console.log(value);
}
    
    doSomething('text', outputSomething); //'text' er det der vil blive udskrevet i konsollen, så hvis du ændrer det til "Hello world" så vil det være "Hello world" der vil komme frem i konsollen
```
*Man kan i stedet bruge promises - mere om det nedenunder*

---------------------------------------------------------

# Forklaring af promises
*Nedenunder vil du kunne læse en forklaring med promises*

Promises kan du bruge når du gerne vil have javascript til at sende et argument fra en funktion til en anden funktion. Nedenunder kan du se et eksempel hvor promise er brugt (Det fungerer i øvrigt stortset ligesom "callbacks") 

``` javascript
  var firstPromise = new Promise(function (resolve, reject) {
     // her kunne der være masser af kode der skulle udføres
     // og derefter afsluttes med at resolve eller reject
     // alt efter om alting lykkedes eller ej
     if (true) {
        resolve('success');
     } else {
        reject('Det var ikke en succes');
     }
  });
 
  firstPromise.then(function(successMessage) {
     console.log(successMessage);
  }).catch(function(errorMessage) {
     console.log(errorMessage);
  });
```

-------------------------------------------------------------
# Forklaring af fetch.then.catch
*Nedenunder kan du læse mere om feth.then.catch*

Fetching er noget du bruger til at integrere et promise som så kan foretage et asynkront kald til en url/API. Derefter vil du bruge "then" til at indsamle den data du får retur fra URL/API addressen. Men hvis der er en fejl f.eks at URL/API addressen er nede eller ikke længere eksisterere så vil den ryge ned til "catch"

-Men! For at vi kan -se- indholdet er vi nødt til at "konvertere" det, dette gør vi ved hjælp af JSON (I hvert fald indtil videre på hovedforløbet) dette gøres ved at skrive "return response.json();" hvor vi beder om (requester) at API'en sender dataen tilbage til os i JSON. 
JSON vil via console.log() fortælle os hvad dette API indeholder og ved hjælp af det kan vi som udviklere bruge den information til at udskrive det i browseren som et array.

Et eksempel hvor man kan bruge det:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="liste">
    </div>
<script>

  fetch('https://swapi.co/api/people/') //API'en vi vil have data fra
  .then((response) => {
      if(response.status == 200){//Betingelse der fortæller hvad der skal ske hvis siden fungerer via status 200 (Betyder at internetsiden fungerer)
        return response.json();
      }else
      throw new Error('Fejl'); //Fortæller hvad der skal ske hvis status koden er alt andet end 200
  })
  .then((json) => {
var liste = document.getElementById('liste');//Her fortæller vi at vi gerne vil have fat i noget HTML.
json.results.forEach(function(item, index, arr){//Her løber vi igennem resultaterne fra arrayet JSON har givet os
      console.log(json.results[index].name);//Her beder vi konsollen om at udskrive -alle- navnene der er i arrayet
      liste.innerHTML += '<p>' + json.results[index].name + '</p>'; //Her gør vi det samme som i konsollen, men denne linje fortæller at vi gerne vil have det skrevet ud i browseren
   item[index];
}) 

  })  //Catch, hernede fortæller vi hvad vi gerne vil have koden til at udføre hvis der opstår en fejl, i dette tilfælde vil der bare komme en besked frem i konsollen med teksten "Fejl"
  .catch((error) => {
    console.log(error);
});
</script>
``` 
I eksemplet ovenover har jeg brugt html så jeg kan udskrive det i browseren.

-------------------------------------------------------------
# Forklaring af node-server basic
*Nedenunder kan du læse ne forklaring omkring node-server basic*

Med node-server kan du via node.js og javascript forbinde til en server, og dermed gøre din kodning til serverside kodning. Nedenunder kan du se et eksempel på hvordan man opretter forbindelse til en localhost (lokal server på computeren) ved hjælp at node.js og javascript:
``` javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const router = require('./controllers/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);
``` 
Foroven starter du med at lave en const (En variabel der ikke ændrer værdi) hvor du sætter et modul ind, i dette tilfælde et indygget modul med 'http'
Derefter skal du have fat i navnet på den lokale server som altid vil være '127.0.0.1' (Eller'localhost80')
Der skal også angives en port, og i dette tilfælde har jeg valgt 3001 (Det er for at identificere hvor serveren befinder sig)

I dette eksempel bruger jeg også en 'route' som kan sende os videre til andre sider på serveren.

Dernæst skal funktionen som forbinder til serveren oprettes. Den fortæller at router skal forbinde til serveren via porten og addressen på serveren.

Derefter går jeg hen til routefilen som jeg bare har kaldt routeController, nedenunder kan du se hvordan det ser ud:
``` javascript
const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write(`<h1>Her vil der være en hjemmeside heading</h1>
      <p>OG her vil der være en masse tekst</p>`);
			res.end();
		} else {
			res.statusCode = 404;
			res.end("<h1>Fejl! Tjek venligst koden!</h1>");
		}
	}
};
``` 
Der oprettes en variabel med 'url' som jeg vil bruge lidt længere nede. Derefter eksporterer vi vores http modul. "Var pathname = url.parse..." Tjekker navnet i url baren i browseren, derefter laver vi en betingelser hvor vi siger at hvis addressen i url baren er /forside så vil vi gerne have at den tjekker at der er forbindelse til siden det gør vi med "res.statusCode = 200" Vi siger 200 fordi det er statuskoden for en side der fungerer. Vi bruger ordet "res" foran fordi vi har givet vores argument det navn i funktionen. (Det kunne ligesågodt være "request" "svar" osv, det er 'bare' et navn)

I "res.setHeader..." Definerer vi hvlken type indhold vi gerne vil have ind på siden, i dette tilfælde html.
Nedenunder i "res.write..." Skriver vi indholdet det er her vi sætter alt vores html ind så vi kan få en rigtig fin side.
I "res.end();" fortæller vi at kodeblokken skal afsluttes.

I "else" betingelsen fortæller vi hvordan browseren skal reagere hvis der opstår en fejl! Det er derfor vi skriver "res.statusCode = 404" da dette nummer betyder fejl.
Derefter har vi endnu en "res.end()" hvor vi fortæller kodeblokken skal stoppe her har jeg bare tilføjet en tekst som vil komme frem som en h1 i browseren.



