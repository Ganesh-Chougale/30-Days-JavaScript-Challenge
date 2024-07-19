// Activity 1: Arithmetic Operators
const val1 = 100;
const val2 = 25;
// Task 1:
const Addition = (num1, num2) => num1 + num2;
console.log("Adttion is: ",Addition(val1, val2));
// Task 2:
const Subtraction = (num1, num2) => num1 - num2;
console.log("Subtraction is: ", Subtraction(val1, val2));
// Task 3:
const Multiplication = (num1, num2) => num1 * num2;
console.log("Multiplication is: ", Multiplication(val1, val2));
// Task 4:
const Division = (num1, num2) => num1 / num2;
console.log("Division is: ", Division(val1, val2));
// Task 5:
const Reminder = (num1, num2) => num1 % num2;
console.log("Reminder is: ", Reminder(val1, val2));

// Activity 2: Assignment Operator
let someNumber = 10;
// Task 6: Increament
console.log((someNumber += 3));
// Task 7: Decreament
console.log((someNumber -= 6));

// Activity 3: Comparision Operator
// Task 8: > & <
let lessOrGreat = (num1, num2)=>{
    if(num1>num2){
        return `${num1} is greater than ${num2}`;
    }else{ 
        return `${num2} is greater than ${num1}`;
    }
}
console.log(lessOrGreat(45,12));
// Task 9: >= & <=
let equalToLessOrGreat = (num1, num2)=>{
    if(num1 >= num2){
        return `${num1} is greater than or euqal to ${num2}`;
    }else{
        return `${num2} is greater than or euqal to ${num1}`;
    }
}
console.log(equalToLessOrGreat(45, 75));
// Task 10: == & ===
let doubleAndTripleEqualsTo = (num1, num2)=>{
    if(num1 === num2){
        return `${num1} & ${num2} have same value & data type`;
    }else if(num1 == num2){
        return `${num1} & ${num2} have same value but different data types`;
    }else{
        return `${num1} & ${num2} have different values`;
    }
}
let aVal = 47;
let bVal = 4+"7";
console.log(doubleAndTripleEqualsTo(aVal, bVal));

// Activity 4: Logical Operator
// Task 11: &&
let person = {
    isAdult: true,
    canDrive: true
}
let drivingLiecence = (obj) => {
    if (obj.isAdult && obj.canDrive){
        return `This person is elibible to have a driving liecence`;
    }else{
        return `This person is not elibible to have a driving liecence`;
    }
}
console.log(drivingLiecence(person));
// Task 12: \\
let shami = {
    playerName: "Shami",
    canBowl: true,
    canBat: false
} 
let kolhi = {
    playerName: "Kolhi",
    canBowl: false,
    canBat: true
}
let chetri = {
    playerName: "Chetri",
    canBowl: false,
    canBat: false
}
let cricketer = (obj)=>{
    if(obj.canBowl || obj.canBat){
        return `${obj.playerName} is a cricket player`;
    }else{
        return `${obj.playerName} is not a cricket player`;  
    }
}
console.log(cricketer(shami));
console.log(cricketer(kolhi));
console.log(cricketer(chetri));
// Task 13: !
let mod = {
    hasPermission: true
}
let user = {
    hasPermission: false
}
let admin = (obj)=>{
    if(!obj.hasPermission){
        return `The member is not a Admin`;
    }else{
        return `The member is a Admin`;
    }
}
console.log(admin(mod));
console.log(admin(user));

// Activity 5: Ternary Operator
// Task 14: ?
let xVal = 5;
let yVal = -4;
let numChecker = (num)=>{
    return (num<0) ? `The giver number is Negative` : `The Given Number is positive`;
}
console.log(numChecker(xVal));
console.log(numChecker(yVal));