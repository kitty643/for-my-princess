/* ==========================================
   FOR MY PRINCESS ❤️
   SCRIPT.JS - PART 1
========================================== */

window.addEventListener("load", () => {

const loading = document.getElementById("loading");
const main = document.getElementById("main");

if(main){
    main.style.display = "none";
}

setTimeout(() => {
    if(loading) loading.style.display = "none";
    if(main) main.style.display = "block";
},2500);

});

/* --------------------------
   MUSIC PLAYER
--------------------------- */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if(musicBtn && bgMusic){

musicBtn.innerHTML="▶ Play Music";

musicBtn.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

bgMusic.pause();

musicBtn.innerHTML="▶ Play Music";

}

});

}

/* --------------------------
   START BUTTON
--------------------------- */

const startBtn=document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

if(bgMusic){

bgMusic.play().catch(()=>{});

if(musicBtn){

musicBtn.innerHTML="⏸ Pause Music";

}

}

});

}

/* --------------------------
   LOVE METER
--------------------------- */

const progress=document.getElementById("progress");
const meter=document.getElementById("meterText");

function animateLove(){

if(!progress || !meter) return;

let percent=0;

progress.style.width="0%";

const timer=setInterval(()=>{

percent++;

progress.style.width=percent+"%";

if(percent<100){

meter.innerHTML="Love : "+percent+"% ❤️";

}else{

meter.innerHTML="∞ Infinite Love ∞ ❤️";

clearInterval(timer);

}

},60);

}

setTimeout(animateLove,3000);

/* --------------------------
   SECTION FADE
--------------------------- */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(70px)";
sec.style.transition="all 1s ease";

observer.observe(sec);

});

/* -------- PART 2 STARTS BELOW -------- *//* --------------------------
   FLOATING HEARTS
--------------------------- */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(18+Math.random()*18)+"px";
heart.style.opacity=Math.random();
heart.style.pointerEvents="none";
heart.style.zIndex="9999";
heart.style.transition="transform 6s linear, opacity 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh) rotate(720deg)";
heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);

/* --------------------------
   GALLERY EFFECT
--------------------------- */

document.querySelectorAll(".gallery img,.gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";
image.style.boxShadow="0 0 40px hotpink";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

/* --------------------------
   BUTTON RIPPLE
--------------------------- */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";
circle.style.height=d+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.5)";
circle.style.left=(e.offsetX-d/2)+"px";
circle.style.top=(e.offsetY-d/2)+"px";
circle.style.transform="scale(0)";
circle.style.animation="ripple .6s linear";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* Ripple Animation */

const ripple=document.createElement("style");

ripple.innerHTML=`
@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}
`;

document.head.appendChild(ripple);

/* -------- PART 3 STARTS BELOW -------- *//* --------------------------
   HERO PARALLAX
--------------------------- */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=(window.scrollY*0.4)+"px";

}

});

/* --------------------------
   CARD HOVER SOUND EFFECT
--------------------------- */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* --------------------------
   RANDOM LOVE QUOTES
--------------------------- */

const quotes=[
"❤️ You are my happiest place.",
"💖 Every moment with you is special.",
"🌹 I fall for you every single day.",
"💕 You are my Princess forever.",
"✨ My heart belongs to you."
];

const finalMessage=document.querySelector(".final-message p");

if(finalMessage){

setInterval(()=>{

const i=Math.floor(Math.random()*quotes.length);

finalMessage.innerHTML=quotes[i];

},6000);

}

/* --------------------------
   SMOOTH BUTTON GLOW
--------------------------- */

document.querySelectorAll("button").forEach(btn=>{

setInterval(()=>{

btn.style.boxShadow="0 0 35px hotpink";

setTimeout(()=>{

btn.style.boxShadow="0 0 15px hotpink";

},800);

},2000);

});

/* --------------------------
   END OF SCRIPT
--------------------------- */

console.log("❤️ Made with love for Princess Aakriti ❤️");
