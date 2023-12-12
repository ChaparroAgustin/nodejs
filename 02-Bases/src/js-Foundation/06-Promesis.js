const { http } = require ('../Plugins')




const getPokemonById = async( id ) => {//devuelve una promesa.....
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await http.get(url);
    // return fetch( url )
    //     .then( ( response ) => response.json())
    //     //.then( () => {throw new Error ('Pokemon not found')} )
    //     .then( ( pokemon ) => pokemon.name);
    
    //throw new Error("pokemon no existe");

    return pokemon.name;

}



module.exports = getPokemonById;