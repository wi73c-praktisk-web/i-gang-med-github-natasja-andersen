//OPERATORER

//Øvelse 1, benyt forskellige operatore

var tal1 = 5;
var tal2 = 10;

tal1+=tal2;
console.log(tal1);

//.................................................

var tal1 = 5;
var tal2 = 10;

tal2-=tal1;
console.log(tal1);

//.................................................

var tal1 = 5;
var tal2 = 10;

tal1*=tal2;
console.log(tal1);

//.................................................

var tal1 = 5;
var tal2 = 10;

tal2/=tal1;
console.log(tal1);

//.................................................

var tal1 = 5;
var tal2 = 50;

console.log(tal2%tal1);

//.................................................

var tal1 = 5;
var tal2 = 10;
console.log(++tal1);

//.................................................

var tal1 =5;
var tal2 = 10;
console.log(--tal2);

//.................................................

//Øvelse 2: lav 5 eksempler

var number1 = 40;
var number2 = 30;
number1 += number2;
console.log(number1);

//.................................................

var number1 = 20;
var number2 = 5;
number1 -= number2;
console.log(number1);

//.................................................

var number1 = 70;
var number2 = 10;
number1 *= number2;
console.log(number1);

//.................................................

var number1 = 80;
var number2 = 20;
number1 /= number2;
console.log(number1);

//.................................................

var number1 = 20;
var number2 = 15;
number1 %= 15;
console.log(number1);

//.................................................

//øvelse 3 - Opret en if sætning der kræver 2 betingelser opfyldt

var navn = "Natasja";
var tal = 22;
if(navn == "Natasja" && tal == 22){
    console.log("Dette kommer frem hvis statement virker");
}

//.................................................

//øvelse 4 - Gør som øvelse 3, men denne gang skal bar ene af betingelserne være opfyldt
var navn = "Natasja";
var tal = 22;
if(navn == "Natasja" || tal == 25){
    console.log("Dette kommer frem hvis statement virker");
}
