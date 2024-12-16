import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Comand from '../components/Comand/Comand';
import Contact from '../components/Contact/Contact';
import Forma from '../components/Forma/Forma';
import FAQ from '../components/FAQ/FAQ';
import QuizSection from '../components/QuizSection/QuizSection';
import Header from '../components/Header/Header';
import './MainPage.modules.css'; // Создайте файл CSS для стилей

const MainPage: React.FC = () => {
  return (
    <div className="grid-containers">
      <Header className="grid-header" />
          <Catalog className="grid-catalog" />
          <About className="grid-about" />
          <QuizSection className="grid-quizsection" />
          <Comand className="grid-comand" />
          <FAQ className="grid-faq" />
          <Contact className="grid-contact" />
          <Forma className="grid-forma" />
      <Footer className="grid-footer"/>
    </div>
  );
};

export default MainPage;
