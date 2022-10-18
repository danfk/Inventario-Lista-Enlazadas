class Producto {
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.next = null;
    }

    info(){
        return this.codigo + " " + this.nombre + " " + this.cantidad + " " + " $" + this.costo;
    }
}

class Inventario {
    constructor(){
        this.primero = null;
    }

    agregar(product){
        if (this.primero==null)
        this.primero=product;
      else{
        let temp=this.primero;
        while (temp.next!=null)
          temp=temp.next;
        temp.next=product;
      }
    }

    buscar(codigo){
        let long = 0;
        let temp = this.primero;
        while (temp.next!=null){
            long++;
            temp=temp.next;
        }
        let temporal = this.primero;
        for (let i = 0; i < long; i++){
            if (codigo == temporal.codigo){      
                return temporal;
            } else {
                temporal = temporal.next;
            }
        }
        return null;
    }

    listar(){
        let res="";
      let temp=this.primero;
      while(temp!=null){
          res+=temp.numero + "  ";
          temp=temp.next;
      }
      return res;
    }

    lrec(product){
        if (product.next==null){
            return product.info();
        } else {
            return product.info() + this.lrec(product.next);
        }
    }

    listarInverso(){
        if (this.primero==null){
            return " ";
        } else {
            return lrec(this.primero);
        }
    }

    insertar(position, product){
        if (this.primero==null)
        this.primero=product;
      else{
        let tempo=this.primero;
        let i = 0;
        while (i < position)
          tempo=tempo.next;
          tempo.next=product;
          i++;
      }
    }
}

let btnAgregar = document.getElementById("agregar");
let btnBuscar = document.getElementById("buscar");
let btnListar = document.getElementById("listar");
let btnListarInverso = document.getElementById('listarInvesro');
let btnInsertar = document.getElementById("insertar");

let resultado = document.getElementById("resultado");

btnAgregar.addEventListener('click', agregar);
btnBuscar.addEventListener('click', buscar);
btnListar.addEventListener('click', listar);
btnListarInverso.addEventListener('click', listarInverso);
btnInsertar.addEventListener('click', insertar);

let i = new Inventario();


function agregar(codigo, nombre, cantidad, costo){
    codigo = parseFloat(document.getElementById("codigo").value);
    nombre = parseFloat(document.getElementById("nombre").value);
    cantidad = parseFloat(document.getElementById("cantidad").value);
    costo = parseFloat(document.getElementById("costo").value);
    let nuevo = new Producto(codigo, nombre, cantidad, costo);
    i.agregar(nuevo);
    resultado.innerHTML = "Se agrego 1 producto al inventario"
}

function buscar(codigo){
    codigo = parseFloat(document.getElementById("codigo").value);
    resultado.innerHTML = i.buscar(codigo);
}

function listar(){
    resultado.innerHTML = i.listar();
}

function listarInverso(){
    resultado.innerHTML = i.listarInverso();
}

function insertar(position, nuevo){
    position = parseFloat(document.getElementById('position'));
    nuevo = parseFloat(document.getElementById('codigo'));
    resultado.innerHTML = i.insertar(position, nuevo);
}

module.exports = {agregar, buscar, listar, listarInverso, insertar};

//Pruebas de consola
//let p = new Producto(1, "Ladrillo", 500, 4);
//console.log(p.info());
//console.log(i.listar());
//console.log(i.listarInverso);