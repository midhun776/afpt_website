import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
    const categories = ['All', 'Training', 'Classroom', 'Physical', 'Events'];

    const images = [
        { url: 'https://images.unsplash.com/photo-1590403371191-729935f00e54?auto=format&fit=crop&q=80&w=600', cat: 'Physical', title: 'Endurance Training' },
        { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600', cat: 'Classroom', title: 'Written Exam Coaching' },
        { url: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&q=80&w=600', cat: 'Training', title: 'Uniform Prep' },
        { url: 'https://images.unsplash.com/photo-1444676632488-26a136c45b9b?auto=format&fit=crop&q=80&w=600', cat: 'Physical', title: 'Drill Session' },
        { url: 'https://images.unsplash.com/photo-1585800454359-59eb4e1564ce?auto=format&fit=crop&q=80&w=600', cat: 'Events', title: 'Motivational Talk' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600', cat: 'Classroom', title: 'Mock Test' },
        { url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600', cat: 'Training', title: 'Spirit of Defence' },
        { url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600', cat: 'Physical', title: 'Strength Drills' },
        { url: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=600', cat: 'Events', title: 'Passing Out Guidance' },
    ];

    return (
        <div className="pt-24 pb-20">
            <section className="container mx-auto px-4">
                <SectionHeader title="Training Gallery" subtitle="Life at AFPT" />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${cat === 'All' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{img.cat}</span>
                                <h4 className="text-xl font-bold text-white">{img.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Motivational Quote */}
            <section className="mt-20 py-20 bg-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary-light text-3xl font-display font-bold italic max-w-4xl mx-auto leading-relaxed">
                        "We don't just capture moments, we capture the transformation of character and the fire of patriotism."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
