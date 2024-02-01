// var arr=[1,2,3,"hey",5,"Nyyy",68]

// var ans=arr.filter(function(val){
//   if( isNaN(val) ===true)return false;
//      else return true;
// })

//     //phle hmsha val check hota hai
// var arrr=[
//     {name:"iphone",value:120000,available:true},
//     {name:"iphoneX",value:200000,available:false},
//     {name:"iphone13",value:160000,available:true},
//     {name:"iphoneXS",value:124500,available:false},
// ]
// var ansss=arrr.filter(val=> val.available)

// var arr=[1,2,3,4,5,6]
// var ans=arr.map(function(elem){
    // return elem*elem;

// })

// var arr=["khushi","gajju","deven","tani","rishi"]
// var ans=arr.map(function(elem){
//     return elem.toUpperCase();
// })
// var arr2=["khushi","gajju","deven","tani","rishi"]
// var arr3=arr2.map(function(elem){
//     return "Mr."+ elem;
// })

// `MR ${elem}`

// var arr=[-1,-2,0,1,2,3,4,-6]
// var ans= arr.filter(function(val){
    // if(val>0)
    // return true;
// else return false;
// })


// var arr=[1,2,3,4,5,6,7,8]
// var ans=arr.filter(function(val){
//     if(val%2 == 0)return true;
//     else return false;
// })

// var arr=["khushi","gajju","eva","deven"]
// var ans= arr.filter(function(val){
//     if(val.length>=5)return true;
//     else return false;
// })

// active is for hover by clicking

// var menu = document.querySelector("h2")
// var flag =0;
// bnt.addEventListener("Click",functio(){
//     if()
// })

// var btn= document.querySelector("button")
// var box=document.querySelector("#box")
// btn.addEventListener("click",function(){
// var a= Math.floor(Math.random()*255)
// var b= Math.floor(Math.random()*255)
// var c= Math.floor(Math.random()*255)
// box.style.backgroundColor=`rgb(${a},${b},${c})`
// })


// var text=document.querySelector("h3")
// var btn= document.querySelector("button")
// var flag =0;
// btn.addEventListener("click",function(){
//     var num = Math.floor(Math.random()* 2000);
//     if(flag == 0){
//    btn.style.backgroundColor = "yellow"
//    text.innerHTML = "requested"
//    setTimeout(function(){
//     text.innerHTML = "following"
//     btn.style.backgroundColor = "green"
//    },num);
//    flag = 1;
// } else{
//    text.innerHTML = "follow"
//    btn.style.backgroundColor = "blue"
//    flag = 0;
// }
// })
// var a = document.querySelector("#box")
// document.addEventListener("mousemove",function(dets){
//  a.style.left = dets.x+"px"
//  a.style.top = dets.y+"px"
// })

// var photo=document.querySelector("#v")
// var like=document.querySelector("h4")
// var like1=document.querySelector("h3")
// var photo1=document.querySelector("#g")
// var key=document.querySelector("h1")
// photo.addEventListener("dblclick", function(){
//    like.style.scale=1
//    like.style.opacity=0.8
//    like1.style.display="none"
//    photo1.style.display="block"
//    key.innerHTML="Liked"
//    setTimeout(function(){
//     like.style.opacity=0
//    },1000)
//    setTimeout(function(){
//     like.style.scale=0
//    },2000)
// })



var a = document.querySelector("#cursor")
var img=document.querySelector("#v")
document.addEventListener("mousemove",function(dets){
  a.style.left = dets.x+"px"
 a.style.top = dets.y+"px"
 })
 img.addEventListener("mouseenter",function(){
    a.style.height = "80px"
    a.style.width = "80px"
 })
 img.addEventListener("mouseleave",function(){
    a.style.height = "20px"
    a.style.width = "20px"
 })