
var s="hi";
console.log(s);
console.log(!!typeof s);
console.log(10+"20")  //1020
console.log(9-"5") //4
console.log("java"+"script") //javascript
console.log(""+0)  // 0
console.log("rishita"-"saha")  //NAN
console.log(true+true) //2
console.log(true+false)//1
console.log(false+true)//1
console.log(false-true)//0-1 //-1

//---------------------------------
//interview qts
//null vs undefined

var nu=null;
console.log(nu);  //null indicates absence 
                  //for a value for a  variable . 2)its a object itself-bug  3) 

var und;    //indicate absence of variable itself

var phno=18883;
var name="ris";
console.log(isNaN(phno)); //false
console.log(isNaN(name)); //true

console.log(NaN===NaN) //false


// NAN===NAN
// Number.NAN===NAN;
// isNaN(NAN);
// isNaN(Number.NAN);
// Number.isNAN(NaN);

console.log(Number.NaN===NaN)//false
console.log(isNaN(NaN))//true
console.log(isNaN(Number.NaN));//true
console.log(Number.isNaN(NaN));//true

let num=2;
let newnum=num++;
console.log(num);
console.log(newnum);

console.log(3**5); //3^5=3*3*3*3*3=81
console.log(10**-1);//1/10

//swap
let a=5;
let b=10;

a=a+b;
b=a-b;
a=a-b;
console.log(a,b);

//
let year=2029;

// if((year%4===0) && (year%100!==0) ||(year%400==0))
// {
//    console.log("leap year");
// }

// else
// {
//     console.log("not a leap year"); 
// }


//-----------------

if(year%4===0)
{
if((year%100===0))
{
  if((year%400==0))
  {
    console.log("leap year");
  }
  else
  {
    console.log("not a leap year"); 
  }
}
else
{
    console.log("leap year"); 
}

}

else
{
    console.log("not a leap year"); 
}


//function

function sum(a,b) //parameter are names listed in the function's defination 
{
   
    var sum1=a+b;
    return sum1;
} 
console.log(sum(10,2));  //arguments are real values passed to function

//function expression
//create a fun and put it into variable

var funexp=sum(2,88);
console.log(sum);

//anonymous fun fun withouth name;

var fun=function(c,d)
{
    return total=c+d;
}
var tot=
fun(5,7);
console.log(tot);

//ECMA SCRIPT

//1996----js created
//1997------submitted to ecma international---ECMASCRIPT
//2015-----ES6 decide to relaese new updtae ECMASCRIPT
//"usestrict mode"--2014

//ES6 launched in 2015 6th version

// 1. let and const
// 2.template string
// 3.default argumnets 
// 4.rest controller  
// 5.destructing 
// 6.object properties
// 7.arrow 
// 8. spread


//var=>function  scope  let and const=>block scope


function biodata()
{
    var name="thapa";
    console.log(name);

    if(true)
    {
        var lastname="techn";
        console.log('inner'+lastname);
        console.log('inner'+name);
    }
   // console.log('innerOuter'+lastname);

}
biodata();

function biodata()
{
    let name="thapa";
    console.log(name);//thapa

    if(true)
    {
        let lastname="techn";
        console.log('inner'+lastname);//inner techn
        console.log('inner'+name);//inner thapa
    }
 //   console.log('innerOuter'+lastname);//error

}





//........TEMPLATE LITERALS............
  //to get variable use ${}
for(let n=1;n<=10;n++)
{
    let table=12;
    console.log(`${table} * ${n}= ${table*n}`);

}

//....default parameter....
//--------1-------------------

function mul()
{
    return a*b; //nan
}
console.log(mul(3,9));  //27


//------------2---------------


function mul(a,b=5)
{
    return a*b; 
}
console.log(mul(3));  //15
//-----------------3-----------------
function mul(a,b=5)
{
    return a*b; 
}
console.log(mul(3,2));//6


//FAT ARROW FUNC

// const square=()=>
// {

// return `the square of the two number ${(a=5)*a}`;
// }
//simplifed into

const square=()=>`the square of the two number ${(a=5)*a}`;

console.log(square());

///ARRAY are protype of this class

var myfriends=['riya','arun','vishal','om','raj']
//traversal
console.log(myfriends[0]); //first
console.log(myfriends[myfriends.length-1]); //last ele

for(let v=1;v<=myfriends.length-1;v++)
{
    console.log(myfriends[v])
}

for(let ele in myfriends)  //for-in
{
    console.log(ele);  //gives indexes of arary
}

for(let ele of myfriends)  //for-of
{
    console.log(ele);  //gives indexes of arary
}

//for-each
myfriends.forEach(function(elements,index,array)
{
console.log(elements+ " index : "+index);
}); //callback function calls a function for each element in array

