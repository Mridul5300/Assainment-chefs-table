import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";

const Card = ({card,  handleEvent}) => {
     const{recipe_name, recipe_image, short_description,ingredients,preparing_time,calories}=card
     return (
               <div className='ml-10 my-1 p-3 border-2 border-inherit gap-2 rounded-md'>
               <img className='w-[700px] h-[300px] rounded-md' src={recipe_image} alt={`all cover picture${recipe_name}`} />
               <h1  className='text-2xl'>{recipe_name}</h1>
               <p className=''>{short_description}</p>
               <hr />
               <div>ingredients : ({ingredients.length})
                    {
                         ingredients.map((ingrdt, idx) => <li key={idx}><a href="">{ingrdt}</a></li>)
                    }
               </div>
               <hr />
               <div className='flex gap-2'>
                    <p className='my-1'><IoMdTime></IoMdTime></p>
                    <span>{preparing_time}</span>
                    <p className='my-1'><RiFireLine></RiFireLine></p>
                    <span>{calories}</span>
               </div>
               <button onClick={() => handleEvent (card)} className='btn bg-green-400 text-black my-3 '>Want to Cook</button>
          </div>
     );
};

Card.propTypes = {
     card:PropTypes.object,
     handleEvent:PropTypes.func
};

export default Card;