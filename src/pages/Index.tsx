import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessSolutions from "@/components/BusinessSolutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import ConsultationForm from "@/components/ConsultationForm";
import BankSaidNo from "@/components/BankSaidNo";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";
import { Helmet } from "react-helmet-async";
import sponsorshipImage from "@/assets/google sponsorship.jpg";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Helmet>
        <title>Goldrock Funding - Business Funding Solutions | Fast Approval</title>
        <meta
          name="description"
          content="Get business funding fast with Goldrock Funding. We offer business loans, equipment financing, working capital, and more. Apply now for hassle-free funding."
        />
        <meta name="keywords" content="business funding, business loans, equipment financing, working capital, merchant cash advance" />
      </Helmet>

      <div className="min-h-screen">
        <Header onApplyClick={openModal} />
        <main>
          <Hero onApplyClick={openModal} />
          <BusinessSolutions onApplyClick={openModal} />
          <WhyChooseUs />
          <Services />
          <ThreeStepProcess onApplyClick={openModal} />
          <ConsultationForm />
          <BankSaidNo onApplyClick={openModal} />
          <FAQ />
          <Contact />
          
          {/* Sponsorship Section */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <img 
                  src={sponsorshipImage} 
                  alt="Google Sponsorship" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
          {/* Statcounter Code */}
          <div suppressHydrationWarning>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  var sc_project=13197783;
                  var sc_invisible=1;
                  var sc_security="c03bf161";
                `
              }}
            />
            <script
              type="text/javascript"
              src="https://www.statcounter.com/counter/counter.js"
              async
            />
            <noscript>
              <div className="statcounter">
                <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
                  <img
                    className="statcounter"
                    src="https://c.statcounter.com/13197783/0/c03bf161/1/"
                    alt="Web Analytics"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </noscript>
          </div>
      </div>
    </>
  );
};

export default Index;
