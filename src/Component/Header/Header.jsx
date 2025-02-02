import { VscAccount } from "react-icons/vsc";


const Header = () => {
     return (
          <div>
               {/* Navbar section */}
          <div className="navbar container mx-auto px-20 ">
          <div className="navbar-start">
          <div className="dropdown">
               <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </div>
               <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <h2>Home</h2>
               <h2>Recipes</h2>
               <h2>About</h2>
               <h2>Search</h2>
               </ul>
          </div>
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
               <h2>Home</h2>
               <h2>Recipes</h2>
               <h2>About</h2>
               <h2>Search</h2>
          </ul>
          </div>
          <div className="navbar-end">
          <input type="text" placeholder='Search'  className="input input-bordered w-full max-w-xs mr-5 rounded-full" />
          <span className="mr-2 text-green-400 text-5xl"><VscAccount></VscAccount></span>
          </div>
          </div>
          {/* Hero Banner Section */}
               <div className="container mx-w-auto">
               <div className="hero min-h-screen  " style={{backgroundImage: `url(https://i.ibb.co/Y0j5mZM/louis-hansel-v3-Ol-BE6-fh-U-unsplash.jpg)`,backgroundPosition:'center'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                         <h1 className="mb-5 text-3xl font-extrabold">Discover an exceptional cooking class tailored for you!</h1>
                         <p className="mb-5">The Teaching Kitchen is a year-long nuts-and-bolts food business course designed to share our model and best practices. Led by Teaching Kitchen Executive Chef Evelyn García and Chef Brianne Ross, the tailored curriculum, goal setting, kitchen consultations, technical assistance.</p>
                         <button className="btn bg-green-500 rounded-full">Explore Now</button>
                         <button className=" btn bg-inherit text-white rounded-full mx-4">Our Feedback</button>
                    </div>
                    </div>
                    </div>
               </div>
               {/* dynamic api site */}
               <div className="text-center mt-10">
                    <h2 className="text-5xl">Our Recipes</h2>
                    <p className="mt-4">Cooking, the act of using heat to prepare food for consumption. <br />Cooking is as old as civilization itself, and observers have perceived it as both an art and a science.</p>
              </div>  
          </div>
     );
};

export default Header;