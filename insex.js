let car = {
    model: "malibu 2",
    information:{
        company: "gm",
        type: "sedan",
        wheels: 3,
        color: "black",
        price: 27000,
    },

    tech_passport: {
        year: 2017,
        complectation: "ltz",
        engine: 2.4
    },
   
    
}






let user = {
    name: "Aziza",
    surname: "Saliyeva",
    age: 15,
    passport: {
        serries: "AC",
        number: 234893,
        born: "2008-11-29",
        gender: "female",
    },
    radio: {
        height: 178,
        weight: 43,
        
    },
    
    status: "married",
    husband: ["Han Djisung"],
    parrents: {
        mom: "Dilya",
        dad: "Iskandar",
        brother: "Aziz_lox",
    }
}

let types = {
    string: [],
    numbers: [],
    object: [],
    boolean: [],
}







let newObdect = Object.assign({}, car, {user})
let keys = Object.keys(newObdect)
let values = Object.values(newObdect)

let arr = [...keys, ...values]



arr.map(item => {
    let key = typeof(item)
    types[key].push(item)
})

console.log(types);








