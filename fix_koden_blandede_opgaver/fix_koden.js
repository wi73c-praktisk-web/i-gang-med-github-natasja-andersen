//Fix koden opgave 1
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var navn = "Du skal udfylde navn feltet\n";
var alder = "Du skal udfylde alder feltet\n";
var adresse = "Du skal udfylde adresse feltet\n";

var fejlbeskeder = navn + alder + adresse;

if (navn == "") {
	fejlbeskeder = "Du skal udfylde navn feltet\n";
}

if (alder == "") {
	fejlbeskeder = "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
	fejlbeskeder = "Du skal udfylde adresse feltet\n";
}

console.log (fejlbeskeder);

//...................................................................

//Fix koden part 2
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var brugernavn = "Du skal udfylde brugernavn feltet\n ";
var password = "Du skal udfylde password feltet\n ";
var email = "Du skal udfylde email feltet\n";

var fejlbeskeder = [brugernavn + password + email]; //Som array
// var fejlbeskeder = brugernavn + password + email; //som normal tekst

if (brugernavn == "") {
	fejlbeskeder = ["Du skal udfylde brugernavn feltet\n"];
}

if (password == "") {
	fejlbeskeder = ["Du skal udfylde password feltet\n"];
}

if (email == "") {
	fejlbeskeder = ["Du skal udfylde email feltet\n"];
}

console.log (fejlbeskeder);

//.................................................................


//Fix koden part 3
 function sammensaetTekst (forste, anden) {
 	return forste + anden;
 } //Fejlen var at der var sat gåseøjne rundt om arguments i funktionen og det samme nede i return. Hvis du fjerner gåseøjnene fra argumenterne men ikke nede i return vil den abre retunere "første" "anden" i stedet for Mickey Mouse

 var resultat = sammensaetTekst ("Mickey", "Mouse");

 console.log (resultat); // Forventede resultat: "Mickey Mouse"
