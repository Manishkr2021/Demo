let h1=document.querySelector("h1");
h1.addEventListener("click",function(){

    let n=prompt("Enter Any Number : ");
    if(n%2==0){
        prompt(n," is Even Number");
    }
    else{
        prompt(n," is Odd Number");
    }
});
