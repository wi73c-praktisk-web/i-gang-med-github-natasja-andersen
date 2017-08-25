//FUNKTIONER
//Diverse afprøvelser med funktioner:

hej(); //Det hedder hoisting når kaldet er FØR funktionen
function hej (){
    console.log("Det her virker jo");
}
//Det her gør at funktionen bliver kaldt

//.........................................

//Diverse afprøvelser med funktioner:
// Funktion med hoisting
hejsa ('Natasja');

function hejsa(who){
    console.log("Hej med dig", who);
}
hejsa ('Marie');

//.........................................

//Diverse afprøvelser med funktioner:
//Funktion med hoist problemer
var sayHai = function sayHai(value) {
    console.log(value);
}
sayHai('test for hoisting?'); // flyt ned under funktionen

//.........................................

//Funktion med flere arguements
function profil (navn, efternavn, alder){
    console.log("mit navn er", navn, efternavn, alder);
}
profil('Natasja', 'Andersen', '20 år');

//.........................................

//ØVELSE 1 - B
// Regnefunktioner
var result;

function plus(tal1, tal2){
    result = tal1 + tal2;
    console.log(result);
}
plus(20, 10);

//.........................................

var result;
 function minus(tal3, tal4){
     result = tal3 - tal4;
     console.log(result);
 }
 minus(40, 20);

 //.........................................
 
 var result;
 function gange (tal5, tal6){
     result = tal5 * tal6;
     console.log(result);
 }
 gange(30, 15);

//.........................................

 var result;
 function division (tal7, tal8){
     result = tal7 / tal8;
     console.log(result);
 }
 division(65,5);

 //.........................................

 var result;
 function pi (tal10){

 result = Math.PI + tal10;
 console.log(result);
 }
 pi(5);

 //.........................................

 var result;
 function kvadratrod(){
     result = Math.sqrt(result);
     console.log(result);
 }
 kvadratrod(16);

 //.........................................

 //ANONYME FUNKTION:

var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}
sayHeyAnonym('test af anonym funktion');

//.........................................

//ARROW FUNKTION:

var sayHeyAnonym = value => console.log(value); // Udskriver "test af anonym function" //=> er funktionen 
sayHeyAnonym('test af anonym funktion');

//.........................................

//Øvelse 2 - Afkortning af tekst

var tekst = "Hej med dig, hvordan går det i dag?";
var cut = tekst.slice(0, 10);
function streng (){
    console.log(cut);
}
streng();

//.........................................
// Andre måder at afkorte tekst på:

var tekst = "Hej med dig, hvordan går det i dag?";
function streng (tekst, cut){
    tekst = tekst
    var cut = tekst.slice(0, cut);
    console.log(cut);
}
streng(tekst, 10);


//.........................................
// Andre måder at afkorte tekst på:

var langTekst = "Hejsa, hvordan går det med dig i dag huehue";

function afkort(tekst){
    return tekst.substr(0, 20);
    // return tekkst;
}
console.log(afkort(langTekst));

//.........................................

//Øvelse 3 - Opret en funktion som retunerer -din- profil
var dato = new Date();
var bday = new Date("06/26/95");
var profil = function (p){
    return p[0] + " " + p[1] + ":\nFødt " + p[2] + " og jeg er " + p[3] + " år gammel"; // [2] er = arguement 3 men to da array er 0 based
    }

var idol = ["Natasja", "Andersen", "1995", dato.getFullYear() - bday.getFullYear()];
console.log(profil(idol));

//.........................................

//Øvelse 4 - Udvid funktionen calculator med flere funktioner som f.eks gange, pi etc.

function calculator(){
    var result = 0;
    return {
        add: function(x){
            result += x;
        },
        sub: function(x){
            result -= x;
        },
        multiply: function(x){
            result *= x;
        },
        dividere: function(x){
            result /= x;
        },
        pi: function(){
            result = Math.PI * result;
        },
        kvadratrod: function(){
            result = Math.sqrt (result);
        },
        result: function(x){
            return result.toFixed(2); //Du kan skrive .toFixed(2) her eller i console.log
        }
    }
}
var calc = calculator();
calc.add(2);
calc.add(5);
calc.pi();
console.log(calc.result());

//.........................................



// var profilen = function(){
//     var bday = new Date(1995,6,26);
//     console.log(bday.format(bday.toLocaleDateString()));

//     var nu = new Date();
//     console.log(bday.format( now.toLocaleDateSring()));

//     var alder = now.getFullYear() - bday.getFullYear();
//     if(nu.getMonth()>= bday.getMonth() && now.getDate()> bday.getDate())
//         bday--;

//     console.log(bday.format (bday));
// }
// profilen();

//.........................................

// var dato = new Date();

// var bday = new Date("06/26/95");

//  console.log(dato.getFullYear() - bday.getFullYear());
