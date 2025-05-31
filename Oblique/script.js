function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.3,
        duration: 0.6,
        delay: 0.5
    })

    tl.from("#line1-part1 ", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    grow++;
                    h5timer.innerHTML = grow;
                }
                else {
                    h5timer.innerHTML = grow;
                }
            }, 33)
        }
    })

    tl.to('.line h2', {
        animationName: "nowAnime",
        opacity: 1,
    })


    tl.to("#loader", {
        opacity: 0,
        delay: 4,
        duration: 0.2,
        onComplete: function () {
        var loader = document.querySelector("#loader");
        loader.style.display = "none";
        loader.style.pointerEvents = "none";

        
    }
    
    })

    tl.from("#page1", {
        y: 1600,
        delay: 0.2,
        duration: 0.3,
        ease: Power4
    })

    
}

loadingAnimation()

function cursorAnimation(){
    document.addEventListener("mousemove", (e) => {
//   console.log("🖱️ Mouse moved at", e.clientX, e.clientY);
//   document.querySelector("p").innerHTML=`cursor at ${e.clientX},${e.clientY}`
     gsap.to("#crsr",{
        left:e.clientX,
        top:e.clientY
     })
});

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {});

}

cursorAnimation()