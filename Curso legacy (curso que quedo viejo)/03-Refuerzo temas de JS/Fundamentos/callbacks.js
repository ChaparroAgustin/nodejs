//Esto es un callback con una funcion de flecha

// setTimeout( () => {
//   console.log("Hola Mundo");
// }, 1000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id, // esto significa que cree una variable id con la propiedad id que recibe la funcion esto es equivalente a id:id
        nombre: "Agustín",
    };
    setTimeout(() => {
        callback(usuario);
    }, 1500);
};

getUsuarioById(10, (user) => {
    console.log(user.id, user.nombre.toUpperCase());
});



