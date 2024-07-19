// Activity 1: If-Else Statement
// Task 1: positive, negative or zero
let randomNum1 = 1;
let randomNum2 = -1;
let randomNum3 = 0;

let checknum = (num)=>{
    if (num>0){
        return `Given number ${num} is positive number`;
    }else if(num<0){
        return `Given number ${num} is negative number`;
    }else{
        return `Given number ${num} is zero`;
    }
}
console.log(checknum(randomNum1));
console.log(checknum(randomNum2));
console.log(checknum(randomNum3));
// Task 2: person eligible to vote?
let arun = {name: "Arun", age: 54}
let rahul = {name: "Rahul", age: 14}

let canVote = (person)=>{
    if(person.age>=18){
        return `${person.name} is eligible to vote`;
    }else{
        return `${person.name} is not eligible to vote`;
    }
}
console.log(canVote(arun));
console.log(canVote(rahul));
// Activity 2: Nested If-Else Statement
// Task 3: find the largest of 3 number
let largestFinder = (num1, num2, num3)=>{
    if(num1>num2 && num1>num3){
        return `${num1} is largest number here`;
    }else{
        if(num2>num3){
            return `${num2} is largest number here`;
        }else{
            return `${num3} is largest number here`;
        }
    }
}
console.log(largestFinder(9,12,14));
// Activity 3: Switch case
// Task 4: based on number (1-7), tell which weekday is it
let whichWeekDay = (day)=>{
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
            default:
                return "Enter number between 1 to 7";
    }
}
console.log(whichWeekDay(5));
console.log(whichWeekDay(3));
// Task 5: give grades A,B,C,D,F based on score
let whatGrade = (score) => {
    switch (true) {
        case score >= 80:
            return "A Grade";
        case score >= 60:
            return "B Grade";
        case score >= 50:
            return "C Grade";
        case score >= 35:
            return "D Grade";
        default:
            return "F Grade";
    }
};
console.log(whatGrade(68));
console.log(whatGrade(32));
// Activity 4: Conditional (ternary) Operator
// Task 6: Even or Odd number
let evenOrOdd = (num)=>{
    return (num%2===0) ? `${num} is a Even Number` : `${num} is a Odd Number`;
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(12));
// Activity 5: Combining Conditions
// Task 7: Leap Year
