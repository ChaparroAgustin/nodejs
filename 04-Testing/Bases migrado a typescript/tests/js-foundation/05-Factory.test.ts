import { buildMakePerson } from "../../src/js-foundation/05-factory";


describe('05-Factory', () =>{
    
    const getUUID = () => '1234';
    const getAge = () => 35;
    test('buildMakePerson should return a function', ()=>{

        const makePerson = buildMakePerson({getUUID, getAge});

        expect( typeof makePerson).toBe('function')

    });

    test('makeperson should return a person', ()=>{

        const makePerson = buildMakePerson({getUUID, getAge});
        const Agustin = makePerson({ name: 'Agustin', birthdate: '01-10-1991' });

        expect(Agustin).toEqual({
            id:'1234',
            name: 'Agustin',
            birthdate:'01-10-1991',
            age: 35
        })

    });

});

