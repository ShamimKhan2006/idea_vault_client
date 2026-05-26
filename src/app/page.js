import Banner from "@/components/Banner";
import ChoiseIdeaVault from "@/components/ChoiseIdeaVault";
import Home_idea from "@/components/Home_idea";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import TrendingCategoris from "@/components/TrendingCategoris";


export default function Home() {
  return (
    <div>
 
      {/* https://preview.themeforest.net/item/nexi-saas-technology-wordpress-theme/full_screen_preview/63201128 */}
      {/* https://wgl-dsites.net/nexi/homepage-3/ */}
        <Banner></Banner>
        <Home_idea></Home_idea>
        <ChoiseIdeaVault></ChoiseIdeaVault>
        <TrendingCategoris/>
        <Section/>
    
    </div>
  );
}
