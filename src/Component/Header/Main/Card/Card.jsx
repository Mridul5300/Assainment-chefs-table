

import PropTypes from 'prop-types';

const Card = ({card}) => {
     const{recipe_name, recipe_image, short_description,ingredients,preparing_time,calories}=card
     return (
               <div className='ml-10 my-1 p-3 border-2 border-inherit gap-2 rounded-md'>
               <img className='w-[700px] h-[300px] rounded-md' src={recipe_image} alt={`all cover picture${recipe_name}`} />
               <h1  className='text-2xl'>{recipe_name}</h1>
               <p className=''>{short_description}</p>
               <hr />
               <div>ingredients : ({ingredients.length})
                    {
                         ingredients.map(ingrdt => <li><a href="">{ingrdt}</a></li>)
                    }
               </div>
               <div className='flex gap-2'>
                    <span>{preparing_time}</span>
                    <span>{calories}</span>
               </div>
               <button className='btn bg-green-400 text-black my-3 '>Want to Cook</button>
          </div>
     );
};

Card.propTypes = {
     card:PropTypes.object
};

export default Card;