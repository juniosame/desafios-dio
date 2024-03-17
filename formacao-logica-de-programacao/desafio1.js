/*
Desenvolvedor: Jean S. Silva Junior
Data: 16/03/24
Descrição: Este script foi criado por Jean S. Silva Junior para a resolução do desafio "Classificador de Nível de Herói".
*/


let nomeHeroi = "Deadpool";
let rnd = [541, 1350, 2412, 6857, 7122, 8741, 9688, 11198];

for (let i = 0; i < rnd.length; i++) {
    let xpHeroi = rnd[i];
    let nivelHeroi;

    switch (true) {
        case (xpHeroi <= 1000):
            nivelHeroi = "Ferro";
            break;

        case (xpHeroi >= 1001 && xpHeroi <= 2000):
            nivelHeroi = "Bronze";
            break;

        case (xpHeroi >= 2001 && xpHeroi <= 5000):
            nivelHeroi = "Prata";
            break;

        case (xpHeroi >= 5001 && xpHeroi <= 7000):
            nivelHeroi = "Ouro";
            break;

        case (xpHeroi >= 7001 && xpHeroi <= 8000):
            nivelHeroi = "Platina";
            break;
        
        case (xpHeroi >= 8001 && xpHeroi <= 9000):
            nivelHeroi = "Ascendente";
            break;
        
        case (xpHeroi >= 9001 && xpHeroi <= 10000):
            nivelHeroi = "Imortal";
            break;

        case (xpHeroi >= 1001):
            nivelHeroi = "Radiante";
            break;
    }

    console.log("O Herói de nome", nomeHeroi, "está no nível de", nivelHeroi, "com", xpHeroi, "de xp");
}