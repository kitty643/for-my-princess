/* ==================================
   FOR MY PRINCESS ❤️
   script.js
================================== */

// Loading Screen

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loading").style.display = "none";

document.getElementById("main").style.display = "block";

}, 2500);

});

// Music

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick = () =>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="▶ Play Music";

}

};

}

// Start Button

const startBtn=document.getElementById("startBtn");

if(startBtn){

startBtn.onclick=()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

music.play().catch(()=>{});

};

}

// Love Meter

const progress=document.getElementById("progress");

const meter=document.getElementById("meterText");

if(progress){

setTimeout(()=>{

progress.style.width="100%";

},500);

}

if(meter){

let percent=0;

let timer=setInterval(()=>{

percent++;

meter.innerHTML="Love : "+percent+"%";

if(percent>=100){

clearInterval(timer);

meter.innerHTML="∞ Infinite Love ❤️";

}

},80);

}

// Gallery Click Effect

document.querySelectorAll(".gallery img,.gallery-grid img").forEach(img=>{

img.onclick=()=>{

img.style.transform="scale(1.2)";

setTimeout(()=>{

img.style.transform="scale(1)";

},300);

};

});

// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.animation="floatHeart 6s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,700);

// Animation Style

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// Fade Sections

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

observer.observe(sec);

});

// Final Console Message

console.log("Made with ❤️ by Your Kalu for Princess Aakriti");
