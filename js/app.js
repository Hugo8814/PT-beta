
let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    console.log("clicked button")});

let btnDemo = document.getElementById("btn-demo")

btnDemo.addEventListener("click", function(){
    window.location.href=('html/workout.html')
    console.log("clicked button")});

let kickstartBar = document.getElementById("kickstarterBar")

kickstartBar.addEventListener("click", function(){
    window.location.href="https://www.kickstarter.com/"
})