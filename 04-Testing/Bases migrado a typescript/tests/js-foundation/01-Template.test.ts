import { emailTemplate } from "../../src/js-foundation/01-template"


describe('Template', () => {
    test('EmailTemplate should contain a gretting', () =>{

        expect( emailTemplate ).toContain('Hi, ');
    });
    test('EmailTemplate should cotain {{name}} and {{orderId}}', ()=>{

        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    })
});
