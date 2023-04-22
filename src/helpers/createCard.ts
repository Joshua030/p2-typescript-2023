// export interface MagicCardDescription {
//   name: string;
//   type: string;
//   manaCost: string;
//   rarity: string;
//   number: string;
//   id: string;
//   imageUrl: string;
//   text:string
// }


export const createCard = () => {
  const html = `
  <div class="loading-message">...LOADING</div>
    <div class="card wf loading" id="main-card-1989">
      <div class="img-container">
        <img src="" alt="">
      </div>
      <div class="description-container"><p id="container-text-1990"></p></div>
      <div class="information-container">
        <h2 id="card-content-name"></h2>
        <div class="information-label"><h3>Type</h3></div>
        <p></p>
        <div class="information-label"><h3>Rarity</h3></div>
        <p id="card-rarity"></p>
        <div class="information-label"><h3>mana cost</h3></div>
        <p id="card-mana"></p>
        <a href="#" id="back-button">...Back</a>
      </div>
    </div>
    <script>
      const backButton = document.getElementById("back-button");
      backButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.history.back();
      });

      window.addEventListener('load', async function() {  
        const id = localStorage.getItem('id');
        const response = await fetch('http://api.magicthegathering.io/v1/cards/'+ id);
        const json = await response.json();
        const data = json.card;
       
        document.querySelector('img').src = data.imageUrl;
        document.querySelector('.img-container img').alt = data.name;
        document.getElementById('container-text-1990').textContent = data.text;
        document.getElementById('card-content-name').textContent = data.name;
        document.getElementById('card-rarity').textContent = data.rarity;
        document.getElementById('card-mana').textContent = data.manaCost;

        const loadingMessage = document.querySelector('.loading-message');
       const card = document.querySelector('.card');
       loadingMessage.style.display = 'none';
       card.classList.remove('loading');
      });
    </script>
  `;

  return html;
}