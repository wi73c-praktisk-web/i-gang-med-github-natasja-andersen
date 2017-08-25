//ØVELSER - LØKKER, DEL 2

// øvelse 1: Opret et array med 8 navne, og løb igennem arrayet og udskriv hvert navn

var navne = ['Anders', 'Natasja', 'Hans', 'Marie', 'Mikkel', 'Thomas', 'Dorthe', 'Mathias'];
navne.forEach(function(item, index, arr){
    console.log(item);
})

//.................................................

//øvelse 2: Opret et nyt array denne gang med 4 forskellige musikkere, udskriv alle navne samt hvilken array position de har

var musik = ['AQUA', 'Beyonce', 'Rihanna', 'Abba'];
musik.forEach(function(item, index, arr){
    item[index+1];
    console.log(item + ' ' +index);
})

//.................................................

//øvelse 3: Opret et array med 10 forskellige tal, brug forEach til at løbe igennem og for hver værdi skal den fortælle om tallet er større end eller mindre end det næste element

var tal = [1, 5, 9, 7, 14, 25, 18, 29, 36, 45];
var counter = 0;
tal.forEach(function(item, index, arr){
    if(typeof tal[counter+1] == 'undefined'){
          console.log("Der er ikke flere tal i arrayet");
     }else{
    
    if(arr[counter] > arr[counter + 1]){
        console.log(arr[counter] + " er større end nummer " + arr[counter + 1]);
        arr[counter++];
    }else{
        console.log(arr[counter] + " er mindre end nummer " + arr[counter + 1]);
        arr[counter++];
    }
}
});