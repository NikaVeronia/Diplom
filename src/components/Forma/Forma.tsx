import React, { useState } from 'react';
import './Forma.modules.css';

type FormaProps = {
  className?: string;
};

const Forma: React.FC<FormaProps> = () => {
  const [formData, setFormData] = useState({ field1: '', field2: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Логи:', formData);
    setFormData({ field1: '', field2: '' }); // Очистка полей формы
  };

  return (
    <div className='Forma'>
      <form action="" className='Form' onSubmit={handleSubmit}>
        <h1 className='textForm'>Есть вопросы?</h1>
        <p className='textForm'>Заполните форму и наш менеджер свяжется с вами</p>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleInputChange}
          placeholder="Введите имя"
          className='inputForma'
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
          placeholder="Введите email"
          className='inputForma'
        />
        <button type="submit" className='buttonFor'>Отправить</button>
      </form>
      <div className='grid-container'>
        <img className='form-img' src="../../../src/image/1024px-Instagram_logo 1.png" alt="" />
        <img className='form-img' src="../../../src/image/Rectangle 37.jpg" alt="" />
        <img className='form-img dog' src="../../../src/image/Rectangle 38.jpg" alt="" />
        <img className='form-img' src="../../../src/image/Rectangle 39.jpg" alt="" />
        <img className='form-img' src="../../../src/image/Rectangle 40.jpg" alt="" />
        <img className='form-img' src="../../../src/image/Rectangle 41.jpg" alt="" />
      </div>
    </div>
  );
};

export default Forma;
