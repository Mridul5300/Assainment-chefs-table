import { useEffect, useState } from "react";
import Card from "./Card/Card";


const Cards = () => {
          const [cards, setCards] = useState([]);

          useEffect(() =>{
               fetch('Chefs.json')
               .then(res => res.json())
               .then(data => setCards(data))
          },[])
     return (
          <div className="md:w-2/3 grid grid-cols-2">
               {
                    cards.map(card => <Card
                              key={card.id}
                          card={card}></Card>)
               }
          </div>
     );
};

export default Cards;