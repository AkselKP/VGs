//Metode 1
/*var tallene = [3, 2, 6, 4, 10, 5];

function summer(sum, tall){
   // console.log("sum = " + sum); // Her kan du se hva som faktisk skjer
   // console.log("tall = " + tall);
    return sum + tall;
}

var total = tallene.reduce(summer);
console.log(total); */

//Metode 2
var tallene = [3, 2, 6, 4, 10, 5];

var total = tallene.reduce((sum, tall) => sum + tall);

var maks = tallene.reduce((maks, tall) => tall > maks ? tall : maks); // finner maks tallet fra lista

console.log(total);
console.log(maks);