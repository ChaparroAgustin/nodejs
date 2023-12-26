import { findeHeroById } from "./services/Hero.service";

console.clear();

const hero = findeHeroById(3);

console.log( hero?.name ?? 'Not hero found!');

