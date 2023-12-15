console.clear();

const heroes = [
    {
        id:1,
        name: 'IronMan',
        owner: 'Marvel'
    },
    {
        id:2,
        name: 'SpiderMan',
        owner: 'Marvel'
    },
    {
        id:3,
        name: 'Batman',
        owner: 'DC'
    },
];


const findeHeroById = (id) => {
    return heroes.find ( (hero)=> hero.id === id);
}

const hero = findeHeroById(1);

console.log(hero?.name)
