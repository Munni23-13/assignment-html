let mainContainer=document.getElementById('myContainer')
let homeElement=document.getElementById("HomeSection")
let aboutElement=document.getElementById("AboutSection")
let homeBtn=document.getElementById("items1")
let aboutBtn=document.getElementById('items1')
let btnElement=document.getElementById('btn')

function changeColor() { 
    mainContainer.style.backgroundColor = "#000000";
    imageBtn.textContent="sun";
    mainContainer.style.color="#ffffff"
}
btnElement.addEventListener("click",function(){
    mainContainer.style.backgroundColor="#000000";
    imageBtn.textContent="sun";
    mainContainer.style.color="#ffffff"
});

