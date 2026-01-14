import { motion } from 'framer-motion';
import { Target, Shield, BookOpen, UserCheck, Zap, Anchor, Plane, Landmark, HardHat } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Programs = () => {
    const programs = [
        {
            title: 'Indian Army Preparation',
            subtitle: 'Join the world\'s 2nd largest standing army',
            icon: <Target className="text-white" size={32} />,
            color: 'bg-[#4B5320]', // Army Green
            details: ['GD, Soldier Technical', 'Clerk / SKT', 'Nursing Asst', 'Tradesman'],
            image: 'https://wallpapers.com/images/hd/marching-indian-army-sjs3875ri3m6tmi5.jpg'
        },
        {
            title: 'Indian Navy Preparation',
            subtitle: 'Guard the vast maritime boundaries',
            icon: <Anchor className="text-white" size={32} />,
            color: 'bg-[#000080]', // Navy Blue
            details: ['SSR / AA', 'MR (Matric Recruit)', 'Technical Branch', 'Physical Proficiency'],
            image: 'https://images.pexels.com/photos/29850312/pexels-photo-29850312/free-photo-of-indian-naval-officers-marching-in-formation.jpeg'
        },
        {
            title: 'Indian Air Force Preparation',
            subtitle: 'Touch the sky with glory',
            icon: <Plane className="text-white" size={32} />,
            color: 'bg-[#5D8AA8]', // Airforce Blue
            details: ['Airmen X & Y Group', 'Technical Trades', 'Non-Technical Trades', 'AFCAT Guidance'],
            image: 'https://wallpapercave.com/wp/wp3499071.jpg'
        },
        {
            title: 'Paramilitary Forces',
            subtitle: 'Protect Internal Security',
            icon: <Landmark className="text-white" size={32} />,
            color: 'bg-[#8B4513]', // Saddle Brown
            details: ['SSC GD (BSF, CRPF, CISF)', 'ITBP / SSB', 'Assam Rifles', 'Constable / SI Prep'],
            image: 'https://w0.peakpx.com/wallpaper/724/101/HD-wallpaper-special-forces-indian-army.jpg'
        },
        {
            title: 'Police & Uniformed Services',
            subtitle: 'Serve the community directly',
            icon: <Shield className="text-white" size={32} />,
            color: 'bg-[#1E3A8A]', // Dark Blue
            details: ['Kerala Police Constable', 'Fire Force', 'Excise & Forest Guard', 'SI Selection'],
            image: 'https://whataftercollege.com/wp-content/uploads/2018/05/IPS-Selection.jpg'
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-4">
                    <SectionHeader
    title={
      <>
        Programs Offered
      </>
    }
    subtitle={
      <span className="block mb-2 text-green-600 uppercase tracking-widest text-xs font-bold">
        Specialized Coaching
      </span>
    }
  />
                    <p className="max-w-3xl mx-auto text-center text-slate-600 mb-16 text-lg">
                        We provide targeted coaching for various wings of the defence and paramilitary forces. Our programs are designed to cover every aspect of the selection process.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-slate-100 flex flex-col"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className={`absolute top-4 left-4 p-3 rounded-2xl ${p.color} shadow-lg`}>
                                        {p.icon}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{p.title}</h3>
                                    <p className="text-primary font-semibold text-sm mb-6 uppercase tracking-wider">{p.subtitle}</p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 p-1 bg-green-50 rounded text-primary"><BookOpen size={16} /></div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm">Written Exam Coaching</p>
                                                <p className="text-slate-500 text-sm">Targeted syllabus coverage with regular mock tests.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 p-1 bg-amber-50 rounded text-amber-600"><Zap size={16} /></div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm">Physical Training</p>
                                                <p className="text-slate-500 text-sm">Endurance and strength drills tailored for the specific force.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="mt-1 p-1 bg-blue-50 rounded text-blue-600"><UserCheck size={16} /></div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm">Interview Prep</p>
                                                <p className="text-slate-500 text-sm">Personality development and communication skills.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                                        {p.details.map((tag, j) => (
                                            <span key={j} className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course CTA */}
            <section className="container mx-auto px-4 mt-20">
                <div className="bg-primary rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="lg:max-w-2xl relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Not sure which wing is right for you?</h2>
                        <p className="text-primary-light text-lg mb-0 italic">
                            "Get a free counseling session with our defence experts to chart your career path."
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 relative z-10">
                        <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                            Book Free Counseling
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
