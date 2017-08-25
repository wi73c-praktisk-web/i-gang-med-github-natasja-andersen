// ØVELSER - LØKKER, DEL 1

//øvelse 1: Lav en løkke der altid udføres mindst 1 gang eller indtil en tælle variabel er nået til en bestemt værdi

var count = 1;
do {
    console.log("et tal...");
   
}while(count > 8);

count++; 

//.................................................

//Øvelse 2: Benyt en løkke til at udskrive alle tallene fra 1 til 25 (Løs opgaven 3 gange med hver løkke))

//-----------------------while løkke-----------------------
var tal = 1;
while(tal < 26){
    console.log(tal);
    tal++; //Denne her bliver ved inditl tallet er = 10 og så er den false, og så stopper løkken
}

//-----------------------do løkke-----------------------

var tal = 1;
do{
    console.log(tal);
    tal++;
 } while(tal < 26);

var tal = 1;
for(var tal = 1; tal < 26; tal++){
    console.log("op op op");
}

//.................................................

//øvelse 3: Benyt en for løkke til at skrive alle år fra 2017 og ned til 1917 i denf aldene rækkefølge

var tal = 2017;
for(var tal = 2017; tal > 1916; tal--){
    console.log(tal);
}