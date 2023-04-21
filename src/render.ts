import { createCards } from "./helpers/createCards";
import { head } from "./helpers/head";
import { MagicCard } from "./useFetch";

export const render = (data:MagicCard[]) => {
  return `
<html>
 ${head()}
  <body>
  <div class="cards-container">
${createCards(data)}
</div>
  </body>
</html>`;
};
