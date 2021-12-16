import Header from './Header';
import DecorLines from '../DecorLines/DecorLines';
import Footer from './Footer';
import { Sun } from 'react-feather';
import Navigation from '../Navigation/Navigation';

export default function Layout(props) {
  return (
    <>
      <DecorLines />

      <div className={['flex-container', [props.containerClass]].join(' ')}>
        <Header>
            <Sun 
              color="#5A5A5A"
              onClick={() => console.log('NYAO')}
              className='icon'
            />
          <Navigation />
        </Header>

        <main className="container">
          {props.mainContent}
        </main>


        <Footer />
      </div>
    </>

  );
}