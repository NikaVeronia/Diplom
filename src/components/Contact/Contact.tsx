import './Contact.modules.css'
import ContactMap from '../ContactMap/ContactMap';

type ContactProps = {
  className?: string;
};

const Contact:React.FC<ContactProps>=()=>{
    return(
        <div className='contact' id='contact'>
         
            <div className='ContactAddress'>
              <address>
                <h2 className='conth2'>Контакты</h2>
                <h4 className='conth4'>Главный офис <div className="icon-container">
                    <div className="icon">?</div>
                    <div className="speech-bubble">
                     Адрес и телефон для корреспонденции, инвесторов.<br/>
                     Вопросы о доставке, качестве обслуживания и товара<br/>
                     просьба задавать в отдел продаж.
                    </div>
                    </div></h4> 
                   <a href="tel:+7 800 789 89 89" className='cont_tel'>+7 800 789 89 89</a><br />
                   <a href="" className='cont_a'>г. Санкт-Петербург, Комсомольская, 43 к1</a>
                   <h4 className='conth4'>отдел продаж</h4>
                   <a href="tel:+7 800 789 89 89" className='cont_tel'>+7 800 789 89 89</a><br />
                   <a href="" className='cont_a'>г. Санкт-Петербург, Комсомольская, 43 к1</a>
                   <div className='social'>
                   <a href="" className='vk'></a>
                   <a href="" className='innst'></a>
                </div>
              </address>
              <div className='ContMap'>
                <ContactMap/>
              </div>
            </div>
        </div>
     
        
    )
};
export default Contact;