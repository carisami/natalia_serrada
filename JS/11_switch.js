//If sobre valores discretos de una sola variable 
//if (x > 5)
// if (x = = 2 && y == 3)

let cargo  // gerente, senior, junior, becario
cargo = 'gerente'
cargo = 'senior'
cargo = 'junior'
let bonus 

switch (cargo.toLowerCase()) {
    case 'director':
    case 'gerente':
        bonus = 10000
        break
    case 'senior':
        bonus = 1000
        break;
    default:
        bonus = 0
        break
}

if (cargo.toLowerCase() == 'director'|| 
    cargo.toLowerCase == 'gerente') {
    bonus = 10000   
} else if (cargo.toLowerCase() == 'senior') {
    bonus = 1000
} else {
    bonus = 0
}

console.log(`Como eres ${cargo}, tu bonus es ${bonus} €`)
 
// En java, c#..
// string name = 'pepe'
// string nameMay = UpperCase(name)

let array = []
array.push()


let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)