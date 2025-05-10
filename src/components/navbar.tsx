import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border p-0 margin-0 z-50 bg-white fixed top-0 right-0 left-0 w-full border-b-2 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Name */}
        <div className="text-2xl text-sky-500 font-bold">AyoNgopi</div>

        {/* Button Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-sky-500 hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex-col mr-2 sm:mr-0 lg:flex-row lg:flex items-center space-x-6 absolute lg:static top-20 right-0 bg-white lg:bg-transparent w-64 lg:w-auto p-6 lg:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="my-2 lg:my-0">
            <Link
              to="/"
              className="hover:text-blue-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/about"
              className="hover:text-blue-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/menu"
              className="hover:text-blue-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/contact"
              className="hover:text-blue-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="mt-4 lg:mt-0">
            <Button
              className="px-8 py-2 rounded-full bg-sky-400 text-white cursor-pointer hover:bg-sky-500 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Reservasi
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
