import { MagicCard } from "../useFetch";

export const createCards = (data:MagicCard[]) => {
    let html = "";
    for (const item of data) {
      html += `<div class="card">
      <div class="img-container">
      <img src="${item.imageUrl}" alt="${item.name}">
      </div>
      <div class="information-container">
        <h2>${item.name}</h2>
        <div class="information-label"><h3>Type</h3></div>
        <p>${item.type}</p>
        <div class="information-label"><h3>Rarity</h3></div>
        <p>${item.rarity}</p>
        <div class="information-label"><h3>mana cost</h3></div>
        <p>${item.manaCost}</p>
        <a href="/card.html?id=${item.id}">...Details</a>
      </div>
      </div>`;
    }
    return html;
}

// name,
// manaCost,
// type,
// rarity,
// number,
// id,
// imageUrl,