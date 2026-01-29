import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
//import Popup from "@/components/popup";
import BackToTop from "@/components/ui/back-to-top";

import SliderSection from "@/components/pages/slide-section";
import CalendarSection from "@/components/pages/calendar-section";
import YoutubeSection from "@/components/pages/youtube-section";
import NoticeSection from "@/components/pages/notice-section";
import SiteSection from "@/components/pages/site-section";
import FaqSection from "@/components/pages/faq-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <SliderSection />
        <CalendarSection />
        <NoticeSection />
        <YoutubeSection />
        <SiteSection />
        <FaqSection />
      </main>
      <Footer />
      {/* <Popup /> */}
      <BackToTop />
    </>
  );
}
