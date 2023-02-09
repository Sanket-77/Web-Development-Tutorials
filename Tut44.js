console.log("This is tutorial 44");

function greet(name, greettext = "Good morning"){
    console.log(greettext + " " + name)
    console.log(name + " is good boy");
}

function sum (a,b,c){
    let d = a + b+c;
    return d;
}

let name = "sanket"
let name1 = "prashant"
let name2 = "shubham"
let name3 = "sumit"
let greettext = "How are you"

greet(name,greettext);
greet(name1,greettext);
greet(name2);
greet(name3);

let m = sum(2,4,7);
console.log(m);


