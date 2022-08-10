/***********************************MODULE-->>16****************************************************/ 

/*
Practise Problem - 01;
Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
*/ 

const harryMomGivenTaka = 1000;
const costAppleOrangeTaka = 700;
const shopkeeperGivenTaka = harryMomGivenTaka - costAppleOrangeTaka ;
console.log(shopkeeperGivenTaka);

/*
Practise Problem - 02;
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
*/ 
 
const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;
const totalSubjectSum = Mathematics + Biology + Chemistry + Physics + Bangla;
const totalSubjectNumber = 5;
const calculateTheAverage = totalSubjectSum / totalSubjectNumber ;
console.log(calculateTheAverage.toFixed(2));

/*
Practise Problem - 03
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
*/ 

const firstText = "I am going to be " ;
const lastText = "an awesome Web developer." ;
const result = firstText + lastText ;
console.log(result);