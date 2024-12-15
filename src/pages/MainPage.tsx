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
    <div>
      <Header className="header" />
      <main className="main">
        <div className="grid-container">
          <Catalog className="grid-catalog" />
          <About className="about" />
          <QuizSection className="quizsection" />
          <Comand className="grid-comand" />
          <FAQ className="faq" />
          <Contact className="contact" />
          <Forma className="forma" />
        </div>
      </main>
      <Footer className="footer"/>
    </div>
  );
};

export default MainPage;
