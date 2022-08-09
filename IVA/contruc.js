
class Producto {
    constructor(precio, cantidad) {
      this.precio = parseFloat(precio);
      this.cantidad = parseInt(cantidad);
    }
  
    calcularPrecioconIva() {
      return this.precio * 1.21 * this.cantidad;
    }
  }
  

  class Carrito {
    constructor() {
      this.productos = [];
      this.total = 0;
    }
  
    agregarProducto(precio, cantidad) {
      const producto = new Producto(precio, cantidad);
      this.productos.push(producto);
    }
  
    calcularTotalconIva() {
      let total = 0;
  
      for (const producto of this.productos) {
        total = total + producto.calcularPrecioconIva();
      }
      this.total = total;
  
      return total;
    }
  }
  
  

  const carrito = new Carrito();
  
  let precio;
  let cantidad;
  let continuar = false;
  do {
    
    precio = prompt('Ingrese precio de producto');
    cantidad = prompt('Ingrese cantidad');
  
    
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    
    carrito.agregarProducto(precio, cantidad);
  } while(continuar);
  
  

  alert('El total a pagar es: ' + carrito.calcularTotalconIva());

  //datos cliente 


  const avengersString = localStorage.getItem('clientes');
const avengersParseado = JSON.parse(avengersString);

const form = document.getElementById('ingreso-cliente');

const agregarElementoATabla = (cliente) => {
  const tabla = document.getElementById('tabla');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${cliente.alias}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.edad}</td>
  `;
  tabla.append(tr);
}

if (clientesParseado) {
  clientesParseado.forEach((cliente) => {
    agregarElementoATabla(cliente);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formulario = e.target;

  const cliente = {
    alias: formulario[0].value,
    nombre: formulario[1].value,
    edad: parseInt(formulario[2].value)
  }

  if (cliente.edad < 18) {
    const p = document.getElementById('mensaje-error');
    p.innerText = 'Tienes que ser mayor de 18 años para registrarte';
    return;
  }

  agregarElementoATabla(cliente);

  const clientesString = localStorage.getItem('clientes');
  let clientesParseado = [];
  if (clientesString) {
    clientesParseado = JSON.parse(clientesString);
  }

  clientesParseado.push(cliente);

  localStorage.setItem('clientes', JSON.stringify(clientesParseado));

  document.querySelectorAll('#ingreso-cliente input').forEach((input) => {
    input.value = '';
  });
});