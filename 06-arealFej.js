document.querySelector("button").addEventListener("click",buttonClick)

function buttonClick(){
    let lændge =  document.querySelector("#lændge").value;
    let bredde =  document.querySelector("#bredde").value;
    let a = areal(lændge,bredde)
    let resultat ;
    if (isNaN (a)){    
    resultat= "Det er ikke et tal, prøve igen";
    }else if (a<= 0){

        resultat= "Arealet er minder end nul! Prøve igen";
    }else{
        resultat= `Arealet er ${a}`;
    }


console.log(resultat);
}

function areal(l,b){
    return l * b;
}
