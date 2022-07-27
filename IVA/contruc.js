
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