// create a fnc that add two  no and return sum;

function add(a,b){
    return a+b;
}
let ans = add(1,2);
console.log(ans);

// write a function with a default parameter name = "guest " that prints "hi <name>"
function greeting (guest = "guest"){
   console.log(` hi ${guest}`);

}
greeting();

// use rest parameters to make a function that adds   unlimited numbers;
function addUlimited(...nums){
    let sum=0;
    nums.forEach(function(val){
        sum=sum+val;
    });
    console.log(sum);
}
addUlimited(1,2,3,4,7,9,5,6);

// create an IIFE that prints "I run instantly!"; immidiately invocked function expression

(function(){
    
})

//make a nested function where the inner one prints a variable from the outer one; ie closure
function parent(){
    let a = 12;
    function child(){
        console.log(a);
    }
    child();
}
parent();

// create an array of 5 fruits. add one at the end and remove one from the beginning;
let arr=["apple","guava","grapes","mango","banana"];
arr.push("pear");
arr.unshift("orange");

// create an object with key value pairs and print each value;

let obj={
    name:"harsh",
    class:"five",
    city:"ranchi"
};

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}

// write a  higher-order function runtwice(fn) that takes another function and executes it two times;

function runTwice(fn){
    fn();
    fn();
}
runTwice(function(){
    console.log("hello");
});

// create one pure fnc that always returns the same output for given input, and one impure function using a global variable;

function abcd(a,b){
    console.log(a+b);
}

abcd(2,3);
abcd(2,3);

let global=0;
function impure(a){
    console.log(global++);
    console.log(global+a);
}

impure(3);
impure(2);

// write a fnc that uses object destructing inside parameters to extract and print name and age;
function xyz({name,age}){
    console.log(name,age);
}

abcd({name:"harsh",age:"20"});

// demonstrate the difference btw normal fnc and arrow fnc when used as object mtd(this issue);
let objj={
    name:"harsh",
    title:"sharam",
    age:20,
    fnc1:function abc(){
        console.log(this);
    },
    fnc2:()=>{
        console.log(this);
    }

}

let obj2={              // this is the correct way;
    name:"harsh",
    age:20,
    fnc:function abc(){
        console.log(this);
        fnc:()=>{
            console.log(this);
        }
    }
}

// given an array of numbers, use map() to create a nuw array where each number is squared.
let arr1=[1,2,3,4,5];
let newarr=arr.map(function(val){
    return val*val;
});
console.log(newarr);

// use filter() to get only even numbers from an array.

let arr3 = [1,2,3,4,5,6,7,8];
let newarr2=arr.filter(function(val){
    return val%2 !==0;
});

// use reduce () to find the total salary from an arrau of numberrs [ 1000,2000,3000];
let salary=[1000,2000,3000];
let newarr3= arr.reduce(function(acc,val){
    return acc+val;
});

// create an array of names and use some() and every() to test a condition (e.g, all names longer than 3 chars).
let names = ["avi","harsh","nishi","avinya","pol","tol"];

let answ= names.every(function(val){  // same for some;
    return val.length>3;
});

// create an object user and test the behavior og object;
// freeze() and object.seal() by adding / changing keys;

let user={
    name:"harsh",
    age:20,

}
Object.freeze(user); // cant change the value ;
user.name="harshita";

Object.seal(user);
user.name="harsitA"; // can change but cant add new value;

// le

let obj4={
    user:{
        name:"harsh",
        address:{
            city:"bhopal",
        },
    },
};

let {city}=obj.user.address; // destructing

//                                 advance js oops

//get and set property

/* class animal {
        constructor(){
               this._age=12;
        }
        set age (val){
            if(val <0){
                console.error("error");
                return;
            }
                this._age=val;
                return this._age;
        }
        get age(){

            return this._age;

        }
    }        
}

let a1= new animal();
console.log(a1.age);

*/
function getpizza (){
    console.log("recived order for pizza :");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let allfine=true;
            if(allfine){
                resolve("pizza is almost to be ready!");
            }else{
                reject("unable to prepare because of material !!!");
            }
        },2000);
    });
};

async function  orderpizza(){
    console.log("order pizza ");
    try{
        let recive=await getpizza();

        console.log("recived successfully");
        console.log("recive");
    }
    catch(error){
        console.log(error);
    }
}

orderpizza();

function pizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Ready");
        }, 1000);
    });
}

async function order() {
    console.log("A");

    let result = await pizza();

    console.log("B");
    console.log(result);

    return "Done";
}

console.log("C");

let x = order();

console.log("D");

x.then((value) => {
    console.log(value);
});

console.log("E");

function getPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Pizza shop closed ❌");
        }, 1000);
    });
}

async function order() {
    console.log("A");

    try {
        let pizza = await getPizza();

        console.log("B");
        console.log(pizza);

    } catch (error) {
        console.log("C");
        console.log(error);
    }

    console.log("D");
}

console.log("E");

order();

console.log("F");

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    console.log("A");

    let data = await getData();

    console.log("B");
    console.log(data);
}

let promise = getData();

console.log("C");

showData();

console.log("D");

async function getUser() {
    console.log("A");

    let name = await Promise.resolve("Harsh");

    console.log("B");

    return name;
}

console.log("C");

let result = getUser();

console.log("D");

result.then((value) => {
    console.log("E");
    console.log(value);
});

function getUser() {
    return Promise.resolve("Harsh");
}

async function showUser() {
    console.log("A");

    let user = await getUser();

    console.log("B");

    return user;
}

console.log("C");

showUser().then((name) => {
    console.log("D");
    console.log(name);
});

console.log("E");

function stepOne() {
    console.log("1");
    return Promise.resolve("Done 1");
}

function stepTwo() {
    console.log("2");
    return Promise.resolve("Done 2");
}

async function process() {
    console.log("3");

    let a = await stepOne();

    console.log(a);

    stepTwo();

    console.log("4");

    let b = await stepTwo();

    console.log(b);

    console.log("5");
}

console.log("6");

process();

console.log("7");

function getData() {
    console.log("1");

    return Promise.reject("Failed");
}

async function test() {
    console.log("2");

    try {
        let data = await getData();

        console.log("3");
        console.log(data);

    } catch (error) {
        console.log("4");
        console.log(error);
    }

    console.log("5");
}

console.log("6");

test();

console.log("7");