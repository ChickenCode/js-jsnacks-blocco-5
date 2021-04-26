//creo 10 gruppi di zucchine
var zucchine = [
    zucchina1 = {
        varietà: "gialla",
        peso: 15,
        lunghezza: 21
    },

     zucchina2 = {
        varietà: "verde",
        peso: 35,
        lunghezza: 18
    },

     zucchina3 = {
        varietà: "turchese",
        peso: 76,
        lunghezza: 12
    },

    zucchina4 = {
        varietà: "gnappi",
        peso: 45,
        lunghezza: 10
    },

    zucchina5 = {
        varietà: "armando",
        peso: 35,
        lunghezza: 21
    },

    zucchina6 = {
        varietà: "puchhais",
        peso: 25,
        lunghezza: 1
    },

    zucchina7 = {
        varietà: "zenzero",
        peso: 18,
        lunghezza: 3
    },

    zucchina8 = {
        varietà: "tapioca",
        peso: 15,
        lunghezza: 45
    },

    zucchina9 = {
        varietà: "contemascetti",
        peso: 15,
        lunghezza: 72
    },

    zucchina10 = {
        varietà: "bananella",
        peso: 15,
        lunghezza: 3
    }
]

// stampo quanto pesano tutte le zucchine

var pesoTotale = 0

for (i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso
}

console.log(pesoTotale)

//divido in due array quelle più lunghe di 15 cm e quelle meno lunghe (o uguali) a 15

let zucchineCorte = []
let zucchineLunghe = []

for (i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchineCorte.push(zucchine[i])
    }

    else {
        zucchineLunghe.push(zucchine[i])
    }
}

// creo due cicli per sommare i pesi dei due array
var pesoZucchineCorte = 0
var pesoZucchineLunghe=0

for (i = 0; i < zucchineCorte.length; i++) {
    pesoZucchineCorte += zucchineCorte[i].peso
    }

for (i = 0; i < zucchineLunghe.length; i++) {
    pesoZucchineLunghe += zucchineLunghe[i].peso
    }

    console.log(`Le zucchine lunghe 15cm o meno pesano in totale ${pesoZucchineCorte}`)
    console.log(`Le zucchine lunghe più di 15cm pesano in totale ${pesoZucchineLunghe}`)

