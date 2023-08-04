let button1=document.querySelector('.btn1');
let mains=document.querySelector('.twocontainer');
let button2=document.querySelector('.crossing');
let button3=document.querySelector('.btn2');

button1.addEventListener("click", ()=>{
    mains.classList.toggle('active');
    // if(!mains.classList.contains('active')){
        //     mains.classList.add('active');
        // }
    });   
    
    
button2.addEventListener('click',()=>{
    mains.classList.toggle('active');
    // if(mains.classList.contains('active')){
    //     mains.classList.remove('active');
    // }
});


button3.addEventListener("click",()=>{
    if(button3.innerHTML==="Follow Me"){
        button3.innerHTML="Following";
        button3.style.backgroungColor="white";
    }
    else if(button3.innerHTML==="Following"){
        button3.innerHTML="Follow Me";
    }
});