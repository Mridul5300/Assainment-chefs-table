


const Carts = () => {
     return (
          <div className='mr-28 p-8 '>
               <h2 className='text-2xl mb-3 text-center'>Want to cook:</h2>
               <hr />
               <div>
               <div className="overflow-x-auto">
          <table className="table">
               {/* header */}
              <thead>
               <tr>
               <th></th>
               <th>Name</th>
               <th>Time</th>
               <th>Calories</th>
               </tr>
               </thead>
               <tbody>
               {/* <!-- row 1 --> */}
               <tr>
               <th>1</th>
               <td></td>
               <td></td>
               <td></td>
               </tr>
               {/* <!-- row 2 --> */}
               <tr>
               <th>2</th>
               <td></td>
               <td></td>
               <td></td>
               </tr>
               {/* row 3 */}
               <tr>
               <th>3</th>
               <td></td>
               <td></td>
               <td></td>
               </tr>
               {/* row 4 */}
               <tr>
               <th>4</th>
               <td></td>
               <td></td>
               <td></td>
               </tr>
               {/* row 5 */}
               <tr>
               <th>5</th>
               <td></td>
               <td></td>
               <td></td>
               </tr>
               </tbody>
               </table>
               </div>
               </div>
          </div>
     );
};

export default Carts;