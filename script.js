window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Javascript fungerer");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#pilfrem1").addEventListener("click", skift1);
    document.querySelector("#pilfrem2").addEventListener("click", skift2);
    document.querySelector("#pilfrem3").addEventListener("click", skift3);
    document.querySelector("#pilfrem4").addEventListener("click", skift4);
    document.querySelector("#pilfrem5").addEventListener("click", skift5);

    document.querySelector("#piltilbage1").addEventListener("click", skifttilbage1);
    document.querySelector("#piltilbage5").addEventListener("click", skifttilbage2);
    document.querySelector("#piltilbage4").addEventListener("click", skifttilbage3);
    document.querySelector("#piltilbage3").addEventListener("click", skifttilbage4);
    document.querySelector("#piltilbage2").addEventListener("click", skifttilbage5);


    document.querySelector("#dot1").addEventListener("click", dotskift1);
    document.querySelector("#dot2").addEventListener("click", dotskift2);
    document.querySelector("#dot3").addEventListener("click", dotskift3);
    document.querySelector("#dot4").addEventListener("click", dotskift4);
    document.querySelector("#dot5").addEventListener("click", dotskift5);
    setTimeout(load, 1500);



}



function load() {
    document.querySelector("#screen").classList.add("fade_out");
    setTimeout(load2, 2300);
}

function load2() {
    document.querySelector("#screen").classList.add("hide");
}

function skift1() {
    console.log("skift et fremad fungerer");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne1").classList.add("fem");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne2").classList.add("et");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne3").classList.add("to");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne4").classList.add("tre");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#emne5").classList.add("fire");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#dot1").classList.add("opacity");
    document.querySelector("#dot2").classList.remove("opacity");

}



function skift2() {
    console.log("skift to fremad fungerer");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne1").classList.add("fire");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.add("fem");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.add("et");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.add("to");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.add("tre");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
}


function skift3() {
    console.log("skift tre fremad fungerer");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.add("tre");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne2").classList.add("fire");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.add("fem");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.add("et");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.add("to");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
}

function skift4() {
    console.log("skift fire fremad fungerer");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.add("to");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.add("tre");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne3").classList.add("fire");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.add("fem");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#emne5").classList.add("et");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot5").classList.remove("opacity");

}

function skift5() {
    console.log("skift fem fremad fungerer");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.add("et");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.add("to");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.add("tre");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne4").classList.add("fire");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.add("fem");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#dot5").classList.add("opacity");
    document.querySelector("#dot1").classList.remove("opacity");
}




function skifttilbage1() {
    console.log("skift tilbage et fungerer");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne1").classList.add("to");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne2").classList.add("tre");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne3").classList.add("fire");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne4").classList.add("fem");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#emne5").classList.add("et");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#dot1").classList.add("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
}


function skifttilbage2() {
    console.log("skift tilbage to fungerer");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.add("tre");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.add("fire");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.add("fem");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne4").classList.add("et");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.add("to");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#dot5").classList.add("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
}


function skifttilbage3() {
    console.log("skift tilbage tre fungerer");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.add("fire");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.add("fem");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne3").classList.add("et");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.add("to");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#emne5").classList.add("tre");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
}


function skifttilbage4() {
    console.log("skift tilbage fire fungerer");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.add("fem");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne2").classList.add("et");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.add("to");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.add("tre");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.add("fire");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
}


function skifttilbage5() {
    console.log("skift tilbage fem fungerer");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne1").classList.add("et");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.add("to");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.add("tre");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.add("fire");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.add("fem");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot1").classList.remove("opacity");
}


function dotskift1() {
    document.querySelector("#emne1").classList.add("et");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne2").classList.add("to");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne3").classList.add("tre");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne4").classList.add("fire");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne5").classList.add("fem");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#dot1").classList.remove("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot5").classList.add("opacity");



}

function dotskift2() {
    document.querySelector("#emne1").classList.add("fem");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne2").classList.add("et");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne3").classList.add("to");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne4").classList.add("tre");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne5").classList.add("fire");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#dot1").classList.remove("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
    document.querySelector("#dot1").classList.add("opacity");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot5").classList.add("opacity");


}

