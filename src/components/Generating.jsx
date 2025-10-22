import { loading } from "../assets";
import { useLanguage } from "../contexts/LanguageContext";

const Generating = ({ className, message }) => {
  const { language } = useLanguage();
  
  // Default messages in both languages
  const defaultMessages = {
    en: "Boosting your business...",
    es: "Impulsando tu negocio..."
  };
  
  // Use provided message or default based on language
  const displayMessage = message || defaultMessages[language];
  return (
    <div
      className={`flex items-center h-[2.5rem] px-4 bg-n-8/90 backdrop-blur-sm rounded-lg ${
        className || ""
      } text-sm font-medium text-n-1 border border-n-6/30`}
    >
      <img 
        className="w-4 h-4 mr-3 animate-spin" 
        src={loading} 
        alt="Loading" 
        aria-hidden="true"
      />
      <span className="text-n-3">
        {displayMessage}
      </span>
    </div>
  );
};

export default Generating;
