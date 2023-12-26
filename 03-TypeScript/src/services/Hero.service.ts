
import { heroes } from '../data/heroes';

export const findeHeroById = (id: number) => {
    return heroes.find ( (hero)=> hero.id === id);
}