interface MagicCard {
  name: string;
  type: string;
  manaCost: string;
  rarity: string;
  number: string;
  id: string;
  imageUrl: string;
}

export const getData = async () => {
  const response = await fetch(
    `http://api.magicthegathering.io/v1/cards?page-size=50`
  );
  const json = await response.json();
  const data: MagicCard[] = json.cards;
  const filterData = data.map(({ name,manaCost,type,imageUrl,rarity,number,id }) => (
    {
      name,
      manaCost,
      type,
      rarity,
      number,
      id,
      imageUrl

    }
  ));
  console.log({ filterData });
};
