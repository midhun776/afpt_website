import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
    return (
        <div className="pt-24 pb-20">
            <section className="container mx-auto px-4">
                <SectionHeader
                    title={
                        <>
                            Contact AFPT Kochi
                        </>
                    }
                    subtitle={
                        <span className="block mb-2 text-green-600 uppercase tracking-widest text-xs font-bold">
                            Get in Touch
                        </span>
                    }
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-slate-900">Visit Our <span className="text-primary">Academy</span></h3>
                        <p className="text-slate-600 mb-10 text-lg">
                            Have questions about our training programs or enrollment process? Feel free to reach out to us or visit our Kochi center for a personal orientation.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            <div className="flex space-x-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-wide text-sm">Location</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        3rd Floor, Chakos Tower, Metro Pillar 656-657, Jews Street, Padma Pullepady Road, Kochi – 682035, Kerala, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex space-x-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-wide text-sm">Call/WhatsApp</h4>
                                    <p className="text-slate-500 text-sm">+91 90000 00000</p>
                                    <p className="text-slate-500 text-sm">+91 91111 00000</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-wide text-sm">Email Us</h4>
                                    <p className="text-slate-500 text-sm">info@afptkochi.com</p>
                                    <p className="text-slate-500 text-sm">admissions@afpt.in</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-wide text-sm">Working Hours</h4>
                                    <p className="text-slate-500 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p className="text-slate-500 text-sm italic text-primary">Closed on Sundays</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="h-80 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.133292415132!2d76.28291407512168!3d9.97232379013159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d39e3f89973%3A0xc6cb1c36093d56ce!2sJews%20St%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="AFPT Kochi Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Enrollment Inquiry</h3>
                            <p className="text-slate-500 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Full Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Phone Number</label>
                                    <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 00000 00000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Desired Program</label>
                                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>Select a course</option>
                                    <option>Indian Army Prep</option>
                                    <option>Indian Navy Prep</option>
                                    <option>Air Force Prep</option>
                                    <option>Paramilitary Forces</option>
                                    <option>Police Services</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Message</label>
                                <textarea rows="4" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <div className="p-4 bg-defence-saffron/10 rounded-2xl border border-defence-saffron/20 flex items-start space-x-3 text-defence-saffron text-xs">
                                <ShieldAlert size={18} className="shrink-0" />
                                <p className="font-semibold italic">By submitting this form, you agree to be contacted by AFPT Kochi via call or message regarding your inquiry.</p>
                            </div>

                            <button className="btn-primary w-full flex items-center justify-center space-x-3 py-5 text-xl">
                                <span>Send Message</span>
                                <Send size={24} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
