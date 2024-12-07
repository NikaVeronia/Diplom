import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Comand from '../components/Comand/Comand';
import Contact from '../components/Contact/Contact';
import Forma from '../components/Forma/Forma';
import FAQ from '../components/FAQ/FAQ';
import QuizSection from '../components/QuizSection/QuizSection';

const MainPage:React.FC = () => {
  return (
    <div>
       <main className=" main">
        <Catalog />
        <About/>
        <QuizSection/>
        <Comand/>
        <FAQ/>
        <Contact/>
        <Forma/>
      </main>
      <Footer/>
   </div>
  );
};

export default MainPage;
