import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

export default function EventPage({ evt }) {
  const router = useRouter();

  const deleteEvent = (e) => {
    console.log('delete');
  };

  return (
    <Layout>
      <div className="d-flex justify-content-end mt-5">
        <Link href={`/events/${evt.id}`}>
          <a className="text-info me-3">
            <FaPencilAlt className="me-1" />
            Edit Event
          </a>
        </Link>
        <Link href={'#'}>
          <a onClick={deleteEvent} className="text-danger me-3">
            <FaTimes className="me-1" />
            Delete Event
          </a>
        </Link>
      </div>
      <p>
        {evt.date} at {evt.time}
      </p>
      <h1>{evt.name}</h1>
      {evt.image && <Image className="img-fluid p-2" src={`${evt.image}`} width={1320} height={700} />}
      <span className="fw-bold">Performers:</span>
      <p>{evt.performers}</p>
      <span className="fw-bold">Description:</span>
      <p>{evt.description}</p>
      <span className="fw-bold">Venue: {evt.venue}</span>
      <p>{evt.address}</p>

      <Link href={'/events'} className="btn btn-md btn-danger" onClick={() => router.push('/')}>
        <a className="text-secondary"> {'<'} Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
      revalidate: 1,
    },
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   return {
//     props: {
//       evt: events[0],
//     },
//   };
// }
