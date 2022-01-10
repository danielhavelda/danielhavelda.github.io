import Header from './Header';
import DecorLines from '../DecorLines/DecorLines';
import Footer from './Footer';
import { Sun } from 'react-feather';
import Navigation from '../Navigation/Navigation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function Layout(props) {
  const intersectionObserverOptions = {
    rootMargin: '0px',
  };
  
  const { ref, inView, entry } = useInView(intersectionObserverOptions);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(!isScrolled)
  }, [inView]);

  return (
    <>
      <DecorLines />

      <div className={['flex-container', [props.containerClass]].join(' ')}>
        <Header status={isScrolled}>
            <Sun 
              color="#5A5A5A"
              onClick={() => console.log('NYAO')}
              className='icon'
            />
          <Navigation />
        </Header>


        <main className="container">
          <div className="intersection-observer-pointer" ref={ref}></div>
          {props.mainContent}
        </main>



        <Footer />
      </div>
    </>

  );
}