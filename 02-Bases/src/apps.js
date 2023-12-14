console.clear();
// const { emailTemplate } = require('./js-Foundation/01-Template');

// const { getUserById } = require('./js-Foundation/03-Callbacks');

// require('./js-Foundation/02-Destructuring');
// // console.log(emailTemplate);

// require('./js-Foundation/04-Arrow');
// require('./js-Foundation/05-Factory');

// const id = 2;

// getUserById(id, (error, user) => {
     
//     if (error) {
//         throw new Error(error);
//     }
     
//     console.log(user);

// })
/////////// !!!! Factory funcions 
// const { getAge, getUUID } = require('./Plugins')

// const { buildMakePerson } = require ('./js-Foundation/05-Factory')

// const makePerson = buildMakePerson ({ getUUID, getAge })

// const obj = {name: 'John', birthdate:'1991-10-01' };

// const john = makePerson( obj );

// console.log({ john });

//-----------promesis--------------------


//const getPokemonById = require ('./js-Foundation/06-Promesis');

const { buildLogger } = require('./Plugins')

const logger = buildLogger('apps.js');

logger.log('hola mundo');
logger.error('esto es algo malo')


// getPokemonById(4)
//     .then( (pokemon) => console.log({ pokemon}))
//     .catch( ( err ) => console.log(err))
//     .finally( () => console.log('Finalmente'));





//token de acceso
//Publicas 

