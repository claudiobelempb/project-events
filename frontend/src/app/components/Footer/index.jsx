import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center">
      <p>Copyright &copy; DJ Events 2022</p>
      <Link href={'/about'}>
        <a className="nav-link">About This Project</a>
      </Link>
    </footer>
  );
};

export { Footer };
