import { MagicCardDescription } from "./helpers/createCard";

export interface MagicCard {
  name: string;
  type: string;
  manaCost: string;
  rarity: string;
  number: string;
  id: string;
  imageUrl: string;
}

export const getData = async (size: number) => {
  try {
    const response = await fetch(
      `http://api.magicthegathering.io/v1/cards?page-size=${size}`
    );
    const json = await response.json();
    const data: MagicCard[]= json.cards;
    if(data){
 const filterData = data?.filter(({imageUrl})=>imageUrl!== undefined)
      const mapData = filterData?.map(
        ({ name, manaCost, type, imageUrl, rarity, number, id }) => ({
          name,
          manaCost,
          type,
          rarity,
          number,
          id,
          imageUrl,
        })
      );
      return mapData ;
    } 
    return [{  name: "",
      type: "",
      manaCost: "",
      rarity: "",
      number: "",
      id: "",
      imageUrl: ""}];
    
  } catch (error) {
    console.error({ error });
    return [{  name: "",
    type: "",
    manaCost: "",
    rarity: "",
    number: "",
    id: "",
    imageUrl: ""}];
  }
};

export const getDataById =async () =>{
  const response = await fetch(
    `http://api.magicthegathering.io/v1/cards/8ac972b5-9f6e-5cc8-91c3-b9a40a98232e`
  );
  const json = await response.json();
  const data: MagicCardDescription= json.card;
return data;
 
}
