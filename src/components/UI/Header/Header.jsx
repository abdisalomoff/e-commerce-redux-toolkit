import { Link } from "react-router-dom"; 
import { GiKnifeFork } from "react-icons/gi"; 
import { FaCartArrowDown  } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <header className="bg-green-500 text-white py-4 px-28 sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <GiKnifeFork size={30} className="mr-2" /> The Meal DB
        </Link>
        <nav>
          <ul className="flex items-center space-x-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/specials">Specials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link className="flex items-center gap-2" to="/cart">
                  <FaCartArrowDown  size={18} />
                  <span >{cartItems.length}</span>
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


