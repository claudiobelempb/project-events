import Link from 'next/link';
import Image from 'next/image';

const CardEvent = ({ event, type }) => {
  switch (type) {
    case 'horizontal':
      return (
        <Link href={`/events/${event.slug}`}>
          <a className="card mb-3 shadow border-0 rounded-3" /* style={{ maxWidth: '540px' }}*/>
            <div className="row g-0">
              <div className="col d-lg-flex align-items-center">
                <div className="col-md-6 col-lg-2 g-3">
                  <Image
                    src={event.image ? event.image : '/image/event-default.png'}
                    className="img-fluid rounded m-3"
                    alt={event.name}
                    width={170}
                    height={100}
                  />
                </div>
                <div className="col-md-6 col-lg-10">
                  <div className="card-body">
                    {/* <p className="card-text">{event.description}</p> */}
                    <p className="card-text">
                      <small className="text-dark">
                        {event.date} at {event.time}
                      </small>
                    </p>
                    <h5 className="card-title text-dark fw-bold">{event.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      );

    default:
      return (
        <Link href={`/events/${event.slug}`}>
          <a className="col-md-6 col-lg-3 g-3">
            <div className="card" key={event.id}>
              <Image
                src={event.image ? event.image : '/image/event-default.png'}
                width={170}
                height={250}
                className="card-img-top"
                alt={event.name}
              />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <small className="text-muted">{event.address}</small>
                </p>
              </div>
            </div>
          </a>
        </Link>
      );
  }
};

CardEvent.defaultProps = {
  event: {
    id: '1',
    name: 'Throwback Thursdays with DJ Manny Duke',
    slug: 'throwback-thursdays-with-dj-manny-duke',
    venue: 'Horizon Club',
    address: '919 3rd Ave New York, New York(NY), 10022',
    performers: 'DJ Manny Duke',
    date: 'June 09, 2021',
    time: '10:00 PM EST',
    description:
      "Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90's and 2000's",
    image: '/images/sample/event1.jpg',
  },
};

export { CardEvent };
