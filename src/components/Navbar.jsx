import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/afpt_logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Syllabus', path: '/syllabus' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${(scrolled || !isHomePage) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ${(scrolled || !isHomePage) ? 'bg-primary' : 'bg-white'}`}>
                            <img src={logo} alt="AFPT Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className={`text-xl font-bold font-display block leading-none ${(scrolled || !isHomePage) ? 'text-primary' : 'text-white'}`}>AFPT</span>
                            <span className={`text-[10px] uppercase tracking-widest font-semibold block ${(scrolled || !isHomePage) ? 'text-slate-600' : 'text-white/80'}`}>KOCHI</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${location.pathname === link.path
                                    ? (scrolled || !isHomePage) ? 'text-primary' : 'text-defence-saffron'
                                    : (scrolled || !isHomePage) ? 'text-slate-700' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn-primary py-2 px-5 text-sm uppercase tracking-wider">
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={` ${(scrolled || !isHomePage) ? 'text-primary' : 'text-white'} hover:opacity-80`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-4 text-base font-bold uppercase tracking-wide border-b border-slate-100 ${location.pathname === link.path ? 'text-primary' : 'text-slate-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center btn-primary"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
