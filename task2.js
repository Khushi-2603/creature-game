
var a = document.querySelector("#first")
var b = document.querySelector("#second")
var c = document.querySelector("#third")
var ground = document.querySelector(".playground")
var g = document.querySelectorAll(".card1")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
   b.style.transform = "translateY(-100%)"
})
var selected =""
g.forEach(function(elem){
    elem.addEventListener("click",function(){
        c.style.transform = "translateY(-200%)"
        selected = elem.childNodes[1].getAttribute("src")
        let newImg = document.createElement("img")
        var x = Math.floor(Math.random()*100)
        var y =Math.floor(Math.random()*100)
        // var r = Math.random()*360
        newImg.setAttribute("src",selected)
        newImg.setAttribute("id","vih")
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        // newImg.style.rotate = r+"deg"
        ground.appendChild(newImg)
        var k = document.querySelector("#vih")
      
        k.addEventListener("click",function(){ 
            k.style.left = Math.floor(Math.random()*100)+"%"
            k.style.top = Math.floor(Math.random()*100)+"%"
         })
        console.log(newImg);
    })
})