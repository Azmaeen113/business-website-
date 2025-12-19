import heroBg from "@/assets/222.png";

interface HeroProps {
  onApplyClick: () => void;
}

const Hero = ({ onApplyClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          LOOKING FOR FUNDING<br />
          <span className="text-gold">FOR YOUR BUSINESS?</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          We have a simple hassle-free funding process with the working capital support you need to grow your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <button onClick={onApplyClick} className="btn-primary">
            APPLY NOW
          </button>
          <a href="#contact" className="btn-outline">
            CONTACT US
          </a>
        </div>
      </div>

      {/* Scroll Indicator removed as requested */}
    </section>
  );
};

export default Hero;
