//Factory function es una funcion que crea un funcion

const obj = {name: 'John', birthdate:'1991-10-01' };


const buildPerson = ({name, birthdate}) => {


    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }

}


const jonh = buildPerson(obj);

console.log(jonh);

