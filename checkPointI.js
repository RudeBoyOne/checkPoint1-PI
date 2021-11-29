function microondas(alimento, time){
    switch(alimento){
        case "pipoca":
            if(alimento === "pipoca" && time < 10){
                console.log("Tempo insuficiente")
            }else if(alimento === "pipoca" && time === 10){
                console.log("Prato pronto, bom apetite")
            }else if(alimento === "pipoca" && time <= 29){
                console.log("Comida queimou!")
            }else if(alimento === "pipoca" && time >= 30){
                console.log("KaaABuMM!!!")
            }
                    
            break;
        
        case "macarrão":
            if(alimento === "macarrão" && time < 8){
                console.log("Tempo insuficiente")
            }else if(alimento === "macarrão" && time === 8){
                console.log("Prato pronto, bom apetite")
            }else if(alimento === "macarrão" && time <= 16){
                console.log("Comida queimou!")
            }else if(alimento === "macarrão" && time >= 17){
                console.log("KaaABuMM!!!")
            }
            break;
        
        case "carne":
            if(alimento === "carne" && time < 15){
                console.log("Tempo insuficiente")
            }else if(alimento === "carne" && time === 15){
                console.log("Prato pronto, bom apetite")
            }else if(alimento === "carne" && time <= 30){
                console.log("Comida queimou!")
            }else if(alimento === "carne" && time >= 31){
                console.log("KaaABuMM!!!")
            }

            break;
        
        case "feijão":
            if(alimento === "feijão" && time < 12){
                console.log("Tempo insuficiente")
            }else if(alimento === "feijão" && time === 12){
                console.log("Prato pronto, bom apetite")
            }else if(alimento === "feijão" && time <= 24){
                console.log("Comida queimou!")
            }else if(alimento === "feijão" && time >= 25){
                console.log("KaaABuMM!!!")
            }

            break;

        case "brigadeiro":
            if(alimento === "brigadeiro" && time < 8){
                console.log("Tempo insuficiente")
            }else if(alimento === "brigadeiro" && time === 8){
                console.log("Prato pronto, bom apetite")
            }else if(alimento === "brigadeiro" && time <= 16){
                console.log("Comida queimou!")
            }else if(alimento === "brigadeiro" && time >= 17){
                console.log("KaaABuMM!!!")
            }

            break;

            default: console.log("Prato inexistente")
}
}

microondas("brigadeiro", 7);


