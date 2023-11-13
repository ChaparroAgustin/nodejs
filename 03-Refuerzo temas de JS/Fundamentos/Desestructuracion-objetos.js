const deadpool = {
  nombre: "Wade",
  apellido: "Wiston",
  poder: "Regeneracion",
  //edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

//console.log(deadpoll.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  nombre = "Agustin";
  console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [, , h3] = heroes;

console.log(h3);
