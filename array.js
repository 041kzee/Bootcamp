let a = [1,2,3,4,5,6,7,8,9,10];

let b = a.map((el) =>
{
    console.log("2x",el,"=", el*2);
    
}
);
const fetchData=async()=>{
    try{
        //successful case
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
 const response1=await fetch("https://jsonplaceholder.typicode.com/users");
 const response2=await fetch("https://jsonplaceholder.typicode.com/users");
        if(response1.ok) {
            const data = await response.json();
            console.log(data);
        }
if(response.ok===true){
    const data=await response.json();
    console.log(data);
}

if(!response.ok || !response1.ok || !response2.ok){
    throw new Error("something is wrong");
}
    }catch (err) {
        console.log("Error",err);

    }
};
fetchData();