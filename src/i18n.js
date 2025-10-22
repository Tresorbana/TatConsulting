import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Common translations that can be reused
const common = {
  buttons: {
    getStarted: { en: 'Get Started', es: 'Comenzar' },
    learnMore: { en: 'Learn More', es: 'Saber más' },
    contactUs: { en: 'Contact Us', es: 'Contáctenos' },
    send: { en: 'Send', es: 'Enviar' },
    submit: { en: 'Submit', es: 'Enviar' },
    close: { en: 'Close', es: 'Cerrar' },
  },
  navigation: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Nosotros' },
    services: { en: 'Services', es: 'Servicios' },
    contact: { en: 'Contact', es: 'Contacto' },
    portfolio: { en: 'Portfolio', es: 'Portafolio' },
    blog: { en: 'Blog', es: 'Blog' },
  },
  services: {
    title: { en: 'Our Expert Consulting Services', es: 'Nuestros Servicios de Consultoría' },
    subtitle: { en: 'Empowering businesses with cutting-edge technology solutions', es: 'Potenciando negocios con soluciones tecnológicas de vanguardia' },
    consulting: {
      title: { en: 'Strategic IT & Technology Consulting', es: 'Consultoría Estratégica de TI y Tecnología' },
      description: { en: 'Transform your business with our expert technology consulting services tailored to your unique needs.', 
                     es: 'Transforme su negocio con nuestros servicios de consultoría tecnológica adaptados a sus necesidades únicas.' },
      items: {
        it_strategy: { en: 'IT Strategy', es: 'Estrategia de TI' },
        cloud_solutions: { en: 'Cloud Solutions', es: 'Soluciones en la Nube' },
        digital_transformation: { en: 'Digital Transformation', es: 'Transformación Digital' },
        cybersecurity: { en: 'Cybersecurity', es: 'Ciberseguridad' }
      }
    },
    digitalTransformation: {
      title: { en: 'Digital Transformation', es: 'Transformación Digital' },
      description: { en: 'Future-proof your business with our comprehensive digital transformation strategies and implementation services.',
                    es: 'Prepare su negocio para el futuro con nuestras estrategias integrales de transformación digital y servicios de implementación.' },
      items: {
        cloud_migration: { en: 'Cloud Migration & Strategy', es: 'Migración y Estrategia en la Nube' },
        enterprise_architecture: { en: 'Enterprise Architecture', es: 'Arquitectura Empresarial' },
        process_automation: { en: 'Process Automation', es: 'Automatización de Procesos' }
      }
    },
    technology: {
      title: { en: 'Technology Expertise', es: 'Experiencia Tecnológica' },
      description: { en: 'Our team specializes in the latest technologies to deliver innovative solutions for your business challenges.',
                    es: 'Nuestro equipo se especializa en las últimas tecnologías para ofrecer soluciones innovadoras para sus desafíos comerciales.' },
      // Technology names for the icons
      cloud: { en: 'Cloud', es: 'Nube' },
      aiMl: { en: 'AI/ML', es: 'IA/ML' },
      blockchain: { en: 'Blockchain', es: 'Blockchain' },
      iot: { en: 'IoT', es: 'IoT' },
      cybersecurity: { en: 'Cybersecurity', es: 'Ciberseguridad' },
      devops: { en: 'DevOps', es: 'DevOps' },
      cta: {
        title: { en: 'Ready to Transform Your Business?', es: '¿Listo para Transformar su Negocio?' },
        description: { en: 'Let\'s discuss how our consulting services can help you achieve your business goals.',
                      es: 'Hablemos sobre cómo nuestros servicios de consultoría pueden ayudarlo a alcanzar sus objetivos comerciales.' },
        button: { en: 'Schedule a Consultation', es: 'Programar una Consulta' }
      }
    }
  },
  form: {
    name: { en: 'Name', es: 'Nombre' },
    email: { en: 'Email', es: 'Correo electrónico' },
    phone: { en: 'Phone', es: 'Teléfono' },
    message: { en: 'Message', es: 'Mensaje' },
    required: { en: 'This field is required', es: 'Este campo es obligatorio' },
    invalidEmail: { en: 'Please enter a valid email', es: 'Por favor ingrese un correo válido' },
  },
};

