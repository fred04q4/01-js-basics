document.querySelector("button").addEventListener("click",buttonClick );

function buttonClick(){
   let brugerNaven = document.querySelector("#navn").value;
console.log(`tilykke dit naven er ${brugerNaven}`);
}