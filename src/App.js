import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from './components/banner'; // Make sure this path is correct
import Menu from './components/menuGriddle';
import EggsOmeletsMenu from './components/EggsOmeletsMenu';
import FrenchToastMenu from './components/frenchToastMenu';
import BagelMenu from './components/BagelMenu';
import AppetizersMenu from './components/AppetizersMenu';
import SoupSaladMenu from './components/SoupSaladMenu';
import HotSandwichesMenu from './components/HotSandwichesMenu';
import ColdDeliMenu from './components/ColdDeliMenu';
import SpecialComboMenu from './components/SpecialComboMenu';
import SpecialityWrapsMenu from './components/SpecialityWrapsMenu';
import OnTheSideMenu from './components/OnTheSideMenu';
import DessertsMenu from './components/DessertsMenu';
import CTA from './components/CTA';
import Footer from './components/footer';
import ContinentalBreakfastCatering from './components/Catering/ContinentalBreakfastCatering';
import ScrollToTop from './components/scrollToTop';
import HotBreakfastCatering from './components/Catering/HotBreakfastCatering';
import SmokedFishCatering from './components/Catering/SmokedFishCatering';
import HotColdHorsCatering from './components/Catering/HotColdHorsCatering';
import AppetizerCatering from './components/Catering/AppetizerCatering';
import SaladsCatering from './components/Catering/SaladsCatering';
import ColdToSmokeyCatering from './components/Catering/ColdToSmokeyCatering';
import ColdAndHotCatering from './components/Catering/ColdAndHoldCatering';
import PaniniCatering from './components/Catering/PaniniCatering';
import PastaCatering from './components/Catering/PastaCatering';
import HotEntreeCatering from './components/Catering/HotEntreeCatering';
import CTACatering from './components/Catering/CTACatering';


import AboutSection from './components/AboutPage/AboutSection';
import OurSecret from './components/AboutPage/OurSecret';
import CTAAbout from './components/AboutPage/CTAAbout';
import ContactUs from './components/ContactUs/ContactUs';
import ContactForm from './components/ContactUs/ContactForm';
import HoursOfOperation from './components/ContactUs/HoursOfOperation';

import ThankYou from './components/ContactUs/ThankYou';
function HomePage() {
  return (
    <>
      <Banner
      title="THE HOME OF NEW YORK CORNED BEEF AND PASTRAMI"
      videoSrc="/Home/Video_in_Light_Yellow_Maroon_White_Simple_and_Minimal_Simple_and_Minimal_Style.mp4" 
       />
      <Menu />
      <EggsOmeletsMenu />
      <FrenchToastMenu />
      <BagelMenu/>
      <AppetizersMenu/>
      <SoupSaladMenu/>
      <HotSandwichesMenu/>
      <ColdDeliMenu/>
      <SpecialComboMenu/>
      <SpecialityWrapsMenu/>S
      <OnTheSideMenu/>
      <DessertsMenu/>
     

      <CTA/>
      <Footer/>
      <ScrollToTop />
    </>
  );
}
function CateringPage() {
  return (
    <>
      <Banner
      title="The Perfect Menu for Your Event"
      videoSrc="/Catering/Catering.mp4" 
       />
        <ContinentalBreakfastCatering/>
        <HotBreakfastCatering/>
        <SmokedFishCatering/>
        <HotColdHorsCatering/>
        <AppetizerCatering/>
        <SaladsCatering/>
        <ColdToSmokeyCatering/>
        <ColdAndHotCatering/>
        <PaniniCatering/>
        <PastaCatering/>
        <HotEntreeCatering/>
        <CTACatering/>
        <Footer/>
        <ScrollToTop />           
       </>
  );
}
function AboutPage() {
  return (
    <>
      <Banner
      title="From Our Kitchen to Your Table"
      videoSrc="/About_Us/about_us.mp4" 
       />
        <AboutSection/>
        <OurSecret/>
        <CTAAbout/>
        <Footer/>
        <ScrollToTop />           
       </>
  );
}
function ContactUsPage() {
  return (
    <>
      <ContactUs
       />
       <ContactForm/>
        <HoursOfOperation/>
        <ScrollToTop />           
       </>
  );
}
function ThankYouPage() {
  return (
    <>
      <ThankYou
          title="Thank You for Reaching Out!"
          line1="We have received your message."
          line2="Our team will reach out to you soon."
       />         
       </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
