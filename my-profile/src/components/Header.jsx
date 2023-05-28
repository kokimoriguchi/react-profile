import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import ProfileDetail from "./ProfileDetail";
import Portfolio from "./Portfolio";

const Header = () => {
  return (
    <BrowserRouter>
      <header className="bg-gray-800 text-white sticky top-0 z-50">
        <nav className="flex items-center justify-between container mx-auto py-4">
          <div className="text-xl font-bold">MY PROFILE</div>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">
              <Link to="/Home">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/ProfileDetail">Profile</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ProfileDetail" element={<ProfileDetail />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Header;
