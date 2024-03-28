

function menjanjeBoje(boja){
let obrisiDugmad=document.getElementsByClassName("obrisi");
for(let i=0;i<obrisiDugmad.length;i++){
    obrisiDugmad[i].style.backgroundColor=boja;
}
/*
for (const dugme of obrisiDugmad){
    dugme.style.backgroundColor=boja;
}
*/
//1. TIP - IZVRSNA FUNKCIJA 
}

//menjanjeBoje("green");

//TIP 2 - ARROW funkcija


let menjanjeBojeA=(boja)=>{
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for(let i=0;i<obrisiDugmad.length;i++){
        obrisiDugmad[i].style.backgroundColor=boja;
    }

}

/*menjanjeBojeA("blue");*/

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);
menjanjeBojeB("purple");

//3. TIP CALLBACK funkcija
let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad){
    dugme.addEventListener("click",function(e){
        let elementZaBrisanje=this.parentNode;
    elementZaBrisanje.remove();

    })


}

function dodajDestinaciju(event){
event.preventDefault();
let inputPolje= document.querySelector("#dodaj-destinaciju input");
let nazivNoveDest=inputPolje.value;
if(nazivNoveDest){
let ul= document.getElementById("lista");
let noviLi= document.createElement("li");
noviLi.innerHTML=`<span class="naziv">${nazivNoveDest}</span>
<span class="obrisi">obriši</span>`
ul.appendChild(noviLi);

inputPolje.value="";

}
}

function pozivCallback(){
let forma= document.forms["dodaj-destinaciju"];
forma.addEventListener("submit",dodajDestinaciju);

}

document.addEventListener("DOMContentLoaded",pozivCallback);
