var crs=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
  crs.style.left=dets.x+"px"
  crs.style.top=dets.y+"px"
  blur.style.left=dets.x-190+"px"
  blur.style.top=dets.y-190+"px"
  })
  



gsap.to("#nav",{
  backgroundColor:"#000",
  duration:0.5,
  height:"110px",
  scrollTrigger:{
    trigger:"#nav",
    scroll:"body",
    //markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroll:"body",
   // markers:true,
    start:"top -28%",
    end:"top -70%",
    scrub:1
  }
})