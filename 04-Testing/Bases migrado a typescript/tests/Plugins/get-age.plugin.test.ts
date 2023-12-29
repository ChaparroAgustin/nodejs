import { getAge } from "../../src/plugins";

describe('Plugins/get-age',() =>{

    test('getAge should return the age of a person', () =>{

        const birthdate = '1991-10-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');


    });

    test ('getAge should return current age', () =>{
        const birthdate = '1991-10-01';
        const age = getAge(birthdate);

        const calcaulateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calcaulateAge);
    });

    test('getAge should return 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1991);
        const birthdate = '1991-10-01';
        const age = getAge(birthdate);

        expect( age ).toBe(0);

    });

});