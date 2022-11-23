

function ramdom(list) {
    let max = list.length
    let numeroRandom = Math.floor((Math.random() * (max)))

    console.log(Math.floor(Math.random() * 5))

    return list[numeroRandom]
}

let list = ['hola', 'me llamo', 'cristhian', 'sergio', 'vargas']

console.log(ramdom(list))