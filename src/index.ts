import { render, renderDtaById } from "./render";
import { getData, getDataById } from "./useFetch";
import { writeFile } from "fs/promises";


const buildHtml= async() =>{
  const data= await getData(50);
  const html = render(data);
  await writeFile('cards.html', html);
  const dataById= await getDataById()
  const htmlCard = renderDtaById(dataById)
  await writeFile('card.html', htmlCard);
  getDataById()
  
}

buildHtml();
