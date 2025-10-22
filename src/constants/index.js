import {
  benefitImage2,
  brainwaveSymbol,
  chromecast,
  data_security,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  transformation,
  ai,
  on_chain,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  automation,
  Blockchain,
  Cybersecurity,
  yourlogo,
} from "../assets";

// Import translations
import { en } from "../translations/en";
import { es } from "../translations/es";

// Import benefit icons
import benefitIcon1 from '../assets/benefits/icon-1.svg';
import benefitIcon2 from '../assets/benefits/icon-2.svg';
import benefitIcon3 from '../assets/benefits/icon-3.svg';
import benefitIcon4 from '../assets/benefits/icon-4.svg';

const benefitIcons = [benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4];

// Export translations
export const translations = { en, es };

// Default language
export const defaultLanguage = 'en';

// Static assets (not translated)
export const heroIcons = [searchMd, file02, plusSquare, recording03];
export const notificationImages = [notification4, notification3, notification2];

// Import the logo
import yourLogo from '../assets/yourlogo.svg';

// Create an array of your logo for the company logos section
export const companyLogos = [yourLogo, yourLogo, yourLogo, yourLogo, yourLogo];

export const technologyIcons = [
  { name: "Cloud", icon: raindrop },
  { name: "AI/ML", icon: brainwaveSymbol },
  { name: "Blockchain", icon: plusSquare },
  { name: "IoT", icon: searchMd },
  { name: "Cybersecurity", icon: file02 },
  { name: "DevOps", icon: sliders04 }
];

// Legacy exports (keeping for backward compatibility)
export const brainwaveServices = [
  "Web Development",
  "Mobile App Development",
  "Management Software",
  "Code Audit & Review",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Collaboration Apps — updated with our tech stack
export const collabApps = [
  { id: "0", title: "Cloud", icon: raindrop, width: 30, height: 30 },
  { id: "1", title: "AI/ML", icon: brainwaveSymbol, width: 30, height: 30 },
  { id: "2", title: "Security", icon: Cybersecurity, width: 30, height: 30 },
  { id: "3", title: "Blockchain", icon: Blockchain, width: 30, height: 30 },
  { id: "4", title: "Analytics", icon: searchMd, width: 30, height: 30 },
  { id: "5", title: "Automation", icon: automation, width: 30, height: 30 },
  { id: "6", title: "Data", icon: data_security, width: 30, height: 30 },
  { id: "7", title: "AI", icon: ai, width: 30, height: 30 },
  { id: "8", title: "On-chain", icon: on_chain, width: 30, height: 30 },
  { id: "9", title: "Transformation", icon: transformation, width: 30, height: 30 }
];

// Helper function to get translated content
export const getTranslatedContent = (lang = defaultLanguage) => {
  const language = translations[lang] || translations[defaultLanguage];
  
  // Use the pre-imported benefit icons
  
  // Map consulting services with their corresponding images
  const consultingServices = language.consultingServices.map((service, index) => ({
    ...service,
    imageUrl: [transformation, automation, Cybersecurity, Blockchain, data_security][index % 5],
  }));
  
  return {
    ...language,
    heroIcons,
    notificationImages,
    companyLogos,
    collabText: language.collabText,
    collabContent: language.collabContent,
    benefits: {
      ...language.benefits,
      items: language.benefits.items.map((benefit, index) => ({
        ...benefit,
        iconUrl: benefitIcons[index % 4],
        backgroundUrl: `../assets/benefits/card-${(index % 6) + 1}.svg`,
      }))
    },
    pricing: language.pricing,
    consultingServices,
  };
};

// Social media links
const socials = [
  {
    id: 'twitter',
    title: 'Twitter',
    iconUrl: twitter,
    url: 'https://twitter.com',
  },
  {
    id: 'discord',
    title: 'Discord',
    iconUrl: discord,
    url: 'https://discord.com',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    iconUrl: telegram,
    url: 'https://telegram.org',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    iconUrl: facebook,
    url: 'https://facebook.com',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    iconUrl: instagram,
    url: 'https://instagram.com',
  },
];

// Export default content in English for backward compatibility
const defaultContent = getTranslatedContent();

export {
  socials,
  defaultContent as default,
};

export const {
  navigation,
  consultingServices,
  roadmap,
  collabText,
  collabContent,
  benefits,
  pricing,
} = defaultContent;
