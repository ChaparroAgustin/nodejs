"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findeHeroById = void 0;
const heroes_1 = require("../data/heroes");
const findeHeroById = (id) => {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
exports.findeHeroById = findeHeroById;
