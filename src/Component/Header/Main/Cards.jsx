import { useEffect, useState } from "react";
import Card from "./Card/Card";
import PropTypes from 'prop-types';
 
const Cards = ({handleEvent,currentHandle}) => {
          const [cards, setCards] = useState([]);

          useEffect(() =>{
               fetch('Chefs.json')
               .then(res => res.json())
               .then(data => setCards(data))
          },[])
     return (
          <div className="grid grid-cols-1 md:grid-cols-2">
               {
                    cards.map(card => <Card
                         key={card.recipe_id}
                          card={card}
                         handleEvent={handleEvent}
                         currentHandle={currentHandle}
                          ></Card>)
               }
          </div>
     );
};

Cards.propTypes ={
     handleEvent:PropTypes.func,
     currentHandle : PropTypes.func
}

export default Cards;