import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
    const categories = ['All', 'Training', 'Classroom', 'Physical', 'Events'];

    const images = [
        { url: 'https://images.pexels.com/photos/163443/war-desert-guns-gunshow-163443.jpeg?cs=srgb&dl=pexels-pixabay-163443.jpg&fm=jpg', cat: 'Physical', title: 'Endurance Training' },
        { url: 'https://w0.peakpx.com/wallpaper/724/101/HD-wallpaper-special-forces-indian-army.jpg', cat: 'Classroom', title: 'Written Exam Coaching' },
        { url: 'https://wallpapers.com/images/hd/marching-indian-army-sjs3875ri3m6tmi5.jpg', cat: 'Training', title: 'Uniform Prep' },
        { url: 'https://wallpapercave.com/wp/wp3499071.jpg', cat: 'Physical', title: 'Drill Session' },
        { url: 'https://w0.peakpx.com/wallpaper/274/931/HD-wallpaper-navy-fleet-transport-graphy.jpg', cat: 'Events', title: 'Motivational Talk' },
        { url: 'https://images.pexels.com/photos/29850312/pexels-photo-29850312/free-photo-of-indian-naval-officers-marching-in-formation.jpeg', cat: 'Classroom', title: 'Mock Test' },
        { url: 'https://images.pexels.com/photos/20258/pexels-photo.jpg?cs=srgb&dl=pexels-chaikong2511-20258.jpg&fm=jpg', cat: 'Training', title: 'Spirit of Defence' },
        { url: 'https://images.pexels.com/photos/13315962/pexels-photo-13315962.jpeg?cs=srgb&dl=pexels-pramodtiwari-13315962.jpg&fm=jpg', cat: 'Physical', title: 'Strength Drills' },
        { url: 'https://w0.peakpx.com/wallpaper/723/743/HD-wallpaper-tear-work-of-indian-army-indian-army.jpg', cat: 'Events', title: 'Passing Out Guidance' },
    ];

    return (
        <div className="pt-24 pb-20">
            <section className="container mx-auto px-4">
                <SectionHeader
    title={
      <>
        Training Gallery
      </>
    }
    subtitle={
      <span className="block mb-2 text-green-600 uppercase tracking-widest text-xs font-bold">
        Life at AFPT
      </span>
    }
  />

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
