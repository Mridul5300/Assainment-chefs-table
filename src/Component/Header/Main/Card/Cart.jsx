
import PropTypes from 'prop-types';


function Cart({cart}) {
     const {recipe_name, preparing_time, calories,recipe_id} = cart;
     return (
          <div className='flex gap-3 bg-gray-200 my-5'>
                    <h3 className='-ml-4 font-bold'>{recipe_id}.</h3>
               <h3 className='-ml-2'>{recipe_name}</h3>
               <span>{preparing_time}</span>
               <span>{calories}</span>
          </div>
     );
}

Cart.propTypes = {
     cart:PropTypes.object
};


export default Cart;