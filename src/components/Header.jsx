import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { getTranslatedContent } from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/Logo.webp';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { language } = useContext(LanguageContext);
  const { navigation } = getTranslatedContent(language);

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }

    // Scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL without page reload
      window.history.pushState(null, '', `#${id}`);
    }
  };


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[4rem] xl:mr-8" href="#hero">
          <img src={logo} width={190} height={40} alt="TAT consulting" />
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handleClick(e, item.id)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="flex items-center ml-auto">
          <div className="hidden lg:block mr-4">
            <LanguageSelector />
          </div>
          <Button 
            className="hidden lg:flex" 
            onClick={(e) => handleClick(e, 'GetStarted')}
          >
            Get Started
          </Button>
        </div>

        <Button
          className="ml-2 lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
