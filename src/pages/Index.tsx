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
      </div>
    </>
  );
};

export default Index;
