
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
let america = "An American in Paris";
console.log( america.replace(/a|A/g, "*") );

// 6 uzd

console.log("------- 6 uduotis");
let breakf = "Breakfast at Tiffany's";
let odys = "2001: A Space Odyssey";
let life = "It's a Wonderful Life";

console.log( america.replace(/a|e|i|o|u|A|E|I|O|U/g, " ") );
console.log( breakf.replace(/a|e|i|o|u|A|E|I|O|U/g, " ") );
console.log( odys.replace(/a|e|i|o|u|A|E|I|O|U/g, " ") );
console.log( life.replace(/a|e|i|o|u|A|E|I|O|U/g, " ") );

// 7 uzd

console.log("------- 7 uduotis");

let num = " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1);
let starWars = "Star Wars: Episode "+ num + " - A New Hope";
console.log(starWars);
console.log(num);

// 8 uzd

console.log("------- 8 uduotis");
 let south = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
 let pietu = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

 console.log(south);
 const myArray = south.split(" ");
 let len = myArray.length;
 console.log(len);

    let min = 0;
      if (south[len] <= 5) {
        min++;
      }
    console.log(min);
 