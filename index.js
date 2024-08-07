var text=document.getElementById("textarea")

var totcounter=document.getElementById("totalCounter")

var remain=document.getElementById("RemainingCounter")

text.addEventListener("keyup",()=>{
   updatecounter()
})


function  updatecounter(){
   totcounter.innerText =  textarea.value.length
   remain.innerText =   textarea.getAttribute("maxLength") - textarea.value.length ;
}


