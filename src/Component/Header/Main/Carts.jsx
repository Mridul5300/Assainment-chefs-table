
import PropTypes from 'prop-types';
import Cart from './Card/Cart';

const Carts = ({handle,  currentHandle, currentcoook}) => {
     



     return (
          <div className='mr-28 p-8 '>
               {/* went section */}
               <h2 className='text-2xl mb-3 text-center'>Want to cook : {handle.length}</h2>
               <hr />
               <div>
                    <div className='flex md:gap-10 gap-20'>
                         <h2>Name</h2>
                         <h3 className='ml-3'>Time</h3>
                         <h4>Calories</h4>
                    </div>
                    <hr />
               <div>
               {
                         handle.map(cart => <Cart key={cart.id}   currentHandle={currentHandle} cart={cart}></Cart>)
                    }
               </div>
               </div>
               <hr />
               <h2 className='text-2xl mb-3 text-center'>Currently cooking:{currentcoook.length}</h2>
               <hr />
               <div>
                    <div className='flex md:gap-10 gap-20'>
                         <h2>Name</h2>
                         <h3 className='ml-3'>Time</h3>
                         <h4>Calories</h4>
                    </div>
                    </div>
                    <hr />
                {
                    currentcoook.map((cart,idx) => <Cart key={idx} cart={cart} ></Cart>)
                }
          </div>
     );
};

Carts.propTypes = {
     handle:PropTypes.array,
     currentcoook : PropTypes.array,
     currentHandle : PropTypes.func
}

export default Carts;