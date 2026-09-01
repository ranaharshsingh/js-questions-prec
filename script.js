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
