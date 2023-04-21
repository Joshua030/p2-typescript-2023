import { render } from "./render";
import { getData } from "./useFetch";
import { writeFile } from "fs/promises";


const buildHtml= async() =>{
  const data= await getData(50);
  const html = render(data);
  await writeFile('cards.html', html);
  await writeFile('card.html', 'prueba');
}

buildHtml();
