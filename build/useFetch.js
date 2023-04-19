"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://api.magicthegathering.io/v1/cards?page-size=50`);
    const json = yield response.json();
    const data = json.cards;
    const filterData = data.map(({ name, manaCost, type, imageUrl, rarity, number, id }) => ({
        name,
        manaCost,
        type,
        rarity,
        number,
        id,
        imageUrl
    }));
    console.log({ filterData });
});
exports.getData = getData;
