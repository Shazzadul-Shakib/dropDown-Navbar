let btn=document.getElementsByClassName("btn")[0];
let link=document.getElementsByClassName("nav-link")[0];

btn.addEventListener("click",function(){
    link.classList.toggle("active");
});