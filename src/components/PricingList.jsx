import { check } from "../assets";
import { getTranslatedContent } from "../constants";
import Button from "./Button";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const PricingList = () => {
  const { language } = useContext(LanguageContext);
  const { pricing } = getTranslatedContent(language);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricing.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col h-full bg-n-8 border border-n-6/50 rounded-3xl pt-12 pb-8 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-n-1/10 hover:border-primary-1/30 ${
              item.popular ? 'ring-2 ring-primary-1 -mt-2 lg:mt-0' : 'mt-8 md:mt-0'
            }`}
          >
            {item.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-1 to-primary-2 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-primary-1/30 transform transition-all duration-300 hover:scale-105">
                <span className="relative z-10">
                  {language === 'en' ? 'MOST POPULAR' : 'MÁS POPULAR'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-1/80 to-primary-2/80 rounded-full blur-sm -z-10"></div>
              </div>
            )}
            
            <div className="flex-1 flex flex-col">
              <h4 className={`h4 mb-4 ${item.popular ? 'text-primary-1' : 'text-n-1'}`}>
                {item.title}
              </h4>

              <p className="body-2 min-h-[4rem] mb-6 text-n-3">
                {item.description}
              </p>

              <div className="mb-6">
                {item.price ? (
                  <div className="flex items-baseline">
                    <span className="text-2xl font-medium text-n-3 mr-1">$</span>
                    <span className="text-[3.5rem] leading-none font-bold">
                      {item.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-n-3 ml-1">
                      {language === 'en' ? '/project' : '/proyecto'}
                    </span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold">
                    {language === 'en' ? 'Custom Quote' : 'Cotización Personalizada'}
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-6 border-t border-n-6/50">
                <Button
                  className={`w-full mt-auto ${item.popular ? 'bg-primary-1 text-n-8 hover:bg-primary-1/90' : 'bg-n-1/5 text-n-1 hover:bg-n-1/10'}`}
                  href={item.price ? '#contact' : '/contact'}
                >
                  {item.price 
                    ? (language === 'en' ? 'Get started' : 'Comenzar')
                    : (language === 'en' ? 'Request a quote' : 'Solicitar cotización')
                  }
                </Button>

                <ul className="space-y-4 mt-6">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start py-2">
                      <img 
                        src={check} 
                        width={20} 
                        height={20} 
                        alt={language === 'en' ? 'Check' : 'Verificado'} 
                        className="mt-1 flex-shrink-0" 
                      />
                      <p className="body-2 ml-3 text-n-2">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
