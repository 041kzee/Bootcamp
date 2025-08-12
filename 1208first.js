 const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];

 //map questions
//1 
let g= students.map((elm)=> elm.name);
console.log(g);

//2
let k= students.map(({name , course})=> ({name , course}));
console.log(k);

//3
students.forEach(student  => {
    if(student.marks>=60){
        student.status = "pass";
    }
    else{
        student.status = "fail";
    }
});
console.log(students);

//4
let new1 = students.map((elm)=> elm.name + " - " + elm.course );
console.log(new1);

//5

students.forEach(student  => {
     student.marks = student.marks + 5;
});

console.log(students);


//filter questions 
//1
let cs = students.filter((ele)=> ele.course="Computer Science");
console.log(cs);

//2
let mark = students.filter((ele)=> ele.marks>80);
console.log(mark);

//3
let fees = students.filter((ele)=> ele.feesPaid= "false");
console.log(fees);


//4
let gg = students.filter((ele)=> ele.age>20).filter((ele)=> ele.marks>70);
console.log(gg);

//5
let gh = students.filter((ele)=> ele.course ="Mechanical").filter((ele)=> ele.marks<85);
console.log(gh);

//Reduce questions
//1

let bb1 = students.reduce((acc , num) => {
    return acc + num.marks}, 0);
    console.log("Total Marks=");
    
console.log(bb1);


//2
let ht = bb1/students.length;
console.log(ht);


//3
let counte = students.reduce((acc , student) => student.feesPaid ? acc + 1 : acc , 0);
console.log(counte);
console.log(students);








