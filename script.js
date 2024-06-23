let btn=document.querySelectorAll(".row");
let inp=document.querySelector("input");
let string="";
let arr=Array.from(btn);
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            inp.value=eval(string);
        }
        else if(e.target.innerHTML=="AC"){
            string=""
            inp.value=string;

        }
        else{
            console.log(e.target);
            console.log(e.target.innerHTML);
            string=string+e.target.innerHTML;
            inp.value=string;
        }
        
    })  
});

