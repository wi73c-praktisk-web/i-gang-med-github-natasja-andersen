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
det kan f.eks være at du har et navn som er "anders". I if sætningen er sand (true) så vil koden køre, men HVIS IKKE navnet er "Anders" så er det ikke sandt (true) og det er her "else" kommer ind. Så det er simpelthen noget der bruges hvis en betingelse/betingelser ikke er opfyldt.

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
----------------------------------------------------------------
# Beskrivelse af operatorer
*Forneden vil du kunne læse en lille forklaring om hvornår man bruger hver enkelt operator:*

* = Dette er en tildelings operator som du bruger i f.eks en variabel, altså når ngoet skal have en værdi. 

* == Dette er en sammenlignings operator og den bruges i if statements når vi gerne vil se om en variabel har en bestemt værdi og på den måde kan javascript se om statementet er true eller false.

* === Dette bruges til at sammenligne datatyper. Det kan f.eks bruges ved if statements var tal = "5" if(tal ===5){}. Her vil de tre operatorer tjekke om tallet er lig med et tal, men i denne variabel er tallet lavet til et string og derfor vil dette statement være false.

* ! Udråbstegnet "vender" logikken om så hvis du f.eks har skrevet style.display.none så vil udråbstegnet i teorien sige "style.display.not.none

* != betyder er ikke lig med. 

* !==  betyder er ikke lig med en værdi eller ikke lig med en bestemt type

* (<) Betyder mindre end, det bruger du f.eks i løkker

* (>) Betyder er større end, det bruger du f.eks i løkker

* <= Betyder også mindre end dette er bare en anden måde at skrive det på

* (>=) BEtyder også større end men det her er bare en anden måde at skrive det på

* (+) Betyder plus... det bruger du når du skal sætte flere variabler sammen (og tal)

* (-) Betyder minus... det bruger du når du skal trække tal fra hinanden

* (*) Betyder gange... det bruger du når du skal gange tal med hinanden

* (/) Betyder dividere... det bruger du til at dividere tal med hinanden 

* % Dette her angiver et modulus, du bruger modulus til at finde en rest værdi, f.eks kan du sige 11%2 det vil være = 1 da restbeløbet er en.

* && De her ampersands betyder "og" det bruegr du når du gerne vil have flere betingelser opfyldt før en kode bliver kørt. F.eks if(navn == "anders" && tal ==4){} så skal begge betingelser være opfydlt før koden bliver kørt

* || Betyder "eller". Dette bruger du typisk i if statements hvis vi siger der er tre betingelser men at kun den ene behøver at være opfyldt for at koden kører.

-------------------------------------------------------------
# Beskrivelse af for løkker
*Nedenunder kan du lsæe en beskrivelse af for løkker:*

En for løkke fungerer på den måde at man f.eks kan angive en variabel med et bestemt tal og så vil for løkken blvie ved med at tæle enten op eller ned indtill den når til det første eller det sidste tal er nået f.eks:
```javascript
var tal = 2000;
for(var tal = 200; tal > 1990; tal--){
console.log(tal);
}
``` 
I eksemplet foroven vil løkken blive ved med at køre indtil de når til tallet 1990, for så er betingelsen true, men når variablen ikke længere er større end 1990 vil det være false og løøkken stoppes derfor.

