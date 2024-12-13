import'./Forma.modules.css'
const Forma:React.FC=()=>{
    return(
        <div className='Forma'>
            <form action="" className='Form'>
                <h1 className='textForm'>Есть вопросы?</h1>
                <p className='textForm'>Заполните форму и наш менеджер свяжется с вами</p>
                <input type="text" className='inputForma' />
                <input type="text" className='inputForma' />
                <a href="#" className={`buttonFor`}> Отправить</a>
            </form>
            <div className='grid-container'>
               <img src="../../../src/image/1024px-Instagram_logo 1.png" alt="" />
               <img src="../../../src/image/Rectangle 37.jpg" alt="" />
               <img className='dog' src="../../../src/image/Rectangle 38.jpg" alt="" />
               <img src="../../../src/image/Rectangle 39.jpg" alt="" />
               <img src="../../../src/image/Rectangle 40.jpg" alt="" />
               <img src="../../../src/image/Rectangle 41.jpg" alt="" />
            </div>
        </div>
    )
};
export default Forma;