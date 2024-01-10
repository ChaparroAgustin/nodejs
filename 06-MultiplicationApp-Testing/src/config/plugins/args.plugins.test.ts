
const runComand = async (args: string[]) => {

    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./args.plugins')

    return yarg;
}



describe('args.plugins.test', () => {

    const originalArgv = process.argv;

    beforeEach(()=> {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('should return default values', async () => {

        const argv = await runComand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: './outputs',
            e: 'txt'
        }))
    })


    test('Should return configuration with custom values',async () => {
        
    const argv = await runComand(['-b', '3', '-l', '5', '-s', '-n', 'test', '-d', './test/args.plugin']);

    expect(argv).toEqual(expect.objectContaining({
        b:3,
        l:5,
        s:true,
        n:'test',
        d:'./test/args.plugin',
    }));
    
    });

})