myfriends.forEach((ele,ind,arr)=>console.log(ele+"  name"))  //fat

//crud
const anim=['pig','goat','sheep']
//push
const c=anim.push('hen','cat');  // add element to end of array return new length
console.log(anim);
console.log(c); //5


//unshift

const c1=anim.unshift('hen','cat');  // add element to start of array return new length
console.log(anim);
console.log(c1); //5


//pop
const c2=anim.pop();  // delete element from end of array return deleted element and chnge length of array
console.log(anim);//6
console.log(c2);


const c3=anim.shift();  // delete element from start of array return deleted element and chnge length of array
console.log(anim);//6
console.log(c3); 
//splice
//sol1

const months=['jan','march','april','june','july'];
const newMonth=months.splice(months.length,0,"dec");
//const newMonth=months.splice(5,0,"dec");
console.log(months);
console.log(newMonth);  //it just shows how many no is deleted returns empty aeeay 


//update
const indexofmonth=months.indexOf('march')
if(indexofmonth!=-1)
{
    const updateMonth=months.splice(indexofmonth,1,'March');
    console.log(months);
}
else
{
    console.log('no such element found');
}


//del june from array
const indexofmonth1=months.indexOf('june')
const del=months.splice(indexofmonth1,1);
console.log(months);
console.log(del);


//------------------------------map------------doesnt mutates original array
const array1=[1,4,9,16,25];
array1.forEach((ele,ind,arr)=>console.log(ele>9))

let newArr=array1.map((currEle,ind,arr)=>
{
    return currEle>9;
})

console.log(newArr); 

let newArr1=array1.map((currEle,ind,arr)=>
{
    return `Index no =${ind} and value is ${currEle} belong to arr ${arr}`
})

console.log(newArr1);



//challengeTime

let ar=[1,2,3,4,5,6];
let arSq=ar.map((cuEle)=>
{
    return ` the square${Math.sqrt(cuEle)}`;
  
})
console.log(arSq);

let ar2=[2,4,6,8];


let filterarray=ar2.map((c)=>
c*2).filter((c)=>c>10);
console.log(filterarray);

// let arSq1=ar.map((cuEle)=>
// {
//      return cuEle*2;
// }).filter((cuEle)=>
// {
// return cuEle>10
// })
// console.log(arSq1);


//==========REDUCE===========
//.................................................................................................
//flatten an array means to convert the 3d or 2d array into single dimension array
//gives single output value
//Accumalator,currentvalue,,currentindex,source array

let b1=[4,2,3];
let sum2=b1.reduce((accumulator,currentele,index,arr)=>
{
    return accumulator+=currentele

})
console.log(sum2)

let filterarray1=ar2.map((c)=>
c*2).filter((c)=>c>10).reduce((acc,c)=>acc+=c);
console.log(filterarray1);

//flat arary
const TwoDarray=[
    ['blue',2],['green',72],['red',1],['yellow',0],
];
let flatarr=TwoDarray.reduce((acc,ele)=>
{
    return acc.concat(ele);
})
console.log(flatarr);


//-----------------STRING----------------

//====escape character===

//  

let s1="abc";
let s2='abcde';
//making string using string constructor
let s3=new String("uuu");  //[String:uuu];
 let s4='Rishita Saha';
 let s5='Welcome, to Complete JavaScript Tutorial for "Beginners" in Hindi in 2023';
 console.log(s5)

 let s6="Welcome, to Complete JavaScript Tutorial for \"Beginners\" in Hindi in 2023";
 console.log(s6)

 //indexof

 let s7="i am rishita saha"
 console.log(s7.indexOf("a"));//2
 console.log(s7.indexOf("a",12)) //14

 let s8='i am thapa technical';
 console.log(s7.search(s8)) ;

 // slice(start,end-1)  //cut two parts returns extracted part
 //substring(start,end)----negative index not allow
 //substr(start,length)-------//it doesnt give negerive value

 var str1="apple,banana,kiwi,orange,guava";
 console.log("-----------slice   -----") 
 console.log(str1.slice(6,12)) //banana
 console.log("-----------substring   -----") 
 console.log(str1.substring(6,12)) //banana
 console.log("-----------slice   -----") 
 console.log(str1.slice(6,-6))  //banana,kiwi,orange
 console.log("-----------substring   -----") 
 console.log(str1.substring(6,-6)) //apple,

 console.log("-----------substring   -----") 
 console.log(str1.substring(0,5))  //apple

 console.log(str1.substring(13,-6)) //apple banana
 console.log(str1.substr(-5))
