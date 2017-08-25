//BETINGELSER 

//Øvelse 1: Opret en boolean variabel med værdien true, skriv en betinget sætning der console logger "hej verden" hvis variablens værdi er sand.

var navn = true;
if(navn){
    console.log("hej verden");
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Øvelse 2: Opret en variabel og giv den et tilfældigt tal mellem 0-10, opret en if sætning der udskriver "højere end 5" hvis værdien er højere, tilføj en else block hvis tallet er lavere

var number = Math.floor(Math.random() * 11);

if(number < 5){
    console.log("Højere end 5");
}else if(number > 5){
    console.log("Lavere end 5");
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Øvelse 3: Løs samme problem som i opgave 2 men med en Ternary operator i stedet for if else

var tallet = Math.floor(Math.random() * 11);
var over5 = tallet > 5;
var resultat = tallet ? "højere end fem" : "Lavere end fem";
console.log(resultat);

//------------------------------------------------------------------------------------------------------------------------------------------

//Øvelse 4: Opret en variabel med navnet på din favorit drik. Opret en if - else if - else struktur hvor der skal udskrives tekst, lav mindst to else if blokke

var drik = "cola";
if(drik == "cola"){
    console.log("Dette er den rigtige drik!");
}else if (drik == "sprite"){
    console.log("Dette er den forkerte drik, da det er Sprite åh nej!");
}
else if (drik == "fanta"){
    console.log("Dette er den forkerte drik, da det er fanta åh nej!");
}else{
    console.log("Det er hverken cola, sprite eller fanta...oh");
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Øvelse 5: Lav øvelse 4 men benyt switch i stedet

var drik = "cola";
switch(drik){
    case "cola":
    console.log("Dette er cola!");
    break;

    case "sprite":
    console.log("Dette er sprite!");
    break;

    default:
    console.log('Ingen af ovennævnte');
    break;
}
