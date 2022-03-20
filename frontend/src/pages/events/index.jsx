import { CardEvent } from '@/components/CardEvent';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1 className="display-6 fw-bold mb-5">Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}

      {events.map((evt) => (
        <CardEvent key={evt.id} event={evt} type={'horizontal'} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
