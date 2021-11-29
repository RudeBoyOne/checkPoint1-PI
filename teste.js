/*function microondas(alimento, time){
    if(alimento === "pipoca" && time < 10){
        console.log("Tempo insuficiente")
    }else if(alimento === "pipoca" && time === 10){
        console.log("Prato pronto, bom apetite")
    }else if(alimento === "pipoca" && time < 29){
        console.log("Comida queimou!")
    }else if(alimento === "pipoca" && time >= 10 * 3){
        console.log("KaaABuMM!!!")
    }
}

microondas("pipoca", 10);*/

function microondas(){
    function pipoca(time){
        if(time < 10){
            console.log("Tempo insuficiente")
        }else if(time === 10){
            console.log("Prato pronto, bom apetite")
        }else if(time > 10 && time <= 29){
            console.log("Comida queimou!")
        }else if(time >= 10 * 3){
            console.log("KaaABuMM!!!")
        }
    }
}