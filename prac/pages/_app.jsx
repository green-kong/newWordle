import '../styles/globals.css';
import Outline from '../components/outline';
import Header from '../components/header';

import Store from '../store/useStore';

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Outline>
        <Header />
        <Component {...pageProps} />
      </Outline>
    </Store>
  );
}

export default MyApp;
