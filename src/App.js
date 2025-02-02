import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from './components/banner'; // Make sure this path is correct
import Header from './components/header';
import List from './components/List';
import SideMenu from './components/SideMenuPage/SideMenu';
import SideCTA from './components/SideMenuPage/SideCTA';
// import Menu from './components/menuGriddle';
// import EggsOmeletsMenu from './components/EggsOmeletsMenu';
// import FrenchToastMenu from './components/frenchToastMenu';
// import BagelMenu from './components/BagelMenu';
// import AppetizersMenu from './components/AppetizersMenu';
// import SoupSaladMenu from './components/SoupSaladMenu';
// import HotSandwichesMenu from './components/HotSandwichesMenu';
// import ColdDeliMenu from './components/ColdDeliMenu';
// import SpecialComboMenu from './components/SpecialComboMenu';
// import SpecialityWrapsMenu from './components/SpecialityWrapsMenu';
// import OnTheSideMenu from './components/OnTheSideMenu';
// import DessertsMenu from './components/DessertsMenu';
import MenuImageColumn from './components/MenuImagesColumn';
import CTA from './components/CTA';
import Footer from './components/footer';

import ScrollToTop from './components/scrollToTop';
// import ContinentalBreakfastCatering from './components/CateringPage/ContinentalBreakfastCatering';
// import HotBreakfastCatering from './components/CateringPage/HotBreakfastCatering';
// import SmokedFishCatering from './components/CateringPage/SmokedFishCatering';
// import HotColdHorsCatering from './components/CateringPage/HotColdHorsCatering';
// import AppetizerCatering from './components/CateringPage/AppetizerCatering';
// import SaladsCatering from './components/CateringPage/SaladsCatering';
// import ColdToSmokeyCatering from './components/CateringPage/ColdToSmokeyCatering';
// import ColdAndHotCatering from './components/CateringPage/ColdAndHoldCatering';
// import PaniniCatering from './components/CateringPage/PaniniCatering';
// import PastaCatering from './components/CateringPage/PastaCatering';
// import HotEntreeCatering from './components/CateringPage/HotEntreeCatering';
import CateringMenu1 from './components/CateringPage/CateringMenu';
import CTACatering from './components/CateringPage/CTACatering';


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
      
      videoSrc="/Home/Video_in_Light_Yellow_Maroon_White_Simple_and_Minimal_Simple_and_Minimal_Style.mp4" 
       />
       <Header
       text="The Home of New York Corned Beef and Pastrami"
       />
      {/* <Menu /> */}
      <MenuImageColumn/>
      {/* <EggsOmeletsMenu />
      <FrenchToastMenu />
      <BagelMenu/>
      <AppetizersMenu/>
      <SoupSaladMenu/>
      <HotSandwichesMenu/>
      <ColdDeliMenu/>
      <SpecialComboMenu/>
      <SpecialityWrapsMenu/>
      <OnTheSideMenu/>
      <DessertsMenu/> */}
      <List/>
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
      videoSrc="/CateringPage/CateringVid.mp4" 
       />
       <Header
       text ="The Perfect Menu for Your Event"/>
       <CateringMenu1/>
       <List/>
        {/* <ContinentalBreakfastCatering/>
        <HotBreakfastCatering/>
        <SmokedFishCatering/>
        <HotColdHorsCatering/>
        <AppetizerCatering/>
        <SaladsCatering/>
        <ColdToSmokeyCatering/>
        <ColdAndHotCatering/>
        <PaniniCatering/>
        <PastaCatering/>
        <HotEntreeCatering/> */}
        <CTACatering/>
        <Footer/>
        <ScrollToTop />           
       </>
  );
}
function SideMenuPage() {
  return (
    <>
     
      <Banner
      videoSrc="/Side_Menu/SideMenu.mp4" 
       />
         
        <SideMenu/>
        {/* <List/> */}
        <SideCTA/>
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
      <ContactUs/>
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
        <Route path="/side-menu" element={<SideMenuPage />} />
        <Route path="/caterings" element={<CateringPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
