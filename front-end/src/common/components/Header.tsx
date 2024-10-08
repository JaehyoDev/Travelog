import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full h-12 px-8 flex justify-between items-center bg-header shawdow-bottom">
      <Link to="/" className="text-2xl font-bold text-primary">
        ✈️ Travelog
      </Link>
      <Link to="/profile" className="text-2xl font-bold text-white ml-4">
        내 정보
      </Link>
    </nav>
  );
};

export default Header;
