import './Contact.modules.css'
import ContactMap from '../ContactMap/ContactMap';
const Contact:React.FC=()=>{
    return(
        <div className='contact' id='contact'>
            <div className='ContactAddress'>
              <address>
                <h2>Контакты</h2>
                <h4>Главный офис</h4> 
                   <a href="tel:+7 800 789 89 89">+7 800 789 89 89</a><br />
                   <a href="">г. Санкт-Петербург, Комсомольская, 43 к1</a>
                   <h4>отдел продаж</h4>
                   <a href="tel:+7 800 789 89 89">+7 800 789 89 89</a><br />
                   <a href="">г. Санкт-Петербург, Комсомольская, 43 к1</a>
              </address>
            </div>
            <div className='ContMap'>
                <ContactMap/>
             
            </div>
        </div>
        
    )
};
export default Contact;