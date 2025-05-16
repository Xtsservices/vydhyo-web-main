import Header from "./components/Header";
import IndexPage from "./pages/index";
import FeaturePills from './components/ScrollingFeaturePills';
import LtrRtlTemplates from './components/LtrRtlTemplates';
import ChooseUsSection from './components/ChooseUsSection';

export default function Home() {
  return (
   <>
    <Header/>
    <IndexPage/>
    <FeaturePills />
    <LtrRtlTemplates />
    <ChooseUsSection />
   </>
  );
}
