import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Shield className="text-primary" size={32} />
                            <span className="text-2xl font-bold font-display tracking-tight">AFPT KOCHI</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Preparing the next generation of disciplined leaders for the Indian Armed Forces and Uniformed Services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-slate-300 hover:text-white">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">About AFPT</Link></li>
                            <li><Link to="/programs" className="text-slate-400 hover:text-primary transition-colors">Programs</Link></li>
                            <li><Link to="/syllabus" className="text-slate-400 hover:text-primary transition-colors">Training Modules</Link></li>
                            <li><Link to="/gallery" className="text-slate-400 hover:text-primary transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span>3rd Floor, Chakos Tower, Metro Pillar 656-657, Jews Street, Padma Pullepady Road, Kochi – 682035</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span>+91 90000 00000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span>info@afptkochi.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Training Focus */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Our Focus</h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {['Indian Army', 'Indian Navy', 'Air Force', 'BSF', 'CRPF', 'CISF', 'Police Services', 'SSB Prep'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-slate-400 border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Armed Forces Pre-Recruitment Training (AFPT). All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
