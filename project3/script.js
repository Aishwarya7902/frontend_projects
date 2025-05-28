var h1Text=document.querySelector("#firsth1").textContent

var splittedText = h1Text.split("")

var clutter = "";
splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

document.querySelector("#firsth1").innerHTML=clutter
// console.log(clutter)

gsap.to("#page2 h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:1 //With scrub: true or scrub: 1, the animation rewinds or fast-forwards depending on how the user scrolls.
    }
})