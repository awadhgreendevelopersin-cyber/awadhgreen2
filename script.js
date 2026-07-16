// ==============================
// Mobile Menu (Safe)
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn && nav){
    menuBtn.addEventListener("click",()=>{
        nav.classList.toggle("active");
    });
}


// ==============================
// Header Scroll Effect
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ==============================
// EMI Calculator
// ==============================

function calculateEMI(){

let P=parseFloat(document.getElementById("amount").value);

let annual=parseFloat(document.getElementById("rate").value);

let years=parseFloat(document.getElementById("years").value);

if(!P || !annual || !years){

document.getElementById("emiResult").innerHTML="Please enter all values";

return;

}

let R=annual/12/100;

let N=years*12;

let EMI=(P*R*Math.pow((1+R),N))/(Math.pow((1+R),N)-1);

document.getElementById("emiResult").innerHTML="Monthly EMI : ₹ "+EMI.toFixed(0);

}


// ==============================
// Animated Counter
// ==============================

const counters=document.querySelectorAll(".count-box h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

const current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/60);

if(current<target){

counter.setAttribute("data-count",current+increment);

counter.innerText=current+increment;

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});


// ==============================
// Fade Animation
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.feature,.review,.gallery img").forEach(el=>{

observer.observe(el);

});


// ==============================
// Gallery Hover Animation
// ==============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// ==============================
// Contact Form
// ==============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your enquiry has been submitted.");

form.reset();

});

}
