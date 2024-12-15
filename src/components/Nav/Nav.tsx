import './Nav.modules.css';
const Nav: React.FC = () =>{
    return(
        <div className={`container`}>
          <div className={`logo`}>SneakMax</div>
          <div className={`nav`}>
             <a href='/#catalog'>Каталог</a>
             <a href='/#about'>О нас</a>
             <a href="/#quiz">Подбор товара</a>
             <a href="/#comand">Наша команда</a>
             <a href="/#">Доставка и оплата</a>
             <a href="/#contact">Контакты</a>
          </div>
          <a href={`basket`}  className={`cart`}>Корзина 🛒</a>
        </div>
    )
}
export default Nav;