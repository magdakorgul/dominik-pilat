import "../App.css";

const Navbar = ({backgroundClass}) => {


return(
<nav className={`navbar ${backgroundClass}`}>
<div className="max-w-screen-xl ml-auto mr-auto flex items-center justify-between pt-0 pb-6 text-transform: uppercase">
    <a href="/home">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Dominik Piłat</span>
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${backgroundClass} md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0`}>


    <li>
    <a href="/design" className="block  text-white rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0" aria-current="page">Design</a>
  </li>
  <li>
    <a href="/paintings" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Paintings</a>
  </li>
  <li>
    <a href="/branding" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Branding</a>
  </li>
  <li>
    <a href="/about" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">About</a>
  </li>
  <li className="pr-0">
    <a href="/contact" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Contact</a>
  </li>
</ul>

    </div>
  </div>
</nav>
)

};
export default Navbar;