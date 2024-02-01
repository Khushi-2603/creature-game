var btn=document.querySelector("button")
var mos=document.querySelector("img")
// flag=0
btn.addEventListener("click",function(a){
    // if(flag==0){
        mos.style.right= Math.floor(Math.random()*100)+"%"
    mos.style.bottom= Math.floor(Math.random()*100)+"%"
    mos.style.rotate= Math.floor(Math.random()*360)+"deg"

        // Image.style.left= w+"%"
    // // }else{
    // mos.style.right= "10%"
    // mos.style.bottom="10%"
    // }
    // flag==1
})
// var r= Math.floor(Math.random()*360)+"deg"