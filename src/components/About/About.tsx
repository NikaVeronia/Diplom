import "./About.modules.css";
type AboutProps = {
  className?: string;
};
const About:React.FC<AboutProps> = () => {
    return(
     <div className="aboutContainer "  id="about">
      <div className="figure"> <img src="../../../src/icon/figure.png" alt="" /></div>
        <div className="cont">
          <h2>Пара слов о нас</h2>
          <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас.
           Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих
           историй спортсменов.Чтобы помочь тебе подняться и двигаться вперед. </p>
           <article><svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
           <line x1="1.31134e-07" y1="1.5" x2="15" y2="1.5" stroke="white" stroke-width="3"/>
           </svg>SneakMax</article>
        </div>
             <img src="../../../src/image/Mask Group.png" alt="" className="imgAbout" /> 
       
     </div>
    )
}
export default About;