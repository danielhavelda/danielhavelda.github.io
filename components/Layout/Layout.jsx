import Header from './Header';
import DecorLines from '../DecorLines/DecorLines';
import Footer from './Footer';
import { Sun } from 'react-feather';
import Navigation from '../Navigation/Navigation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import ThemePicker from '../ThemePicker/ThemePicker';
import GlobalContext from '../../context/GlobalContext';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Layout(props) {
  const intersectionObserverOptions = {
    rootMargin: '0px',
  };
  
  const { ref, inView, entry } = useInView(intersectionObserverOptions);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [bodyOverflowStatus, setBodyOverflowStatus] = useState(true);

  useEffect(() => {
    setIsScrolled(!isScrolled)
  }, [inView]);

  useEffect(() => {
    theme === 'dark' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme');
  }, [theme]);

  useEffect(() => {
    bodyOverflowStatus ? document.querySelector('body').classList.remove('overflow-hidden') : document.querySelector('body').classList.add('overflow-hidden');
  }, [bodyOverflowStatus]);

  return (
    <>
      <GlobalContext.Provider value={{ currentTheme: theme, bodyOverflow: bodyOverflowStatus }}>
        <DecorLines />

        <div className={['flex-container', [props.containerClass]].join(' ')}>
          <Header status={isScrolled}>
            <ThemePicker changeThemeFn={setTheme} />
            <Navigation changeBodyOverflowFn={setBodyOverflowStatus} />
          </Header>


          <main className="container">
            <div className="intersection-observer-pointer" ref={ref}></div>
            {props.mainContent}
          </main>



          <Footer />
        </div>
      </GlobalContext.Provider>
    </>

  );
}