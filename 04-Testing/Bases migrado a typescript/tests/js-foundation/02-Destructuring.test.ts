import { characters } from "../../src/js-foundation/02-destructuring";

describe('02-Destructuring',() => {
    test('Destructuring should contain',()=>{
        expect(characters).toContain('Batman');
        expect(characters).toContain('Superman');
    });

    test('Fisrt character shoudl be flash and second superman', () => {
        const [flash, superman] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
        
    });
});

