
import PropTypes from 'prop-types';


function Cart({cart}) {
     const {recipe_name, preparing_time, calories} = cart;
     return (
          <div className='flex gap-4'>
               <h3>{recipe_name}</h3>
               <span>{preparing_time}</span>
               <span>{calories}</span>
          </div>
     );
}

Cart.propTypes = {
     cart:PropTypes.object
};


export default Cart;