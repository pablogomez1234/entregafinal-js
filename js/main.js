const listaSuper = [];

let entrada;
do {
  entrada = prompt('Ingrese un producto de la libreria. Ingrese FIN para terminar');
  if (entrada != 'FIN') {
    listaSuper.push(entrada);
  }
} while (entrada != 'FIN');


alert('La lista tiene ' + listaSuper.length + ' productos.');

alert('La lista tiene:\n' + listaSuper.join('\n'));



class Producto {
  constructor(precio, cantidad) {
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
  }
}