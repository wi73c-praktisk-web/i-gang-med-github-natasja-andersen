//EKSTRA STUFF
 var eurokurs = function (kurs) {
    return function (kroner){
        return kroner / kurs;
    }
}

var omregning = eurokurs (7.51);
console.log('kr', omregning (300).toFixed(2)); //100 bliver smidt ind i "kurs"
console.log('kr', omregning (600).toFixed(2)); //.toFixed(2) betyder at der kommer TO decimaler efter


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