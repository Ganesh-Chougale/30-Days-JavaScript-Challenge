// Activity 1: For Loop
// Task 1: print numbers between 1 to 10
function numPrinter(num){
    for(i=1; i<=10;i++){
        console.log(i);
    }
}
numPrinter(10);
// Task 2: print table of 5
function tableOf(num){
    console.log("Table of", num);
    for(let i = 1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
tableOf(5);
// Activity 2: While Loop
// Task 3: calculate sum of 1 to 10
function numSumer(num){
    let result = 0;
    while(num<=10){
       result = result+num;
       num++
    }
    return result;
}
console.log(numSumer(1));
// Task 4: print number between 10 to 1
function reverseNumPrinter(num){
    while(num>=1){
        console.log(num);
        num--;
    }
}
reverseNumPrinter(10);
// Activity 4: Do While Loop
// Task 5: print numbers between 1 to 5
function anotherNumPrinter(num){
    do {
        console.log(num);
        num++
    } while (num<=5);
}
anotherNumPrinter(1);
// Task 5: calculate factorial number
function factorialNumber(num){
    let result=1;
    do{
        result=result*num
        console.log(result);
        num--
    }while(num>=1)
}
factorialNumber(5);
// Activity 4: Nested Loop
// Task 6: Pattern printing
function patternPrint(num){

}
patternPrint(5)