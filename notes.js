//1.ways to print in javasript
//console.log("hello world");
//alert("me");
//document.write("this is document write")
//2.Javascript console API 
//  console.log("hello world");
//  console.warn("this is warning");
//  console.error("this is an error");
//console.clear()

//3.javascript Variables
//what ara variables? containers to store data values
var number1=34;
var number2=56;
console.log(number1+number2);

//data types in javascript
//numbers
var num1="455"
var num2="567"
//string
var str1="this si a string";
var str1='string written in single code too';
//object
var marks={
    ravi:34,
    harsh:56,
    sameer:65,
}
    console.log(num1);
    console.log(marks);

//boleans
var a=true
var b=false
console.log(a,b);
//var und = undefined;
var und;
console.log(undefined);

var n = null;
console.log(n);

//two types of datatypes;
// 1.primitive datatype: undefined,null,number,string,boolean,symbol
// 2.reference datatype: arrays and operators
var arr=[1,2,3,4,5]
console.log(arr);


// operators in javascript
var a=34;
var b=67;
console.log("the value of a+b is",a+b);


//assignment operators
var c=b;
console.log(c);
c+=2;
console.log(c);
 

// comparison operators
var x = 12;
var y = 24;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);


// logical operators
// OR Operator
console.log(true||true);
console.log(false||true);
console.log(true||false);
console.log(false||false);



// AND Operator
console.log(true&&true);
console.log(false&&true);
console.log(true&&false);
console.log(false&&false);


// logical NOT Operator
console.log(!true);
console.log(!false);

// // function in javascript
// // DRY= Do not repeat yourself
function avg(a,b){
    return (a+b)/2;

}
c1= avg(4,6);
c2= avg(14,16);
console.log(c1, c2);

// conditionals in javascript
// if else statement
var age=34;
if (age>12){
    console.log('you are not  a kid');
}
else{
    console.log('you are a kid');
}


var age=41;
if (age>18){
    console.log('you can drink wine');
}
else{
    console.log('you cannot drink wine');
}



// single if statement
var age=43;
if(age>5){
    console.log('you can start using pen');
}
// else{
//     console.log('you should not use pen');

// }


// if else Ladder
if(age>45);{
    console.log('abhi toh bhot mje hai');
}
elseif(age>44);{
    console.log('bacche nhi rhe');
}
elseif(age>34);{
    console.log('ab sachme bade hogye');
}
elseif(age>30);{
    console.log('buddhe hogye');
}
console.log('end of ladder');



