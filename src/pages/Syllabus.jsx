import { motion } from 'framer-motion';
import { Book, Dumbbell, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Syllabus = () => {
    const modules = [
        {
            title: 'Written Exam Training',
            subtitle: 'Academic Excellence',
            icon: <Book className="text-primary" size={28} />,
            items: [
                { name: 'Mathematics', detail: 'Arithmetic, Algebra, Geometry, Trigonometry, and Basic Statistics.' },
                { name: 'English', detail: 'Grammar, Vocabulary, Comprehension, Précis Writing, and Usage.' },
                { name: 'General Knowledge', detail: 'Current Affairs, Indian History, Geography, Civics, and Defence awareness.' },
                { name: 'Reasoning & Aptitude', detail: 'Verbal/Non-Verbal Reasoning, Logical Deductions, and Problem Solving.' },
            ]
        },
        {
            title: 'Physical Training',
            subtitle: 'Endurance & Strength',
            icon: <Dumbbell className="text-primary" size={28} />,
            items: [
                { name: 'Running & Stamina', detail: '1.6km, 5km timed runs and interval training for peak cardiovascular health.' },
                { name: 'Strength Drills', detail: 'Push-ups, Pull-ups, Sit-ups, and Squats with correct form and high repetition.' },
                { name: 'Agility & Obstacles', detail: 'Zig-zag balance, high jump, long jump, and specialized obstacle course training.' },
                { name: 'Military Drills', detail: 'Basic posture, marching, and discipline-oriented group physical exercises.' },
            ]
        },
        {
            title: 'Interview / SSB Preparation',
            subtitle: 'Officer Like Qualities (OLQ)',
            icon: <MessageSquare className="text-primary" size={28} />,
            items: [
                { name: 'Communication Skills', detail: 'Public speaking, voice modulation, and effective expression training.' },
                { name: 'Group Discussions', detail: 'Active listening, logical arguing, and leadership in collaborative settings.' },
                { name: 'Psychological Mirroring', detail: 'TAT, WAT, SRT training and personality traits assessment.' },
                { name: 'Leadership & Confidence', detail: 'Body language, eye contact, and situational leadership exercises.' },
            ]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <section className="container mx-auto px-4">
                <SectionHeader
    title={
      <>
        Syllabus & Training
      </>
    }
    subtitle={
      <span className="block mb-2 text-green-600 uppercase tracking-widest text-xs font-bold">
        Structured Development
      </span>
    }
  />
                <p className="max-w-3xl mx-auto text-center text-slate-600 mb-16 text-lg">
                    Our curriculum is meticulously crafted to meet the latest standards of defence selection boards. We ensure balanced growth across academic, physical, and psychological parameters.
                </p>

                <div className="space-y-12">
                    {modules.map((module, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100"
                        >
                            <div className="bg-slate-900 p-8 text-white flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary p-3 rounded-2xl">
                                        {module.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{module.title}</h3>
                                        <p className="text-primary-light text-sm font-semibold uppercase tracking-widest">{module.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {module.items.map((item, i) => (
                                    <div key={i} className="flex space-x-4 group">
                                        <div className="mt-1">
                                            <CheckCircle className="text-primary opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Brochure Section */}
            <section className="mt-20 py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-200">
                        <h3 className="text-3xl font-bold mb-4">Detailed Training Brochure</h3>
                        <p className="text-slate-600 mb-8">
                            Download our complete 2026 syllabus guide and training schedule for all courses in PDF format.
                        </p>
                        <button className="btn-primary flex items-center space-x-2 mx-auto px-12 py-5 text-xl">
                            <span>Download Syllabus PDF</span>
                            <ChevronDown size={24} />
                        </button>
                        <p className="text-xs text-slate-400 mt-4 uppercase tracking-[0.2em] font-bold">File size: 2.4 MB | Updated: Jan 2026</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Syllabus;
