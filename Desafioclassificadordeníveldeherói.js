//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói

let nome = "Batman"
let xp = 5500
let nível = ["Ferro", "Bronze", "Prata", "Ouro", 
    "Platina", "Ascendente", "Imortal", "Radiante"]


//Nível Ferro
if (0 <= xp && xp <= 1000) {
    console.log("O herói " + nome + " está no nível " + nível[0] +".") 
}

//Nível Bronze
    else if ( 1000 < xp && xp <= 2000) {
        console.log("O herói " + nome + " está no nível " + nível[1] +".") 
    }

//Nível Prata    
    else if ( 2000 < xp && xp <= 5000) {
        console.log("O herói " + nome + " está no nível " + nível[2] +".") 
    }

//Nível Ouro
    else if ( 5000 < xp && xp <= 7000) {
        console.log("O herói " + nome + " está no nível " + nível[3] +".") 
    }

//Nível Platina
    else if ( 7000 < xp && xp <= 8000) {
        console.log("O herói " + nome + " está no nível " + nível[4] +".") 
    }

//Nível Ascendente
    else if ( 8000 < xp && xp <= 9000) { 
        console.log("O herói " + nome + " está no nível " + nível[5] +".") 
    }

//Nível Imortal
    else if ( 9000 < xp && xp <= 10000) {
        console.log("O herói " + nome + " está no nível " + nível[6] +".") 
    }

//Nível Radiante
    else if (xp > 10000) {
        console.log("O herói " + nome + " está no nível " + nível[7] +".") 
    }

//Valor inválido
    else {
        console.log ("Experiência inválida. Digite um novo valor.")
        }

    



