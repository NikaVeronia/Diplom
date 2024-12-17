import FooterNav from '../FooterNav/FooterNav';
import  './Footer.modules.css';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps>  = () => {
  return (
    <footer className={`footer`}>
      <div className={`block`} >
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
