import { business } from "../assets";
import { notificationImages } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";

const Notification = ({ className, title, status = "info" }) => {
  const { language } = useLanguage();
  
  // Translations for the title
  const titleTranslations = {
    'New message received': {
      en: 'New message received',
      es: 'Nuevo mensaje recibido'
    },
    'Payment successful': {
      en: 'Payment successful',
      es: 'Pago exitoso'
    },
    'Action required': {
      en: 'Action required',
      es: 'Acción requerida'
    },
    'Business growth': {
      en: 'Business growth',
      es: 'Crecimiento empresarial'
    },
    // Add more title translations as needed
  };
  
  // Get translated title or use the provided one if no translation exists
  const translatedTitle = titleTranslations[title]?.[language] || title;
  
  // Translations for the 'Now' text
  const nowText = {
    en: 'Now',
    es: 'Ahora'
  };
  
  const statusColors = {
    info: "bg-blue-500/10 border-blue-500/20",
    success: "bg-green-500/10 border-green-500/20",
    warning: "bg-yellow-500/10 border-yellow-500/20",
    error: "bg-red-500/10 border-red-500/20"
  };

  return (
    <div
      className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 ${statusColors[status]}`}
    >
      <img
        src={business}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{translatedTitle}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">
            {nowText[language] || nowText.en}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
