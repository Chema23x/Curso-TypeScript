//Texto adicional en el bloc de notas typescript
    const persona = "Miguel"

    const test = {
        name: "Pepe",
        age: 25
    }

    function saludar (name: string){
        console.log (`Hola ${name}`)
    }

    function saludar2 ({name, age } : {name: string, age: number }): number{
        console.log(`Hola ${name}, tienes ${age} años`)
        return age
    }

// Tipar una funcion se declara el tipo de name y sayHi no retorna nada por eso se declara como void, void se utiliza cuando no me importa lo que devuelva, si al final hay un return no provoca error
   const sayHiFromFunction = (fn: (name: string ) => void) => {
    fn('Miguel')
   }

   const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
   }

   sayHiFromFunction(sayHi)


//Formas de declarar una arrow function

    const sumar = (a: number, b: number): number => {
        return a + b
    }

    const restar: (a:number, b:number) => number = (a,b) => {
        return a-b
    }

//Never Sabes que nunca va a terminar de ejecutarse la función 
//Void va a llegar al final

    function throwError(message:string): never {
        throw new Error(message);
    }

//Inferencia funciones anonimas según el contexto, no ocupo declarar fruit

    const fruits = ["Apple", "Banana", "Orange"];

    fruits.forEach(fruit => {
        console.log(fruit);
    })


    // let hero = {
    //     age: 1500,
    //     name: "Thor"
    // }

    // function createHero(name: string, age: number){
    //     return {name, age}
    // }

    // const thor = createHero("Thor", 1500)

//Type Alias Siempre en PascalCase

    // type Hero ={
    //     name: string,
    //     age: number
    // }

    // let hero: Hero = {
    //     name: "Thor",
    //     age: 1500
    // }

    // function createHero(hero: Hero): Hero{
    //     const {name, age} = hero
    //     return {name, age}
    // }

    // const thor = createHero({name:"Thor",age:1500})

//optional Properties
// Para prevenir la mutabilidad se puede agregar la propiedad readonly

// Template Union

    // type HeroId = `${string}-${string}-${string}-${string}-${string}`

    // type Hero ={
    // readonly id?: HeroId
    //     name: string
    //     age: number
    //     //El ? sirve para colocar como opcional esa propiedad del objeto
    //     isActive?: boolean
    // }

    // let hero: Hero = {
    //     name: "Thor",
    //     age: 1500
    // }

    // function createHero(hero: Hero): Hero{
    //     const {name, age} = hero
    //     return {
    //         id: crypto.randomUUID(), // Esto concuerda con el tipo de dato que se le proporcionó mas arriba
    //         name, 
    //         age, 
    //         isActive: true}
    // }

    // const thor = createHero({name:"Thor",age:1500})

    // thor.id?.toString()

    // thor.id = 2234214142412; Ya no se puede modificar por la propiedad readnoly

// No se convierte en algo inmutable porque al compilar a JS, si que se pasará el id de thor, por esto es bueno estar atento a los errores en typescript
// Si se desea volver inmutable se debe agregar Object.freeze

// template union types

    type HexadecimalColor = `#${string}`

    // const color: HexadecimalColor = '0033ff' //hexadecimales error por no concordar con el formato

    const color2: HexadecimalColor = '#0033ff' //hexadecimales

//Union types

    // type HeroId = `${string}-${string}-${string}-${string}-${string}`

//Tipo de union
    // type HeroPowerScale = 'local' | "planetary" | "galactic" | "universal" | "multiversal"

    // let ann : string | number

    
    // type Hero ={
    // readonly id?: HeroId
    //     name: string
    //     age: number
    //     //El ? sirve para colocar como opcional esa propiedad del objeto
    //     isActive?: boolean
    //     powerScale?: HeroPowerScale
    // }

    // let hero: Hero = {
    //     name: "Thor",
    //     age: 1500
    // }

    // function createHero(hero: Hero): Hero{
    //     const {name, age} = hero
    //     return {
    //         id: crypto.randomUUID(), // Esto concuerda con el tipo de dato que se le proporcionó mas arriba
    //         name, 
    //         age, 
    //         isActive: true}
    // }

    // const thor = createHero({name:"Thor",age:1500})
    // thor.powerScale = 'galactic'

// Intersection types

    // type HeroId = `${string}-${string}-${string}-${string}-${string}`

    // type HeroBasicInfo = {
    //     name: string,
    //     age: number
    // }

    // type HeroProperties ={
    // readonly id?: HeroId
    //     name: string
    //     age: number
    //     isActive?: boolean
    // }

    // type Hero = HeroBasicInfo & HeroProperties;

    // let hero: Hero = {
    //     name: "Thor",
    //     age: 1500
    // }

    // function createHero(input: HeroBasicInfo): Hero{
    //     const {name, age} = input
    //     return {
    //         id: crypto.randomUUID(), // Esto concuerda con el tipo de dato que se le proporcionó mas arriba
    //         name, 
    //         age, 
    //         isActive: true}
    // }

    // const thor = createHero({name:"Thor",age:1500})

// Type Indexing

type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string 
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}

//Type from value

    // const address = {
    //     planet: 'Earth',
    //     city: 'Madrid'
    // }

    // type Address = typeof address

    // const addressTwitch: Address  = {
    //     planet: "Mars",
    //     city: "Twitch"
    // }

//Type from function return

function createAddress (){
    return {
        planet: 'Tierra',
        city: 'Barcelona'
    }
}

type Address = ReturnType<typeof createAddress>

// Arrays string[] o Array<string> ejemplo 

const languages: (string | number )[] = [] // la inferencia de typescript cree que siempre queremos el array vacio
languages.push('JavaScript')
languages.push('Java')
languages.push('Python')
languages.push(2)


//Matrices y tuplas

/*
 [
    ['X', 'O', 'X'], // <-- string[]
    ['O', 'X', 'O'], // <-- string[]
    ['X', 'O', 'X'] // <-- string[]
 ]
 */
// [][] array de arrays

 type CellValue = 'X'| 'O' | ""

 //Tupla
 //Una tupla es un array que tiene un límite fijado en longitud
 type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
 ]

 const gameBoard: GameBoard = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'],
    ['X', 'O', 'X'] 
 ]

//  gameBoard[0][1] = "234143214214" // Esto no debería de hacerse por eso se coloca CellValue
// Aun existe un problema el cual nos permite agregar mas de 3 columnas


//Ejemplo de Tupla

    // type State = [string, (newName: string) => void]

    // const [hero, setHero] : State = useState('thor')

    //type Rgb = [number, number, number]

    //const rgb: RGB = [2,4,5]