import Header from "./components/Header";
import IndexPage from "./pages/index";
import FeaturePills from './components/ScrollingFeaturePills';
import LtrRtlTemplates from './components/LtrRtlTemplates';
import ChooseUsSection from './components/ChooseUsSection';
import MultiTemplateLayout from './components/MultiTemplateLayout';
import FrontEndDashboards from './components/FrontEndDashboards';
import FeatureSlider from "./components/FeatureSlider";
import KeyFeatures from "./components/keyFeatures";
import AdminDashboard from "./components/AdminDashboard";
import Unleash from "./components/Unleash";
import CustomerStories from "./components/CustomerStories";
import Pricing from "./components/Pricing";
import FeaturesAtGlance from "./components/FeaturesAtGlance";
import QandA from "./components/Q&A";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div style={{ overflowX: 'hidden', width: '100%' }}>
    <Header/>
    <IndexPage/>
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <FeaturePills />
      <LtrRtlTemplates />
      <ChooseUsSection />
      <MultiTemplateLayout />
      <FeaturePills />
      <FrontEndDashboards/>
      <FeatureSlider />
      <KeyFeatures />
      <AdminDashboard />
      <Unleash />
      <CustomerStories />
      <Pricing />
      <FeaturesAtGlance />
      <QandA />
    </div>
    <Footer />
   </div>
  );
}