//Factory function es una funcion que crea un funcion
const { getAge, getUUID } = require('../Plugins')
const obj = {name: 'John', birthdate:'1991-10-01' };




const buildPerson = ({name, birthdate}) => {


    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }

}


const jonh = buildPerson(obj);

console.log(jonh);

