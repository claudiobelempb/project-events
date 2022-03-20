import Link from 'next/link';
import { CardEvent } from '@/components/CardEvent';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

const HomePage = ({ events }) => {
  return (
    <Layout>
      <h1 className="display-6 fw-bold mb-5">Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}

      {events.map((evt) => (
        <CardEvent key={evt.id} event={evt} type={'horizontal'} />
      ))}

      {events.length > 0 && (
        <Link href={'/events'}>
          <a className="col-3 btn btn-dark text-white">View All</a>
        </Link>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}

export default HomePage;
