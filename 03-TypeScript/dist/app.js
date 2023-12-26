"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_service_1 = require("./services/Hero.service");
console.clear();
const hero = (0, Hero_service_1.findeHeroById)(3);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Not hero found!');
