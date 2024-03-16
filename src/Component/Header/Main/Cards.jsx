import { useEffect, useState } from "react";
import Card from "./Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleEvent}) => {
          const [cards, setCards] = useState([]);

          useEffect(() =>{
               fetch('Chefs.json')
               .then(res => res.json())
               .then(data => setCards(data))
          },[])
     return (
          <div className="grid grid-cols-2">
               {
                    cards.map(card => <Card
                              key={card.id}
                          card={card}
                         handleEvent={handleEvent}
                          ></Card>)
               }
          </div>
     );
};

Cards.propTypes ={
     handleEvent:PropTypes.func
}

export default Cards;