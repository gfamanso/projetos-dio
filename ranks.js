function saldoVitorias(n=0){
    let rank = ("Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal")
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
            return 'Não foi possível calcular o rank. Tente novamente.'
        }
}

let res = saldoVitorias(81)
console.log(res)