// Helper function to flatten the translation object
const flattenTranslations = (obj, lang, prefix = '') => {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (obj[key][lang] !== undefined) {
        acc[prefix + key] = obj[key][lang];
      } else {
        Object.assign(acc, flattenTranslations(obj[key], lang, prefix + key + '.'));
      }
    }
    return acc;
  }, {});
};

const resources = {
  en: {
    translation: {
      ...flattenTranslations(common, 'en'),
      // Hero Section
      hero: {
        title: 'Comprehensive Technology Services To Boost Your',
        business: 'Business',
        curveAlt: 'Curve',
        subtitle: 'At TAT Consulting, we specialize in providing remote solutions that enable your success from and to anywhere in the world.',
        cta: 'Discover How',
      },
      // About Section
      about: {
        title: 'About Us',
        subtitle: 'Driving Digital Transformation',
        description: 'We are a team of passionate experts dedicated to helping businesses thrive in the digital age through innovative solutions and strategic consulting.',
      },
      // Services Section
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive Solutions for Your Business',
        items: {
          web: 'Web Development',
          mobile: 'Mobile Apps',
          cloud: 'Cloud Solutions',
          ai: 'AI & Machine Learning',
          consulting: 'IT Consulting',
          support: '24/7 Support',
        },
      },
      // Testimonials
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Success Stories',
      },
      // Contact Section
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s Talk About Your Project',
        address: '123 Business St, City, Country',
        email: 'info@tatconsulting.com',
        phone: '+1 234 567 8900',
        formTitle: 'Send Us a Message',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'There was an error sending your message. Please try again later.',
      },
      // Footer
      footer: {
        company: 'Company',
        services: 'Services',
        legal: 'Legal',
        copyright: '© 2023 TAT Consulting. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
  es: {
    translation: {
      ...flattenTranslations(common, 'es'),
      // Hero Section
      hero: {
        title: 'Servicios Tecnológicos Integrales Para Impulsar Tu',
        business: 'Negocio',
        curveAlt: 'Línea curva',
        subtitle: 'En TAT Consulting, nos especializamos en proporcionar soluciones remotas que permiten tu éxito desde y hacia cualquier parte del mundo.',
        cta: 'Descubre Cómo',
      },
      // About Section
      about: {
        title: 'Sobre Nosotros',
        subtitle: 'Impulsando la Transformación Digital',
        description: 'Somos un equipo de expertos apasionados dedicados a ayudar a las empresas a prosperar en la era digital a través de soluciones innovadoras y consultoría estratégica.',
      },
      // Services Section
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones Integrales para tu Negocio',
        items: {
          web: 'Desarrollo Web',
          mobile: 'Aplicaciones Móviles',
          cloud: 'Soluciones en la Nube',
          ai: 'IA y Aprendizaje Automático',
          consulting: 'Consultoría IT',
          support: 'Soporte 24/7',
        },
      },
      // Testimonials
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        subtitle: 'Historias de Éxito',
      },
      // Contact Section
      contact: {
        title: 'Contáctenos',
        subtitle: 'Hablemos Sobre Tu Proyecto',
        address: 'Calle Negocios 123, Ciudad, País',
        email: 'info@tatconsulting.com',
        phone: '+1 234 567 8900',
        formTitle: 'Envíanos un Mensaje',
        success: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
        error: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
      },
      // Footer
      footer: {
        company: 'Empresa',
        services: 'Servicios',
        legal: 'Legal',
        copyright: '© 2023 TAT Consulting. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos del Servicio',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
