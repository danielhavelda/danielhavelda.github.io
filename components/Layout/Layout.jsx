import Header from './Header';
import DecorLines from '../DecorLines/DecorLines';
import Footer from './Footer';
import { Sun } from 'react-feather';
import Navigation from '../Navigation/Navigation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import ThemePicker from '../ThemePicker/ThemePicker';
import ThemeContext from '../../context/ThemeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Layout(props) {
  const intersectionObserverOptions = {
    rootMargin: '0px',
  };
  
  const { ref, inView, entry } = useInView(intersectionObserverOptions);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    setIsScrolled(!isScrolled)
  }, [inView]);

  useEffect(() => {
    theme === 'dark' ? document.querySelector('body').classList = 'dark-theme' : document.querySelector('body').classList.remove('dark-theme');
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <DecorLines />

        <div className={['flex-container', [props.containerClass]].join(' ')}>
          <Header status={isScrolled}>
            <ThemePicker changeThemeFn={setTheme} />
            <Navigation />
          </Header>


          <main className="container">
            <div className="intersection-observer-pointer" ref={ref}></div>
            {props.mainContent}
          </main>



          <Footer />
        </div>
      </ThemeContext.Provider>
    </>

  );
}