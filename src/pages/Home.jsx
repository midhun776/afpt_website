import { motion } from 'framer-motion';
import { Shield, Award, Users, Crosshair, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
    const highlights = [
        {
            title: 'Written Exam Training',
            description: 'Comprehensive coaching for Indian Army, Navy, Air Force entrance exams.',
            icon: <Award className="text-white" size={24} />,
            color: 'bg-primary'
        },
        {
            title: 'Physical Fitness Training',
            description: 'Rigorous physical drills and endurance training by expert instructors.',
            icon: <Crosshair className="text-white" size={24} />,
            color: 'bg-defence-olive'
        },
        {
            title: 'SSB & Interview Coaching',
            description: 'Personality development and interview preparation for leadership roles.',
            icon: <Shield className="text-white" size={24} />,
            color: 'bg-defence-navy'
        },
        {
            title: 'Experienced Trainers',
            description: 'Guidance from retired defence personnel and professional educators.',
            icon: <Users className="text-white" size={24} />,
            color: 'bg-defence-saffron'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center pt-20">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1590403371191-729935f00e54?auto=format&fit=crop&q=80&w=2000"
                        alt="Defence Training"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-4 bg-primary/20 backdrop-blur-md border border-primary text-primary font-bold text-sm tracking-widest uppercase mb-6 rounded-full">
                            Academy of Future Defenders
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
                            Train with <span className="text-primary italic">Discipline</span>. <br />
                            Serve with <span className="text-defence-saffron italic">Pride</span>.
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            ARMED FORCES PRE-RECRUITMENT TRAINING (AFPT) Kochi provides world-class coaching for aspirants dedicated to serving the nation in the Indian Armed Forces.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="btn-primary text-center text-lg px-10">
                                Enroll Now
                            </Link>
                            <Link to="/programs" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-center text-lg px-10">
                                View Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group border-b-4 border-primary/20 hover:border-primary"
                            >
                                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <Link to="/programs" className="text-primary font-bold flex items-center text-sm group-hover:gap-2 transition-all">
                                    Learn More <ChevronRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Motto/Vision Banner */}
            <section className="py-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute right-0 top-0 opacity-10 scale-150 rotate-12">
                    <Shield size={400} />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                        "Your journey from an Aspirant to a <span className="text-slate-900">Soldier</span> starts here."
                    </h2>
                    <p className="max-w-2xl mx-auto text-primary-light text-lg mb-10">
                        Join Kochi's most trusted pre-recruitment training academy. We don't just teach for exams, we build your character for the uniform.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Success Rate', value: '95%' },
                            { label: 'Trained Students', value: '2500+' },
                            { label: 'Expert Mentors', value: '20+' },
                            { label: 'Years Experience', value: '12+' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-extrabold mb-2 font-display">{stat.value}</div>
                                <div className="text-primary-light uppercase tracking-widest text-xs font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick About Section */}
            <section className="section-padding">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                                alt="Classroom Training"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-900 -z-10 rounded-full"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-defence-saffron/20 -z-10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="lg:w-1/2">
                        <SectionHeader
                            title="Excellence in Defence Coaching"
                            subtitle="Why AFPT?"
                            centered={false}
                        />
                        <p className="text-slate-600 mb-8 text-lg">
                            AFPT Kochi is dedicated to identifying and nurturing potential defence aspirants. Our structured approach combines academic excellence with high-intensity physical training.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Specialized coaching for all uniformed services',
                                'Retired defence professionals as instructors',
                                'Regular mock tests and physical assessment',
                                'Focus on psychological and personality traits'
                            ].map((point, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span className="font-semibold text-slate-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn-primary">
                            Discover Our Story
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
