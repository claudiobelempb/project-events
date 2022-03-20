import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <Layout title={'About DJ Events'} description={'Trhis is an app find the latest DJ and other musical events'}>
      <h1>About</h1>
      <p>Trhis is an app find the latest DJ and other musical events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default AboutPage;
