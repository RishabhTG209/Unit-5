import "./index.css";



const logoimg = document.createElement("img");
logoimg.src="https://media.glassdoor.com/sqll/3235648/masai-school-squarelogo-1645792545584.png";
logoimg.classList.add("logo");

document.querySelector("#logo").append(logoimg);

let inputdiv=document.querySelector("#hey");
let count=0;

let arr=JSON.parse(localStorage.getItem("webpack"))||[];
showData(arr);
document.querySelector("#submitpart").addEventListener("click",function(){
    count++;

    let note = document.querySelector("#inputvalue").value;
    let obj={
        message : note
    };
    arr.push(obj);
    localStorage.setItem("webpack",JSON.stringify(arr));

    let data = JSON.parse(localStorage.getItem("webpack"))
    showData(data);
})


function showData(arr){
    inputdiv.innerHTML="";
    console.log(arr);
    arr.forEach((elem,index)=>{
        let number = document.createElement("p");
        number.textContent= index+1;
        number.classList.add("number");
        let note = document.createElement("p");
        note.textContent=elem.message;
        note.classList.add("note");
        
        let del = document.createElement("button");
        del.textContent="delete";
        del.addEventListener("click",function(){
            deleteData(elem,index)
        })

        let eachrow= document.createElement("div");
        eachrow.append(number,note,del);
        eachrow.classList.add("eachrow");
        document.querySelector("#hey").append(eachrow);    
    })
}


function deleteData(elem,index){
    arr.splice(index,1);
    localStorage.setItem("webpack",JSON.stringify(arr));
    showData(arr);
}