function dotskift3() {
    document.querySelector("#emne1").classList.add("fire");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne2").classList.add("fem");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne3").classList.add("et");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne4").classList.add("to");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne5").classList.add("tre");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#dot1").classList.remove("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot1").classList.add("opacity");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot5").classList.add("opacity");


}

function dotskift4() {
    document.querySelector("#emne1").classList.add("tre");
    document.querySelector("#emne1").classList.remove("to");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne2").classList.add("fire");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.remove("tre");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne3").classList.add("fem");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.remove("fire");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne4").classList.add("et");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.remove("fem");
    document.querySelector("#emne5").classList.add("to");
    document.querySelector("#emne5").classList.remove("et");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#piltilbage5").classList.add("hide");
    document.querySelector("#pilfrem5").classList.add("hide");
    document.querySelector("#dot1").classList.remove("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot1").classList.add("opacity");
    document.querySelector("#dot5").classList.add("opacity");


}

function dotskift5() {
    document.querySelector("#emne1").classList.add("to");
    document.querySelector("#emne1").classList.remove("et");
    document.querySelector("#emne1").classList.remove("tre");
    document.querySelector("#emne1").classList.remove("fire");
    document.querySelector("#emne1").classList.remove("fem");
    document.querySelector("#emne2").classList.add("tre");
    document.querySelector("#emne2").classList.remove("et");
    document.querySelector("#emne2").classList.remove("to");
    document.querySelector("#emne2").classList.remove("fire");
    document.querySelector("#emne2").classList.remove("fem");
    document.querySelector("#emne3").classList.add("fire");
    document.querySelector("#emne3").classList.remove("et");
    document.querySelector("#emne3").classList.remove("to");
    document.querySelector("#emne3").classList.remove("tre");
    document.querySelector("#emne3").classList.remove("fem");
    document.querySelector("#emne4").classList.add("fem");
    document.querySelector("#emne4").classList.remove("et");
    document.querySelector("#emne4").classList.remove("tre");
    document.querySelector("#emne4").classList.remove("to");
    document.querySelector("#emne4").classList.remove("fire");
    document.querySelector("#emne5").classList.add("et");
    document.querySelector("#emne5").classList.remove("fem");
    document.querySelector("#emne5").classList.remove("tre");
    document.querySelector("#emne5").classList.remove("fire");
    document.querySelector("#emne5").classList.remove("to");
    document.querySelector("#piltilbage1").classList.remove("hide");
    document.querySelector("#pilfrem1").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.remove("hide");
    document.querySelector("#pilfrem2").classList.remove("hide");
    document.querySelector("#piltilbage3").classList.remove("hide");
    document.querySelector("#pilfrem3").classList.remove("hide");
    document.querySelector("#piltilbage4").classList.remove("hide");
    document.querySelector("#pilfrem4").classList.remove("hide");
    document.querySelector("#piltilbage5").classList.remove("hide");
    document.querySelector("#pilfrem5").classList.remove("hide");
    document.querySelector("#piltilbage2").classList.add("hide");
    document.querySelector("#pilfrem2").classList.add("hide");
    document.querySelector("#piltilbage3").classList.add("hide");
    document.querySelector("#pilfrem3").classList.add("hide");
    document.querySelector("#piltilbage4").classList.add("hide");
    document.querySelector("#pilfrem4").classList.add("hide");
    document.querySelector("#piltilbage1").classList.add("hide");
    document.querySelector("#pilfrem1").classList.add("hide");
    document.querySelector("#dot1").classList.remove("opacity");
    document.querySelector("#dot2").classList.remove("opacity");
    document.querySelector("#dot3").classList.remove("opacity");
    document.querySelector("#dot4").classList.remove("opacity");
    document.querySelector("#dot5").classList.remove("opacity");
    document.querySelector("#dot2").classList.add("opacity");
    document.querySelector("#dot3").classList.add("opacity");
    document.querySelector("#dot4").classList.add("opacity");
    document.querySelector("#dot1").classList.add("opacity");


}



function toggleMenu() {
    console.log("burger menu fungere");
    document.querySelector("#menu").classList.toggle("transformere");
    let erSkjult = document.querySelector("#menu").classList.contains("transformere");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
