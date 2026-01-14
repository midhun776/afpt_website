import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Flag, Users, Trophy } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
    const values = [
        { title: 'Discipline', icon: <ShieldCheck size={32} />, desc: 'The bedrock of defence services. We instill unwavering discipline in every action.' },
        { title: 'Dedication', icon: <Target size={32} />, desc: 'Committed to the success of our students through tireless mentoring and support.' },
        { title: 'Leadership', icon: <Users size={32} />, desc: 'Building the next generation of commanders who can lead with integrity and courage.' },
        { title: 'Patriotism', icon: <Flag size={32} />, desc: 'Fostering a deep-rooted love for the nation through service and sacrifice.' },
    ];

    return (
        <div className="pt-24">
            {/* Breadcrumb/Header Area */}
            <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-10 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">About AFPT</h1>
                    <p className="text-primary-light uppercase tracking-[0.3em] font-bold">Pride of Kochi | Spirit of Defence</p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="section-padding">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Transforming Aspirants into <span className="text-primary">Professionals</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Armed Forces Pre-Recruitment Training (AFPT) was established in Kochi with a single vision: to bridge the gap between civilian life and the prestigious uniform services of India.
                            </p>
                            <p>
                                We understand that the path to the Indian Army, Navy, or Air Force requires more than just academic knowledge. It demands physical grit, psychological resilience, and a mindset of excellence.
                            </p>
                            <p>
                                Our training methodology is designed by experts who have walked the path themselves, ensuring that every aspirant at AFPT receives the most authentic and effective preparation possible.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                                <p className="text-primary font-bold text-3xl mb-1">1500+</p>
                                <p className="text-slate-500 font-semibold uppercase text-xs">Selections to Date</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-defence-navy">
                                <p className="text-defence-navy font-bold text-3xl mb-1">12+</p>
                                <p className="text-slate-500 font-semibold uppercase text-xs">Expert Instructors</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <img src="https://www.shutterstock.com/editorial/image-editorial/M1TcQ5y4M1T1cd11ODQ3NTg=/indian-army-training-cadets-display-their-martial-440nw-14087892l.jpg" alt="Training" className="rounded-2xl shadow-lg mt-8" />
                        <img src="https://images.pexels.com/photos/163443/war-desert-guns-gunshow-163443.jpeg?cs=srgb&dl=pexels-pixabay-163443.jpg&fm=jpg" alt="Drills" className="rounded-2xl shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be the premier institute in India that shapes the future leadership of our Armed Forces, known for producing disciplined, confident, and highly competent defence professionals.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-defence-navy/10 text-defence-navy rounded-full flex items-center justify-center mb-6">
                                <Trophy size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To provide holistic training that combines rigorous physical conditioning, comprehensive academic coaching, and psychological mentoring, empower every aspirant to achieve their uniform dreams.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <SectionHeader
    title={
      <>
        Our Core Values
      </>
    }
    subtitle={
      <span className="block mb-2 text-green-600 uppercase tracking-widest text-xs font-bold">
        What defines us
      </span>
    }
  />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="group p-8 text-center hover:bg-primary transition-all duration-500 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl">
                            <div className="mb-6 text-primary group-hover:text-white transition-colors flex justify-center">
                                {v.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{v.title}</h4>
                            <p className="text-slate-500 group-hover:text-white/80 transition-colors leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Message Area */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <SectionHeader title="Message from the Director" subtitle="Leadership Perspective" dark />
                    <blockquote className="text-2xl italic font-display text-slate-300 mb-8 leading-relaxed">
                        "We don't just prepare you for an exam; we prepare you for a lifetime of service. Every drill, every lecture, and every interaction at AFPT is geared toward building the character required to lead the men and women of our nation's finest services."
                    </blockquote>
                    <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
                    <p className="font-bold text-xl uppercase tracking-widest text-primary">Director, AFPT Kochi</p>
                    <p className="text-slate-500 mt-2 font-semibold">Ex-Service Professional</p>
                </div>
            </section>
        </div>
    );
};

export default About;
