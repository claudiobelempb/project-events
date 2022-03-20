import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

// import Layout from '@/components/LayoutDashboard';

const NotFoundPage = () => {
  return (
    <Layout title={'Page Not Found'}>
      <div className="text-center h-100 justify-content-center align-items-center mt-5">
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href={'/'}>Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
