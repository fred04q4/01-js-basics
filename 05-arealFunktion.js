document.querySelector("button").addEventListener("click",buttonClick)

function buttonClick(){
    let lændge =  document.querySelector("#lændge").value;
    let bredde =  document.querySelector("#bredde").value;
    let resultat =`Længden er ${lændge} meter og bredden er ${bredde} meter. Arealet er${areal(lændge,bredde)} `;
    console.log(resultat);

}

function areal(l,b){
    return l * b;
}