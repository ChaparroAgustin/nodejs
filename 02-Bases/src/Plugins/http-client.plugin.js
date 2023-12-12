
const axios = require('axios');


// esto es mi patron adaptador 
const httpClientPlugin = {
///UTILIZACION DE FETCH
    // get: async(url) => {
    //     const resp = await fetch (url);
    //     const data = await resp.json();
    //     return data;
    // },

    // post: async(url, body ) =>{},
    // put:  async(url, body ) =>{},
    // delete:  async(url, body ) =>{},
    
///UTILIZACION DE AXIOS
    get: async (url) => {
        try {
            const resp = await axios.get(url);
            //const { data } = await axios.get(url); ESTO ES DESESTRUCTURACIÓN. Y SE HACE UN  return data;
            return resp.data;
        } catch (error) {
            console.error(error);
        }
  }

};



module.exports = {
    http: httpClientPlugin,
}