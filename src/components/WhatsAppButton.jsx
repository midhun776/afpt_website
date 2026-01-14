import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919000000000"; // Replace with actual number
    const message = "Hi AFPT Kochi, I'm interested in enrolling for defence training.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-500 whitespace-nowrap font-semibold">
                Chat with us
            </span>
            <MessageCircle size={24} />
        </a>
    );
};

export default WhatsAppButton;
