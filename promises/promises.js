// // var firstPromise = new Promise(function (resolve, reject) {
// //     resolve('success');
// //  });
 
// //  firstPromise.then(function (successMessage) {
// //     console.log(successMessage);
// //  });

//  var secondPromise = new Promise(function (resolve, reject) {
//     // her kunne der være masser af kode der skulle udføres
//     // og derefter afsluttes med at resolve eller reject
//     // alt efter om alting lykkedes eller ej
//     if (true) {
//        resolve('success');
//     } else {
//        reject('Det var ikke en succes');
//     }
//  });
 
//  secondPromise.then(function(successMessage) {
//     console.log(successMessage);
//  }).catch(function(errorMessage) {
//     console.log(errorMessage);
//  });

//---------------------------------------

function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          if (someBoolValue) {
             resolve('Booting up system...'); //(Denne besked kommer fra "resolve)
          } else {
             reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
          }
       }, 2000);
    })
 }
 
 thirdPromise(true)
    .then((success) => {
       console.log(success);
       //throw new Error('lad os sige noget gik galt!');
       return 'Virus spotted...';
    }).then((nextSuccess) => {
       console.log(nextSuccess);
    }).catch((error) => {
       console.log(error);
    })

    function fourthPromise(someBoolValue2) {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
              if (someBoolValue2) {
                 resolve('Attacking system...'); //(Denne besked kommer fra "resolve)
              } else {
                 reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
              }
           }, 5000);
        })
     }
    
     fourthPromise(true)
     .then((success) => {
        console.log(success);
        //throw new Error('lad os sige noget gik galt!');
        return 'Shutting down...';
     }).then((nextSuccess) => {
        console.log(nextSuccess);
     }).catch((error) => {
        console.log(error);
     })