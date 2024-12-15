import Nav from '../Nav/Nav';
import  './Footer.modules.css';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps>  = () => {
  return (
    <footer className={`footer`}>
      <div className={`block`} >
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
