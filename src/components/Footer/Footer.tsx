import Nav from '../Nav/Nav';
import  './Footer.modules.css';

const Footer: React.FC = () => {
  return (
    <footer className={`footer`}>
      <div className={`block`} >
        <Nav />
        <div className={`cart`}>Корзина 🛒</div>
      </div>
    </footer>
  );
};

export default Footer;
