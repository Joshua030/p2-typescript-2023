export interface MagicCardDescription {
  name: string;
  type: string;
  manaCost: string;
  rarity: string;
  number: string;
  id: string;
  imageUrl: string;
  text:string
}


export const createCard = (data:MagicCardDescription) => {
  
    const html = `<div class="card wf">
    <div class="img-container">
    <img src="${data.imageUrl}" alt="${data.name}">
    </div>
    <div class="description-container"><p>${data.text}</p></div>
    <div class="information-container">
      <h2>${data.name}</h2>
      <div class="information-label"><h3>Type</h3></div>
      <p>${data.type}</p>
      <div class="information-label"><h3>Rarity</h3></div>
      <p>${data.rarity}</p>
      <div class="information-label"><h3>mana cost</h3></div>
      <p>${data.manaCost}</p>
      <a href="#" id="back-button">...Back</a>
    </div>
    </div>
     <script>
     const backButton =document.getElementById("back-button");
       backButton.addEventListener("click", (event) => {
         event.preventDefault();
         window.history.back();
       });
    </script>`
  
  return html;
}