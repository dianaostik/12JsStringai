
// 1 uzd

console.log("------- 1 uduotis");
const vardas= "Johnny";
const pavarde= "Depp";

if (vardas.length < pavarde.length ) {
    console.log("Trumpesnis yra: " + vardas);
}

if (vardas.length > pavarde.length ) {
    console.log("Trumpesnis yra: " + pavarde);
}

// 2 uzd

console.log("------- 2 uduotis");
let text1 = vardas.toUpperCase();
let text2 = pavarde.toLowerCase();
console.log(text1 + " " + text2); 

// 3 uzd

console.log("------- 3 uduotis");
let inicial = vardas.charAt(0) + pavarde.charAt(0);
console.log(inicial); 

// 4 uzd

console.log("------- 4 uduotis");
let letter = vardas.charAt(3) + vardas.charAt(4) + vardas.charAt(5) + pavarde.charAt(1) + pavarde.charAt(2) + pavarde.charAt(3);
console.log(letter); 

// 5 uzd

console.log("------- 5 uduotis");
