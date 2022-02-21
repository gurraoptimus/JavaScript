let country = "Sverige";
let continent = "Europa";
let population = 1049381;

console.log("Jag bor i " + country + ".");

console.log(country + " ligger i " + continent + ".");

//console.log("Det bor " + population +" människor i " + country +".");


// ÖVERKURS 

var isElevenMillions = false;

if(population > 1100000){
    isElevenMillions = true;
}

if(!isElevenMillions){
    console.log("Det bor " + population +" människor i " + country +".");
} else if(isElevenMillions){
    console.log("Det bor mer än 10 miljoner i " + country);
}
