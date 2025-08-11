
// function sum(var1, var2, var3){
//     let a = var1;
//     let b = var2;
//     let c = var3;
//     console.log("Inputs are",var1, var2, var3);
//     console.log("Product=", var1*var2*var3);
    
// }
// let ssum = (val1, val2) =>{
//     let x = val1;
//     let y = val2;
//     console.log("Sum=", x+y);
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = (a) =>{
//      a.map((el) => {
//         if (el % 2 ==0) {
//             console.log(`Even:${el}`);
            
            
//         }
        
// });
// }




// let table1 = (n) => {
//     a.map((el) => {
//         console.log(`${n} x ${el} =`, n * el);
//     });
// };

// let marks = (mark) =>{
//     if (mark>=90) {
//     console.log("You will get bike");
//     }
//     else if (mark>=80){
//     console.log("Party!");
//     }
//     else if (mark>=70)
//         {
//     console.log("Game");
//     }
//     else {
//         console.log("Nothing");
        
//     }
// }
// marks(89);
// marks(98);
// marks(76);
// marks(55);

// let dd=678;
// dd > 500 ? console.log("Number greater than 500"):console.log("Number lesser than 500")  ;

// let k = [1,2,3];
// let j = [1,3,4];
// console.log(k[0]==j[0]);
// console.log(k[1]===j[1]);

// let l = a.filter((ele)=> ele >=5).map((ele)=> ele*5);
// console.log(l);





// const aa=[0,0,0,0,0,0,0,0,0,0]

// let g= aa.map((elm, index)=>  elm + index+1).filter((elm) => elm%2==0).filter((elm)=> elm>=5).reduce((acc, cur, index)=> acc+cur);
// console.log(g);
// let e= aa.map((elm, index)=>  elm + index+1).filter((elm) => elm%2==1).filter((elm)=> elm>=5).reduce((acc, cur, index)=> acc+cur);
// console.log(e);




// //Tag Selectors
// let body= document.getElementsByTagName("h1");
// console.log(body[0]);

// //class Selector

// let classes= document.getElementsByClassName("a");
// console.log(classes[0]);

// //id selector
// let val9 = document.getElementById("val");
// console.log(val9);

// //queryselector
// let varr= document.querySelector(".a");
// console.log(varr);

// //queryselectorAll
// let as= document.querySelectorAll("#val");
// console.log(as[0]);

// // before accessing class you should define ,, its defined up

// let txt = classes[0].innerHTML;  //reads the content between that class tag
// console.log(txt);

// classes[0].textContent="COUNTER";

// //same thing u can do using queryselector
// let oo = document.querySelector(".kk"); // dot operator for query
// let pp = oo.innerHTML;
// console.log(pp);
 
// //let ghy=document.getElementsByTagName("button");
// //ghy[1].textContent="safari";
// //console.log(ghy[1]);

// //YOU CAN EVEN STYLE IT USING JAVA SCRIPT

// let tay = document.querySelectorAll("h1");
// console.log(tay);
// tay[0].style.color = "red";

// tay[0].classList.toggle("newClass");

// // adding a tag using js

// const ji  = document.createElement("h3"); //add tag
// ji.textContent = "ADDED FROM JS"; //add content
// const h3= document.getElementsByClassName("kk"); //position
// h3[0].appendChild(ji); //appending (can only be done in the end)
// h3[0].style.color = "blue";


// /*const div = document.createElement("div");
// const h2 = document.createElement("h2");
// h2.classList.add="newclassadd";
// h2.textContent= "Anything";
// div.appendChild(h2);
// document.body.appendChild(div);
// h2.style.color= "brown";*/



// /*const div = document.createElement("div");
// const button1 = document.createElement("button");
// button1.textContent="newincreement";
// const button2 = document.createElement("button");
// button2.textContent="newdecreement";
// const button3 = document.createElement("button");
// button3.textContent="newreset";

// div.appendChild(button1);
// div.appendChild(button2);
// div.appendChild(button3);

// document.body.appendChild(div);
// const button =document.getElementsByTagName(div);*/

// const img =document.createElement("img");
// img.setAttribute("src","https://media.istockphoto.com/id/1427517220/photo/carbon-neutral-and-net-zero-concept-natural-environment-a-climate-neutral-long-term-strategy.jpg?s=612x612&w=0&k=20&c=H091tXnWfRST4Ai_B7LgnWhaT9v5LXxAB3IFglj7nLQ=");
// img.setAttribute("alt", "kk");
// img.setAttribute("id", "Sample Image");
// img.setAttribute("width", "200");
// img.setAttribute("height", "200");


// //const img = document.createElement("img");
// //const source1 = document.createAttribute("src");
// /*const img = new Image(100, 200); // width, height
// img.src = "https://shorturl.at/1dSX2";
// document.body.appendChild(img);*/
// div.appendChild(img);

//START DECOMMENTING FROM HERE
const btn = document.getElementsByTagName("button");
const incbtn = btn[0];
const decbtn = btn[1];
const resetbtn = btn[2];
let val = 0;
let inc = true;
 let ab =() =>{
if (val>=10){
    inc = false;
}
}
const ppe = document.querySelector("#val");



const handle = (vall) => {
    if(inc){
    vall ? (val=val+1) : (val = val-1);
    val>=0? (ppe.style.color ="green" ) : (ppe.style.color = "blue");
    ppe.textContent = val;
    }
ab();
}
incbtn.addEventListener("click", () =>handle(true));
decbtn.addEventListener("click", () =>handle(false));

resetbtn.addEventListener("click", () => {
   
    val = 0;
    ppe.textContent = val;
    
    
});



//you can just call that function instead of defining it  as arrow function in the event listener
//it should be like  resetbtn.addEventListener("click", function_name); [no brackets needed]

var obj ={
    id : 4,
    Name : "Khatija Kaneez",
    Contact : "9632431346",
    personal_data : {
        address : {
            place : "Mangalore",
            pincode : "575001",

        },
        profession : "student",
    }
}
console.log(obj);
console.log(obj.Name);
console.log(obj.id);
console.log(obj.Contact);
console.log(obj.personal_data.profession);
console.log(obj.personal_data.address.place);
JSON.stringify(obj);
console.log(obj);

let array = [
    {clgid : 1 , noun : "paper", },
     {clgid : 2 , noun : "paper", },
      {clgid : 3 , noun : "paper", },
    
];
console.log(array);
array[1].noun= "Keyboard";

array.forEach((el)=> 
    
    console.log(el));

//  const g = array.map(el=>
//    {
//     return {
//         ...el,
//         clgid : el.clgid**2,
        
//     };
//    }
// );


//console.log(g);
const b = [0,0,0,0,0,0,0,0,0];
const h = b.map((el , index)  =>{
    // let n = el + index ; // you can print using variables too
    // const asd = index + n;
return {
    id : index,
    name : el + index,
    as : el + index+ index,
};
});
//.filter((el) => el.id % 2 ==0);
console.log(h);
let even = h.map((el , index, array)=>
{
  return el;  
}).filter((el)=> el.id % 2==0 && el.name % 2==0 && el.as% 2 ==0);
console.log(h);

console.log(even);
let odd = h.map((el , index, array)=>
{
  return el;  
}).filter((el)=> el.id % 2==1 || el.name % 2==1 || el.as% 2 ==1);
console.log(h);

console.log(odd);















