import {CreateTable} from "./create-table.use-case"



// Should return a string with the multiplication table for base and limit provided

    describe('Create-Table.use-case',()=>(

        it('should return a string with the multiplication table when base and limit are provided', () => {
            const createTable = new CreateTable();
            const options = { base: 2, limit: 5 };
            const expectedOutput = '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n';
            const result = createTable.execute(options);
            const rows = result.split('\n').length;
            expect(result).toBe(expectedOutput);
            expect(createTable).toBeInstanceOf(CreateTable);
            expect(result).toContain('2 x 1 = 2');
            expect( rows ).toBe(5);
          })

          

    ));