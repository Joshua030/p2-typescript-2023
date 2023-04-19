import { MagicCard } from "../useFetch";

export const createCards = (data:MagicCard[]) => {
    let html = "";
    for (const item of data) {
      html += `<div class="MagicCard">
      <img src="${item.imageUrl}" alt="${item.name}">
      <div>
        <h2>${item.name}</h2>
        <p>${item.manaCost}</p>
      </div>
      </div>`;
    }
    return html;
}
