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

    ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    /////////////////////////PARTE 2///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////


//Enums

//En Js

    // const ErrorTypes = {
    //     NOT_FOUND: "notFound",
    //     UNAUTHORIZED: 'unauthorized',
    //     FORBIDDEN: 'forbidden'
    // }

    // function mostrarMensaje(tipoDeError){
    //     if(tipoDeError === ErrorTypes.NOT_FOUND){
    //         console.log('No se encuentra el recurso')
    //     }else if(tipoDeError === ErrorTypes.UNAUTHORIZED){
    //         console.log('No tienes permisos para acceder')
    //     }else if(tipoDeError === ErrorTypes.FORBIDDEN){
    //         console.log("No tienes permisos para acceder")
    //     }
// }

//En TypeScript utilizamos Enums
// Los ENUMS se utilizan para una colección de datos finita

//Usar const cada que se pueda en enum para reducir el tamaño del código y utilizar solo enum cuando estas creando una biblioteca una librería o parte de un componente que se consumirá en el exterior 

//Al agregar la const en el enum cambia la compilación
const enum ERROR_TYPES { // Si no se les asigna ningún valor por defecto se les asigna un indice
    NOT_FOUND = 'notFound', // 0
    UNAUTHORIZED = 'unauthorized', // 1
    FORBIDDEN  = 'forbidden'// 2
}

function mostrarMensaje(tipoDeError: ERROR_TYPES){
    if(tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    }else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log("No tienes permisos para acceder")
    }
}

// Aserciones de tipos

    //Ejemplo 
    // si usamos en el get as HTMLCanvasElement TypeScript se tiene que fiar de nosostros 

    const canvas = document.getElementById('span') 

    // Al realizar la busqueda por el getElement nos retorna:
    // Null
    // HTMLElement 

    // ??? como sabe TypeScript que realmente  estás recuperando un elemento <canvas />?
    // Es mejor utilizar la asercion después de la comprobación 

    // es inferencia -> TypeScript se da cuenta que dentro del if
    // ya solo el canvas va a poder ser un HTMLCanvasElement
    if(canvas instanceof HTMLCanvasElement){ // TS deduce que canvas es un HTMLCanvasElement
        const ctx = (canvas).getContext('2d')
    }

    // De esta manera el codigo funciona correctamente, ya que aunque se recupera un span, como no se cumple la condición dentro del if el codigo dentro del bloque no se ejecuta   

// Fetching de datos en TypeScript

//TS no sabe que tipo de dato es

export type GitHubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export enum DefaultBranch {
    Dev = "dev",
    Main = "main",
    Master = "master",
}

export enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}


const API_URL = "https://api.github.com/search/repositories?q=javascript"

const response = await fetch(API_URL)

if(!response.ok){
    throw new Error ('Request failed')
}

// Data es un tipo de dato any, tenemos que darle type para que TypeScript sepa que tipos de datos esperamos
// La mejor forma es ir a la API --- copiar la respuesta -- e ir a Quicktype, pegar la respuesta y traerla para tener todo tipado
const data = await response.json() as GitHubAPIResponse;

data.items.map(repo => {
     // Al colocar repo. nos salen las opciones disponibles para el tipo de dato, esto es una buena señal ya que en ese momento TS ya reconoce el tipo de dato
    return{
        name: repo.name,
        id: repo.id,
        url: repo.html_url
    }
})
// Transformar un archivo en un modulo: 2 opciones.


// 1 Cambiar extensión .ts a .mts , 2 con empaquetadores

// TypeScript ZOD realiza validaciones de tipo ---> TS detecta los tipos y además los valida en tiempo de ejecución 
