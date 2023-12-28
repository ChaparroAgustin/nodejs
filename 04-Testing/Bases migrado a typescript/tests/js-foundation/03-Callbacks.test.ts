
import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('03-Callbacks',() => {
    test('getUserId should return John Doe', (done) => {

        const id = 1;

        getUserById(id, (err, user) => {

            expect(err).toBeUndefined();
            expect(user?.id).toBe(1);
            expect(user?.name).toBe("John Doe");

            done();

        });



    });
});