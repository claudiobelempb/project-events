const ImgShowCase = '/images/showcase.jpg';

const ShowCase = () => {
  return (
    <figure className="figure position-relative">
      <img src={ImgShowCase} className="figure-img img-fluid" alt="..." />
      <figcaption className="figure-caption text-center ">
        <h1 className="text-white fw-bold w-100 position-absolute bottom-50 start-50 translate-middle me-3">
          Welcome To The Party!
        </h1>
      </figcaption>
      <figcaption className="figure-caption text-center ">
        <h2 className="text-white position-absolute top-50 start-50 translate-middle w-100">
          Find the hottest DJ events
        </h2>
      </figcaption>
    </figure>
  );
};

export { ShowCase };
