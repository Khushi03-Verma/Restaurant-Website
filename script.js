let food1s=document.getElementById("food1");
let food2s=document.getElementById("food2");
let food=document.getElementById("food");

food1s.addEventListener("click",()=>{
    food.style.backgroundImage="url('food2.jpg')"
})

food2s.addEventListener("click",()=>{
    food.style.backgroundImage="url('food1.jpg')"
})