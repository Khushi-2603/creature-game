var a = document.querySelector("#img1")
var b = document.querySelector("#img2")
var g = document.querySelector("button")

g.addEventListener("click",function(){
  var temp1 = a.getAttribute("src")
  var temp2 = b.getAttribute("src")
  a.setAttribute("src",temp2)
  b.setAttribute("src",temp1)
})