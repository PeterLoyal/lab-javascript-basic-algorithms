// Iteration 1: Names and Input
console.log("I`m ready");

let hacker1 = "The driver's name is Leal";
let hacker2 = "The navigator's name is Duarte";

// Iteration 2: Conditionals

let driverName = hacker1.slice(21);
let navigatorName = hacker2.slice(24);



let numOfCharDriver = driverName.length;
let numOfCharNavigator = navigatorName.length;


if( driverName.length > navigatorName.length){
    console.log("The driver has the longest name, it has " + numOfCharDriver + " characters");
} 
if(driverName.length < navigatorName.length){
    console.log("It seems that the navigator has the longest name, it has "+ numOfCharNavigator + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + numOfCharDriver + " characters!");
}


// Iteration 3: Loops

//3.1
for (let i = 0; i < driverName.length; i++) {
    console.log(driverName.toUpperCase()[i]);
    console.log(driverName.toUpperCase()[0]+ " " + driverName.toUpperCase()[1] + " " + driverName.toUpperCase()[2] + " " + driverName.toUpperCase()[3]);
}

//3.2

for(let i = navigatorName.length -1 ; i >= 0; i--){
    console.log(navigatorName[i]);   
}

//3.3

if (hacker1 > hacker2) {

    console.log (`The driver's name goes first.`)
  
} else if (hacker1 < hacker2) {

    console.log (`Yo, the navigator goes first definitely.`)
  
} else {

    console.log (`What?! You both have the same name?`)
}