/*
console.log('Hello External JavaScript');
alert('Hi there');
var yourName = prompt('What is your name?');

        //Variables (Strings)
var name = 'John Solomon';
var age = 18;
console.log('My name is '+name);
console.log('I am '+age+' years old.');
document.getElementById('myInfo').innerHTML = 'Check Console for my details';
document.getElementById('yourInfo').innerHTML = 'Hello'+" "+yourName+" "+"i'm"+" "+name+" "+'nice to meet you';
//Numbers
var num1 = 6
var num2 = 8
addNums = num1+num2
subNums = num1-num2
divNums = num1/num2
multNums = num1*num2

        //Functions
function myFunction(){
    alert('My function in JavaScript');
}
//myFunction();
function greeting(){
    name = prompt('Hi there!What is your name')
    alert('Hello'+' '+name);
}
greeting(); 
//Functions with parameters
function mult(num1,num2){
    result = num1*num2
    alert(num1+' * '+num2+' = '+result)
}
mult(5,6) 

        //Loops (While and For)
//While Loop
console.log('While Loop')
num = 0;
while (num < 10){
    num+=1
    console.log(num)
}
//For Loop
console.log('For Loop')
for (let num2=1;num2<=10;num2++){
    console.log(num2)
}

        //Datatypes
let int = 1; // Basically integers/numbers 
let str = 'Two'; //Basically strings/alphabets
let obj = {'Three':3,'Four':4}; //Basically objects[they are dictionaries in Python]
let bool = True; //Basically booleans (True(anything apart from 0) or False(0))
let array = ['five','six','seven'] //Basically arrays [they are lists in Python]
let random;
let nul = null; //Basically nulls - they are no values

        //Strings and string manipulation
let fruit = 'Banana';
let fruits = 'Apple\nOrange\nGrape'
fruitLength = fruit.length; // This returns- 6
fruitsSlice = fruits.slice(0,5); //This returns- apple
fruitReplace = fruit.replace('Banana','Berry'); //This returns- Berry
fruitToUpper = fruit.toUpperCase(); //This returns- BANANA
fruitToLower = fruit.toLowerCase(); // This returns- banana
fruitsSplit = fruits.split(' ') // This returns- Apple (\n) Orange (\n) Grape  [\n-means it goes to the next line]
//alert(fruitsSplit);

        //Arrays
let fruits = ['Grape','','Orange','Apple','Lemon']
let spices = ['Tomatoe','Pepper','Onions','Ginger']
let fruitsCounts = [0.99,0.50,0.13,1.43]
let nums = [2,8,1,3,10,21,4]
fruits[1] = 'Banana'
alert(fruits[1]) // This returns- Orange
console.log('Fruits in my Array')
for (let f=0, n=1; f<fruits.length,n<fruits.length; f++,n++){
    console.log(n+'.'+' '+fruits[f])
} // This returns 
fruitsLength = fruits.length;
fruitsJoin = fruits.join(' * ')
fruitsPop = fruits.pop()
fruitsShift = fruits.shift() // This removes- Grape
fruitsUnshift = fruits.unshift('Kiwi') // This inserts Kiwi in the first index of fruits
fruitsConcat = fruits.concat(spices)
numsSort = nums.sort()
numsReverse = nums.reverse()
console.log(fruitsPop)

        //Objects
let student = {
    fName:'John',
    lName:'Solomon',
    age:18,
    language:'English',
    studentInfo:function() {
        return this.fName+' '+this.lName+' is '+this.age+' years old.'
    }
}
console.log(student.studentInfo()+' He speaks '+student.language)


        //Conditional Statement
    //If else Statements
alert('Voting Eligibility')
var name,age;
name = prompt('Enter your name')
age = prompt('Hello '+name+' enter your age')
if (age<=17){
    status = 'You are not eligible to vote and be voted for'
    console.log(status)
}else if (age >= 18){
    status = 'You are eligible to voteand be voted for'
    console.log(status)
}else{
    status = 'Invalid age'
    console.log(status)
}
        //Switch Statements
    //Switch Statements
dayOfWeek = prompt('Enter any day of the week');   
switch(dayOfWeek){
    case sunday:
        text = 'Weekend';
        break;
    case saturday:
        text = 'Weekend';
        break;    
    case friday:
        text = 'Weekend';
        break;
    case thurday:
        text = 'Weekday';
        break;
    case wednesday:
        text = 'Weekday';
        break;
    case tuesday:
        text = 'Weekday';
        break;
    case monday:
        text = 'Weekday';
        break;
    default:
        text = 'Wrong day of the week'
}
console.log(text);

        //JSON
    console.log('check learnJSON.json');
*/