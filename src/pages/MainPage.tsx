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
import './MainPage.modules.css'; 

const MainPage: React.FC = () => {
  return (
    <div className="grid-containers">
      <Header className="grid-item" />
          <Catalog className="grid-item" />
          <About className="grid-item" />
          <QuizSection className="grid-item" />
          <Comand className="grid-item" />
          <FAQ className="grid-item" />
          <Contact className="grid-item" />
          <Forma className="grid-item" />
      <Footer className="grid-item"/>
    </div>
  );
};

export default MainPage;
