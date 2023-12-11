const getPokemonById = async( id ) => {//devuelve una promesa.....
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    // return fetch( url )
    //     .then( ( response ) => response.json())
    //     //.then( () => {throw new Error ('Pokemon not found')} )
    //     .then( ( pokemon ) => pokemon.name);
    const resp = await fetch (url);
    const pokemon = await resp.json();
    
    //throw new Error("pokemon no existe");

    return pokemon.name;

}



module.exports = getPokemonById;