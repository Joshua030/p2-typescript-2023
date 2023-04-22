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
        <a href="/card.html?id=${item.id}" id="detail-button-${item.id}">...Details</a>
      </div>
      </div>`;
    }

    let htmlScript = `${html}
    <script>
      const key = 'id';
      const anchors = document.querySelectorAll('[id^="detail-button-"]');
      for (const anchor of anchors) {
        anchor.addEventListener('click', (event) => {
          event.preventDefault();
          const itemId = anchor.getAttribute('id').split('-').slice(2).join("-");
          localStorage.setItem(key, itemId);
          window.location.href = anchor.href;
        });
      }
    </script>`;

  return htmlScript;
}

// name,
// manaCost,
// type,
// rarity,
// number,
// id,
// imageUrl,