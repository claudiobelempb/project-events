import 'react-toastify/dist/ReactToastify.css';
import '@/styles/custom.scss';

import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default MyApp;
