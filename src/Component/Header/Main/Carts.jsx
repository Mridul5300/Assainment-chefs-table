
import PropTypes from 'prop-types';
import Cart from './Card/Cart';

const Carts = ({handle}) => {
     



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
                         handle.map(cart => <Cart key={cart.id}cart={cart}></Cart>)
                    }
               </div>
               </div>
                <hr />
               <div>
                    <h2 className='text-2xl mb-3 text-center'>Currently cooking:</h2>
               </div>
               <hr />
               {/* current section */}
               <div  className='flex gap-12'>
               <h2>Name</h2>
               <h3>Time</h3>
               <h4>Calories</h4>
               </div>
               <hr />
          </div>
     );
};

Carts.propTypes = {
     handle:PropTypes.array
}

export default Carts;