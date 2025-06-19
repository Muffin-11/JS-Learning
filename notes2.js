// // loops in javascript
// // var arr= [1,2,3,4,5,6,7,8];
// // console.log(arr);
// // for(var i =0;i<arr.length;i++){
// //     if (i==2){
// //     break;
// //     continue;
// // }
// // console.log(arr[i]);
// // }


// // arr.forEach(function(element){
// //     console.log(element)
// // })

// // let j=0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }


// // do{
// //     console.log(arr[j])
// //     j++;
// // }while(j<arr.length);

// let myarr=["fan","camera",34,null,true];
// // array methods
// console.log(myarr.length);
// // myarr.pop();
// // myarr.push("sarthak");
// // myarr.shift();
// // myarr.unshift("harry");
// // console.log(myarr.unshift("harry"));
// // console.log(myarr);


// // let saru=["sarthi","sushila","sunita","sheila","boogie"];
// // saru.toString();
// // console.log(saru);
// let d=[1,56,89,2,12,90,4643,356,38];
// d.sort();
// console.log(d); 


// //String methods
// let mystring="kareem is a good boy good good";
// // console.log(mystring.length);
// // console.log(mystring.indexOf("good"));
// // console.log(mystring.lastIndexOf("good"));
// console.log(mystring.slice(0,3));
// d=(mystring.replace("kareem","rohan"));
// d=d.replace("good","bad");
// console.log(d,mystring);




// let mydate=new Date();
// console.log(mydate);



// //DOM Manipulation 
// let elem=document.getElementById('click');
// console.log(elem);
// let elemclass=document.getElementsByClassName('container');
// console.log(elemclass);
// // elemclass[0].style.background=yellow;
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");



// console.log(elem.innerHTML);
// console.log(elemclass[0].innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerText);
// tn=document.getElementsByTagName('div');
// console.log(tn);

// createdElement=document.createElement('p');
// createdElement.innerText="this is a created para";
// tn[0].appendChild(createdElement);


// createdElement=document.createElement('b');
// createdElement.innerText="this is replaced from para";
// tn[0].appendChild(createdElement2, createdElement);
// // removeChild(element)-----> removes an element



// // selecrting using query
// sel=document.querySelector('.container')
// console.log(sel)
// sel=document.querySelectorAll('.container')
// console.log(sel)




function clicked(){
    console.log('the button was clicked')

}
window.onload=function(){
    console.log('the document was loaded')
}
// // events in javascript
firstcontainer.addEventListener('click',function(){
console.log('clicked on the container')
})


firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
    console.log('clicked on the container')
    })
    




// firstcontainer.addEventListener('mouseover',function(){
// console.log('mouse on container')
// })
    
// firstcontainer.addEventListener('mouseout',function(){
// console.log('mouse out of container')
// })


// firstcontainer.addEventListener('mouseup',function(){
// console.log('mouse up when clicked on container')
// })
    
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
//     console.log('mouse down when clicked on container')
// })
    

// arrowfunctions
// function sum(a,b){
//     return a+b;
// }
sum=(a,b)=>{
    return a+b;
}


logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired</b>"
    console.log("i am your log");
}
// set time out and set time interval
setTimeout(logkaro,5000);
setInterval(logkaro,5000);

// use clearInterval(clr) /clearTimeout(clr) to cancel setInterval /setTimeout
clr=setInterval(logkaro,5000);
clr=setInterval(logkaro,5000);


// javascript localStorage
// localStorage.setItem('name','harry')
// localStorage
// localStorage.getItem('name')


// JSON
obj={name:"harry", length:1}
jso1=JSON.stringify(obj)
jso2=JSON.stringify(typeof obj)
console.log(jso1)
console.log(jso2)
parsed=JSON.parse({"name":"harry","length":1})
console.log(parsed);






















































































































