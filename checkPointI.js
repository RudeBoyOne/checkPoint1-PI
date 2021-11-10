function microondas(alimento, time){
    switch(alimento){
        case "pipoca":
            if (alimento === "pipoca" && time === 10){
                console.log("Prato pronto, bom apetite!!!")
            }else{ 
                if(alimento === "pipoca" && time < 10){
                    console.log('Tempo insuficiente')
                }else if(alimento === "pipoca" && time == 10 * 2){
                    console.log('Comida queimou')
                }else if(alimento === "pipoca" && time >= 10 * 3){
                    console.log('KaaABuMM!!!')
            }
            }
            break;
        
        case "macarrao":
            if (alimento === "macarrao" && time === 10){
                console.log("Prato pronto, bom apetite!!!")
            }else{ 
                if(alimento === "macarrao" && time < 10){
                    console.log('Tempo insuficiente')
                }else if(alimento === "macarrao" && time == 10 * 2){
                    console.log('Comida queimou')
                }else if(alimento === "macarrao" && time >= 10 * 3){
                    console.log('KaaABuMM!!!')
            }
            }
            break;
        
        case "carne":
            if (alimento === "carne" && time === 15){
                console.log("Prato pronto, bom apetite!!!")
            }else{ 
                if(alimento === "carne" && time < 15){
                    console.log('Tempo insuficiente')
                }else if(alimento === "carne" && time == 15 * 2){
                    console.log('Comida queimou')
                }else if(alimento === "carne" && time >= 15 * 3){
                    console.log('KaaABuMM!!!')
            }
            }
            break;
        
        case "feijão":
            if (alimento === "feijão" && time === 12){
                console.log("Prato pronto, bom apetite!!!")
            }else{ 
                if(alimento === "feijão" && time < 12){
                    console.log('Tempo insuficiente')
                }else if(alimento === "feijão" && time == 12 * 2){
                    console.log('Comida queimou')
                }else if(alimento === "feijão" && time >= 12 * 3){
                    console.log('KaaABuMM!!!')
            }
            }
            break;
        case "brigadeiro":
            if (alimento === "brigadeiro" && time === 8){
                console.log("Prato pronto, bom apetite!!!")
            }else{ 
                if(alimento === "brigadeiro" && time < 8){
                    console.log('Tempo insuficiente')
                }else if(alimento === "brigadeiro" && time == 8 * 2){
                    console.log('Comida queimou')
                }else if(alimento === "brigadeiro" && time >= 8 * 3){
                    console.log('KaaABuMM!!!')
            }
            }
            break;
            default:
                console.log("Prato inexistente")
}
}

microondas("feijoada", 24);


