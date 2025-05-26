import Header from "./components/Header";
import IndexPage from "./components/index";
import Carousel1 from './components/Carousel1';
import AboutUs from './components/AboutUs'; 
import ChooseUsSection from './components/ChooseUsSection';
import Services from './components/Services';
import FrontEndDashboards from './components/FrontEndDashboards';
import CitiesWeServe from "./components/CitiesWeServe";
import DoctorAppointments from "./components/DoctorAppointments";
import CustomerStories from "./components/CustomerStories";
import Pricing from "./components/Pricing";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Banner from "./components/banner";

export default function Home() {
  return (
   <div style={{ overflowX: 'hidden', width: '100%' }}>
    <Header/>
    
    {/* Main content with padding to account for fixed header */}
    <main style={{ paddingTop: '140px' }}>
      {/* Home/Hero Section */}
      <section id="home">
        <IndexPage/>
      </section>
      {/* Banner Section */}
        <Banner/>


      <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>

        {/* About Us Section */}
        <section id="about-us">
          <AboutUs/>
          <ChooseUsSection />
        </section>
        
        {/* Services Section */}
        <section id="services">
          <Services/>
          <FrontEndDashboards/>
          <DoctorAppointments/>
        </section>
        
        {/* Features Section */}
        <section id="CitiesWeServe">
          <CitiesWeServe/>
          {/* Add your features components here */}
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <CustomerStories />
        </section>
        
        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <ContactUs/>
        </section>
        
        {/* Footer and legal sections */}
        <PrivacyPolicy />
      </div>
    </main>
    
    <Footer />
   </div>
  );
}