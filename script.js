
// MUSIC CONTROL

const music = document.getElementById("music");


function startStory(){

    if(music){

        music.play().catch(()=>{

            console.log("Music waiting for user interaction");

        });

    }


    document.querySelector(".hero").style.display="none";


    document.querySelector(".hidden-message").style.display="flex";


    createHearts();

}




// CREATE FLOATING HEARTS

function createHearts(){


    setInterval(()=>{


        const heart=document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-20px";

        heart.style.fontSize=(Math.random()*25+15)+"px";


        heart.style.animation="floatHeart 6s linear";


        heart.style.zIndex="20";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },6000);



    },400);



}





// BUTTON CLICK HEART BURST


document.addEventListener("click",function(e){


    for(let i=0;i<8;i++){


        let heart=document.createElement("span");


        heart.innerHTML="💗";


        heart.style.position="fixed";

        heart.style.left=e.clientX+"px";

        heart.style.top=e.clientY+"px";

        heart.style.fontSize="20px";

        heart.style.pointerEvents="none";


        heart.style.animation="burst 1s forwards";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },1000);


    }


});





// ADD ANIMATION CSS FROM JS

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



@keyframes burst{


0%{

transform:translate(0,0) scale(1);

opacity:1;

}


100%{

transform:translate(
${Math.random()*200-100}px,
${Math.random()*200-100}px
)
scale(0);

opacity:0;

}

}

`;


document.head.appendChild(style);





// START HEART EFFECT AFTER LOAD

window.onload=function(){


    setTimeout(()=>{

        createHearts();

    },4000);


};
/* FINAL SURPRISE EFFECTS */


function createFinalHearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize="30px";

heart.style.zIndex="99";


heart.style.animation="floatHeart 7s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},7000);



},500);


}




function fireworks(){


setInterval(()=>{


let spark=document.createElement("div");


spark.className="firework";


spark.style.left=Math.random()*window.innerWidth+"px";

spark.style.top=Math.random()*window.innerHeight+"px";


document.body.appendChild(spark);



setTimeout(()=>{

spark.remove();

},1000);



},300);


}



window.addEventListener("load",()=>{


if(document.body.classList.contains("final-page")){


createFinalHearts();

fireworks();


}



});
