var hoejde = 210;
var vaegt = 60;
var resultat = vaegt/(hoejde/100*hoejde/100)
function bmi (){

    if(resultat <= 18.5){
       console.log("Din vægt er = undervægtig");
    }else if (resultat <= 24.9){
        console.log("Din vægt er = normal");
       
    }else if(resultat<=25){
        console.log("Din vægt er = overvægtig");
    }else if(resultat<=30){
        console.log("Din vægt er = fed");
    }else if(resultat>=40){
        console.log("Din vægt er = meget fed");
    }

}
bmi();