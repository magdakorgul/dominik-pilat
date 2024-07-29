import "../App.css";

const Navbar = ({backgroundClass}) => {


return(
<nav className={`navbar ${backgroundClass}`}>
  <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto pb-1 pt-0 text-transform: uppercase">
    <a href="https://google.com/" className="flex space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Dominik Piłat</span>
    </a>
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${backgroundClass} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
  <li>
    <a href="/design" className="block py-2 px-2 text-white rounded md:text-white md:p-0" aria-current="page">Design</a>
  </li>
  <li>
    <a href="/paintings" className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Paintings</a>
  </li>
  <li>
    <a href="/branding" className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Branding</a>
  </li>
  <li>
    <a href="/about" className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">About</a>
  </li>
  <li>
    <a href="/contact" className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">Contact</a>
  </li>
</ul>

    </div>
  </div>
</nav>
)

};
export default Navbar;