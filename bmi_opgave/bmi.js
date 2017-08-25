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

//--------------------------------------------

// function bmicalculator() {
//     var weightText = 170;
//     var heightText = 70;
//     var weight = parseInt(weightText.value);
//     var weight = parseInt (heightText.value);
//     height = height / 100;

// }if(){
//     var BMI = weightText/(heightText*heightText);
//     var resultMsg ="";
// }
// else if (BMI <19){
//     console.log(msg+"BMI score=" + BMI.toFixed(2) + "Underweight");
// } else if(BMI >=19){
//     console.log(msg+"BMI score=" + BMI.toFixed(2) + "Normal");
// }else if(BMI >=25){
//     console.log(msg+"BMI score=" + BMI.toFixed(2) + "Overweight");
// }else if(BMI >=30){
//     console.log(msg+"BMI score=" + BMI.toFixed(2) + "Huge Overweight");
// }else if(BMI >=40){
//     console.log(msg+"BMI score=" + BMI.toFixed(2) + "Giant");
// }
// console.log(resultMsg);


