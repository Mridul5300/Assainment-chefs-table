
import PropTypes from 'prop-types';


function Cart({cart,clickMe}) {
     const {recipe_name, preparing_time, calories,recipe_id} = cart;
     return (
          <div className='flex gap-5 bg-gray-200 my-5 '>
               <h3 className='-ml-4 font-bold'>{recipe_id}.</h3>
               <h3 className='-ml-2'>{recipe_name}</h3>
               <span>{preparing_time}</span>
               <span className='ml-5'>{calories}</span>
               <button onClick={() => clickMe(cart) }  className='btn bg-green-500 text-black -mr-6'>Preparing</button>
               
          </div>
     );
}

Cart.propTypes = {
     cart:PropTypes.object,
     currentHandle : PropTypes.func
     
};


export default Cart;