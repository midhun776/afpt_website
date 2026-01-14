import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true, dark = false }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={`uppercase tracking-[0.3em] font-bold text-sm ${dark ? 'text-slate-400' : 'text-primary'}`}>
                    {subtitle}
                </span>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl mt-2 relative inline-block ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {title}
                    <span className="absolute -bottom-4 left-0 w-24 h-1.5 bg-primary"></span>
                    {centered && <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-primary"></span>}
                </h2>
            </motion.div>
        </div>
    );
};

export default SectionHeader;
