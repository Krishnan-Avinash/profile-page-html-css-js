let button1=document.querySelector('.btn1');
let mains=document.querySelector('.twocontainer');
let button2=document.querySelector('.crossing');
let button3=document.querySelector('.btn2');
// console.log("class ist");
// console.log(mains.classList);

button1.addEventListener("click", ()=>{
    // mains.classList.add('active');
    mains.style.display="flex";
    mains.style.transition="display 0.3s linear 0s";
});   

button2.addEventListener('click',()=>{
    // mains.classList.remove('active');
    mains.style.display="none";
});

button3.addEventListener("click",()=>{
    if(button3.innerHTML==="Follow Me"){
        button3.innerHTML="Following";
        button3.style.backgroundColor="white";
        button3.style.color="black";
    }
    else if(button3.innerHTML==="Following"){
        button3.innerHTML="Follow Me";
        button3.style.backgroundColor="rgba(255, 255, 255, 0)";
        button3.style.color="white";
    }
});
