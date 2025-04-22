function totalPartidas (vitorias=0, derrotas=0){
    let saldoVitorias = vitorias - derrotas
    //console.log (`O jogador tem saldo de ${saldoVitorias} vitórias.`)
    return saldoVitorias
 
}

function saldoVitorias(n=0){
    
    if ( n >= 0 && n <= 10){
        return "Ferro"
    }
        else if (n > 10 && n <= 20){
            return "Bronze"
        }

        else if (n > 20 && n <= 50) {
            return "Prata"
        }

        else if (n > 50 && n <= 80 ){
            return "Ouro"
        }

        else if (n > 80 && n <= 90 ){
            return "Diamante"
        }

        else if (n > 90 && n <= 100 ){
            return "Lendário"
        }

        else if (n > 100 ){
            return "Imortal"
        }
        else {
            return 'Não foi possível calcular o nível. Tente novamente.'
        }
}

let wins = 32
let defeats = 28
let player = totalPartidas (wins, defeats)
let res = saldoVitorias(player)

console.log(`O jogador tem ${wins} vitória(s), ${defeats} derrota(s) e está no nível ${res}.`)
console.log(`O jogador tem ${wins} vitória(s), ${defeats} derrota(s), um saldo de ${player} vitória(s) e está no nível ${res}.`)
console.log(`O jogador tem um saldo de ${player} vitória(s) e está no nível ${res}.`)