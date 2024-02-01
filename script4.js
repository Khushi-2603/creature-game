// var growth= document.querySelector("#l2")
// var button = document.querySelector("button")
// var perc=document.querySelector("h2")

// var grow = 0;
// button.addEventListener("click",function(){
//     var int= setInterval(function(){
//         if(grow<=100){
//             var hero=grow++
//             growth.style.width=`${hero}%`
//             perc.innerHTML=hero+"%"
//         }
//     },50);
//      setTimeout(function(){
//         button.innerHTML="Downloaded"
//         button.style.backgroundColor="green"
//         clearInterval(int)
//      },5050)

      
// })
 var elems=document.querySelectorAll(".elem")
elems.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
     val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
     })
     val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
         val.childNodes[3].style.rotate=dets.x+"px"
     })
})