//to axcess data from backwards use substr  


 //display only 280 characters of a string like twitter

 let actualTweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem veritatis nemo voluptate explicabo maiores doloribus, blanditiis sapiente, placeat sint natus facilis quas pariatur quidem veniam ea. Ratione dicta deserunt corporis beatae numquam maxime ad dignissimos cumque dolore molestias cupiditate alias quibusdam, ea distinctio eveniet odio cum ullam similique tempora! Corrupti fuga dicta sequi iste, dolorum incidunt reprehenderit, nisi perferendis recusandae, ex in excepturi? Impedit tempora sequi voluptatibus et, animi tempore aliquid esse nostrum, laudantium illum aliquam officiis minus suscipit iure, maxime modi atque quibusdam nihil ut optio repellendus magni? Enim illum quam soluta inventore, aliquam facere a expedita ratione eligendi quibusdam perspiciatis eum nemo, possimus omnis incidunt totam esse consequuntur? Animi dolorem et maxime magnam quaerat odit nulla molestiae ut tempora, illum necessitatibus neque, odio ratione ipsum beatae, non numquam veritatis architecto dicta eum incidunt! Pariatur amet dicta aliquam optio! Voluptatibus, excepturi dolorem voluptates modi eveniet quae! Facilis incidunt facere ea! Sequi error culpa non perferendis modi, laudantium dicta repellat illum autem pariatur aspernatur tenetur mollitia cum aliquam consectetur sit. Hic quas voluptatum quod ut doloremque sunt neque provident, eaque esse animi autem suscipit dignissimos harum inventore asperiores officia eum saepe expedita reiciendis quidem porro dolore sed fuga incidunt. Ullam voluptatem sequi quod placeat sapiente labore ex quam a recusandae accusamus ratione, est quasi dolorum incidunt qui doloribus perspiciatis. Quas harum illum dicta blanditiis ullam, quod unde magni reprehenderit eligendi, eaque ipsum magnam ab saepe odio distinctio placeat repellendus laudantium suscipit culpa eius, obcaecati quos. Voluptatibus adipisci dolor libero."

let moTweet=actualTweet.slice(0,200);
console.log(moTweet);
console.log(moTweet.length);



//replace()  // method replace only first match //case-sensitive
 let mybio="name is rishita sister of rishita";
 console.log(mybio.replace('rishita','Neha'));


 //=================

 let colors='red,yellow,blue,black'

 console.log(colors.slice(4,0))  //red,
 console.log(colors.substring(4,0))
 console.log(colors.substr(4,0))

//  console.log(colors.slice(-2))
//  console.log(colors.substr(-2))
//======================================================if start index >end index then two swapped======================
console.log(colors.substring(4,-1)) //output= red, this equivalent to(4,0) which in turn gives (0,4) as swapped
console.log(colors.slice(4,-1)) 
console.log(colors.substr(4,1)) //y
console.log("======================================================find()==================")

const price=[300,100,200,400,500,450,600];

const newp=price.find((c)=>
{
    return c>400;
})

console.log(newp)

console.log(price.find((ce)=>ce<400))

//       **************   find index*************
console.log(price.findIndex((ce)=>ce<400))

console.log("======================================================filter()======IT CREATES NEW ARRAY RETURN AN ARRAY AFTER FILTER if conditon doesnt support it fives empty array============")

const newprices=price.filter((elem,index)=>
{

    return elem<400;
})
console.log(newprices)


console.log("============sort array================")

const months1=["march","jan","feb","april","dec"]

console.log(months1.sort())

const nos=[6,7,2,1,8,99,20]

nos.sort(function(a,b){
    return a-b;
})  //ascending order



nos.sort(function(a,b){
    return a-b;
})  //descending order  


//return unicode of last character


let str2="hello";
console.log(str2.charAt(0));  //h

console.log(str2.charCodeAt(0));//104

console.log(str2.charAt(str2.length-1));

//property axcess es6 allows [] property axcess on string

//split() method to convert string into arary

let txt="a b c d";

console.log(txt.split(","))
console.log(txt.split(""))
console.log(txt.split("|"))

//=========================================date and time object============


  // 4 ways  to create date object
new Date();   //created with date constructor
let todydte=new Date();
console.log(todydte);
console.log(new Date().toLocaleString());

console.log(new Date());
console.log(new Date().toString());


 new Date(1111111111111111);

console.log(Date.now())//miliseconds since jan 1 1970
//let d =new Date(year,month,date,2,2,2);
let d =new Date(2022,2,14,2,2,2);
console.log(d.toLocaleString())

let d1 =new Date(2022,2);console.log(d1.toLocaleString())

let d2=new Date("March 11 ,2011,11:12:22")
console.log(d2.toLocaleString());



//set method

let cutime=new Date();
//console.log(cutime.setTime())
console.log(cutime.setHours(8))
console.log(cutime.setSeconds(7))
console.log(cutime.setMinutes(5))

function currTime()
{
    var t=new Date();
    t.setHours(11);
    t.setMinutes(11);
    t.setMilliseconds(11);
    t.setSeconds(11);
document.getElementById("time").innerHTML=t;

}

