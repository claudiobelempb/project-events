import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ShowCase } from '@/components/ShowCase';

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.pathname === '/' && <ShowCase />}
      <main className="container">
        <div className="row">{children}</div>
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hosttest parties',
  description: 'Find the lastst DJ and other',
  keywords: 'music, dj, ed,, events',
};

export default Layout;
