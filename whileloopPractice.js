// Write a while loop that prints the numbers from 1 to 10.
let num=1;
while(num<=10){
    console.log(num);
    num++;
}
// Write a while loop that prints the even numbers from 2 to 20.
let num2=1;
while(num2<=20){
    if(num2%2===0){
        console.log(num2)
    }
    num2++;
}
// Write a while loop that calculates the sum of all numbers from 1 to 100.
let sum=0;
let num3=1;
while(num3<=100){
     sum+=num3;
     num3++;
}
console.log(sum);
// Write a while loop that prints the first 10 Fibonacci numbers.
console.log('hi')
let count=10;
let num1=0;
let anoNum=1;
while(count>0){
    console.log(num1);
   const nextNum=num1+anoNum;
   num1=anoNum;
   anoNum=nextNum;
   count--;
   }

// Write a while loop that finds the factorial of a given number.
let number=6;
let Product=1;
while(number>0){
     Product*=number;
     number--;
}
console.log(Product);

// Write a while loop that reverses a given string.
let word='hello';
let reversedString="";
let i=word.length-1;
while(i>=0){
    reversedString+=word[i]
    i--;
}
console.log(reversedString)

//Write a while loop that counts the number of vowels in a given string.
let countV= 0;
let wordV="helloa";
let arr=['a','e','i','o','u'];
let numV=wordV.length-1;
while(numV>=0){
    if(arr.includes(wordV[numV])){
        countV++;
    }
    numV--;
}
console.log(countV);

// Write a while loop that checks if a given number is prime or not.
let inpP=5;
let countP=0;
let check=Math.sqrt(inpP);

while(check>=2){
    if(inpP%check===0){
        countP++;
       
       }
        check--;
}
console.log( countP>0? "Num is not a Prime" : "Num is a Prime" );

// Write a while loop that generates a random number between 1 and 100 until it reaches a number greater than 90.
let randomVal=0;
while(randomVal<= 90){
    randomVal=(Math.floor(Math.random()*100))+1;
    console.log(randomVal);
}
// Write a while loop that prints the multiples of 3 from 1 to 30.

let numM=3;
let mul=1;
while(mul<=10){
    console.log(`${numM*mul}`);
    mul++;
}
// Write a while loop that finds the largest digit in a given number.
let numbe=458964;
let largestNum=0;
while(numbe>0){
    let nextN=numbe%10;
    if(nextN>largestNum){
        largestNum=nextN;
    }
    numbe=Math.floor(numbe/10);
   }
   console.log(largestNum);

// Write a while loop that calculates the factorial of a given number, but only for even numbers.
let numE=6;
let fac=1;
while(numE>0){
    if(numE%2===0){
        fac*=numE;
        }
        numE--;
   }
   console.log(fac);

// Write a while loop that counts the number of digits in a given number.
let numD=59868;
let countD=0;
while(numD>0){
    numD=Math.floor(numD/10);
    countD++;
}
console.log(countD);

// Write a while loop that prints the sum of the digits in a given number.
let numS=59868;
let sumS=0;
while(numS>0){
    sumS+=(numS%10);
    numS=Math.floor(numS/10);
}
console.log(sumS);
// Write a while loop that reverses the order of the digits in a given number.

let numR=59868;
let RevN='';
while(numR>0){
    RevN+=numR%10;
    numR=Math.floor(numR/10);
}

console.log(parseInt(RevN));

//  Write a while loop that reverses the order of the digits in a given number.(another logical way)
let numL = 59868;
let reversedNumber = 0;

while (numL > 0) {
  reversedNumber = reversedNumber * 10 + (numL % 10);
  numL = Math.floor(numL/ 10);
}
console.log(reversedNumber);
