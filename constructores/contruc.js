// this
function Actor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.edad = parseInt(edad);
    this.saludar = () => {
        return 'Hola, soy' + this.nombre
    } 
    
}



const actor1 = new Actor('will', 'smith', 53);
console.log(actor1);
console.log(actor1.saludar());

const actor2 = new Actor('Cris', 'Evans', 41);
console.log(actor2);
console.log(actor2.saludar());

const miString = new String('Hola');
console.log(miString.length);
console.log(miString.toUpperCase());


console.log('nombre' in actor1);
console.log('nacionalidad' in actor1);

for (const atributo in actor1){
    console.log(actor1[atributo]);
}

