//Interfaces otra forma de definir contratos que tienen que seguir los objetos es intercambiable en un 95% con el type Alias
// La interface moldea cual es el contrato que tener nuestro objeto, es como el dibujo que está definiendo cómo es la forma de este objeto
// Definir el contrato de un objeto para especificar sus propiedades y métodos
interface Heroe {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Heroe = {
    id: "1",
    name: "Spiderman",
    age: 30,
    saludar: () => {
        console.log("Hola")
    }
}

// Las interfaces pueden estar anidadas

interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface Zapatilla extends Producto {
    talla: number
}


interface CarritoDeCompras{
    totalPrice: number
    productos: (Producto | Zapatilla[])
}

// 2 formas Las interfaces pueden escribirse una vez y luego otra vez y no falla, en cambio los types no se pueden duplicar
interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
}

interface CarritoOps {
    clear () : void   
}

const carrito : CarritoDeCompras = {
    totalPrice : 100,
    productos: [
        {
            id: 1,
            nombre: "Producto 1",
            precio: 100,
            quantity: 1,
            talla: 4
        }
    ]

}


// Los tipos pueden implementar esto, pero una diferencia ligera es a la hora de extender, las interfaces pueden hacer uso de la palabra reservada extends, y los tipos solo pueden usar el | o && 

// Como consejo cuando utilizar tipos y cuando utilizar interfaces
/*
Interfaces:
Cuando tratas de definir un objeto o un método de objeto o la forma de una clase, debido al beneficio del extends
Tipos:
Para todo lo demás -- ALIAS, DEFINIR tuplas, definir uniones, sobrecargar funciones
 */

// NARROWING
// Cuidado porque cuando objeto es string si que puede checarse su length, pero cuando es numero no
// Por tanto debes realizar un embudo === narrowing
function mostrarLongitud (objeto: number | string){
    if(typeof objeto === "string"){
    return objeto.length
    }

    return objeto.toString().length;
}

mostrarLongitud('1')

// Otro ejemplo

interface Mario {
    nombre: string,
    saltar: () => void
}

interface Sonic {
    nombre: string, 
    correr: () => void
}

type Personaje = Mario | Sonic

//type guard
// dejame comprobar si personaje es Sonic
// y esta función determina si es sonic o no
// De ser posible hay que evitar los type Guard ya que vuelven nuestro código mas verboso
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}