function clock()
{
    setInterval(()=>
    {
       let d=new Date().toLocaleString;
       document.getElementById("clock").innerHTML=d; 
    },1000)
}


// absoulute
console.log(Math.abs(-77))
console.log(Math.abs(6-88))

//ceil-- always increment

console.log(Math.ceil(4.31))
console.log(Math.round(4.31))

//floor --always base value

console.log(Math.floor(4.8))
console.log(Math.random()) /// always give ransom no which is less than 0
console.log(Math.random()*10)   //0 to 10
console.log(Math.floor(Math.random()*10))  

//truncate trun() only give integer part of number

console.log(Math.trunc(4.8)) //similar to math.floor in positive

console.log(Math.trunc(-4.8)) //similar to math.ceil in negetive



//window.location

//window.history
//window.frames

function goback()
{
    window.history.back();
}
//******************************************nrsted object   ***** */

var info={
            id:101,
            email:"abc@gmail.com",
            address:
            {
                street:709,
                city:"kol"
            }

}

console.log(info.address.city)


//***********************HOSTING**************************88 */

hello();  //gives error hello not defiined sp defined it

function hello()
{
    console.log("hello");
}

var x;//declaration
console.log(x);  //undefined
x=8;//assignment



x1=8;//assignment
var x1;//declaration
console.log(x1);  //undefined

x1=8;//assignment
console.log(x1);  //undefined
var x1;//declaration


console.log(x1);  //undefined
var x1=9;//declaration



//========================DOM====================
// const changecontent=()=>
// {
//    document.getElementById('a').innerHTML="welcome to Rishita,software engineer "
// }

function changecontent()
{
//    document.getElementById('a').innerHTML="welcome to Rishita,software engineer "

   const head=document.getElementById('a');
   head.innerHTML="welcome";

//    consoole.log(document.getElementsByName('gender '));

}


//3 rd way of writing function event

const thirdWay1=document.getElementById('thirdWay');

// thirdWay1.onClick=function()
// {
//     alert('most common way to write func');
// }

// //4th way
// const fourthway=document.querySelector('#fourway');
// fourthway.addEventListener('click',()=>
// {
//     alert('i love this way');

// })

function mouseDown()
{
document.getElementById("myp").style.color="blue";
}

function mouseup()
{
    document.getElementById("myp").style.color="red";
}

const menter=document.getElementById("box");

// menter.addEventListener('mouseenter',()=>
// {
//     menter.style.backgroundColor="red";
//     console.log("mouse enter")
// })

// menter.addEventListener('mouseleave',()=>
// {
//     menter.style.backgroundColor="green";
//     console.log("mouse leave")
// })

//r-----------------remove child element------------

// let parent=document.getElementById("menu");
// let ele=parent.firstElementChild;
// parent.removeChild(ele);


// let parent=document.getElementById("menu");
// let elm=parent.firstElementChild.nextElementSibling;
// parent.removeChild(elm);


//==============lexical scope=========

let a1="jey";

const first=()=>
{
    let b="how"
    const second=()=>
    {
        let c= "are you";
        console.log(a1+b+c)

    }
    second()
  
}
first();

//======================================CLOSURE SCOOPR========================

//combination of function bundles together enclosed with references to its suroounding states (lexical environment))

//givesa u axcess to outer function's scope from inner functio

//everytime functon is created a closure is created
//same as lexical scope
outerfun=(a)=>
{
    let b=10;
    const innerSum=()=>
    {
        let sum=a+b;
        console.log(`sum is ${sum}`)
    }
    innerSum();

}
outerfun(5);

//=====================
outerfun=(a)=>
{
    let b=10;
    const innerSum=()=>
    {
        let sum=a+b;
        console.log(`sum is ${sum}`)
    }
    return innerSum;

}
let nclosure=outerfun(5);
console.dir(nclosure);

//   asynch


//=========================================EVENT LOOP=====

const fun2=()=>
{
    setTimeout(()=>
    {
        console.log("fun 2 is starting");
    },2000);
}

const fun1=()=>
{          
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is starting");
}

fun1();

//output of sum(5)(3)(6)  // currying a techniqye of evaluating a function with multiple arguments into sequence of function with single argument

//CURRYING==Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
sum(5)(3)(8)
function sum(num1)
{
    console.log(num1);
    return function(num2)
    {
        console.log(num1,num2);
        return function(num3)
        {
            console.log(num1+num2+num3);
        }
    }
}

const sendReq = greet => name => message =>
console.log(`${greet} ${name}, ${message}`)
sendReq('Hello')('Harry')('Can you please add me as your connection on LinkedinIn?')





//CALLBACK HELL

var js = (
    function(x) 
{
    console.log
    (x*x)
    return x*x;
}
(10));