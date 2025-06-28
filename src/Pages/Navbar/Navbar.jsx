import { Link } from 'react-router';  
import logo from '../../assets/logo/logo2.png';
import ThemeToggle from '../../Themes/ThemeToggle';

function Navbar() {
  return (
    <div className="text-primary-content  my-4">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* Left - Logo and Name */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-accent transition duration-200"
          >
            <img className="h-10 w-16 object-contain" src={logo} alt="Logo" />
            <span className="text-2xl font-bold text-primary-content">Naeem</span>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-base">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-accent">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </nav>

        {/* Right - Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="btn bg-secondary text-primary hover:bg-secondary hover:text-secondary-content border-none px-6 py-3 rounded-lg transition duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
