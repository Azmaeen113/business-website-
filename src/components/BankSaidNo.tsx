import { Check } from "lucide-react";

interface BankSaidNoProps {
  onApplyClick: () => void;
}

const BankSaidNo = ({ onApplyClick }: BankSaidNoProps) => {
  const benefits = [
    "Private lending that's fast and flexible",
    "Minimal documentation required to get started",
    "Loan options for businesses in any credit situation",
    "Expert guidance from $25K and even higher",
    "Direct to you—no middlemen, no waiting",
    "Quick and easy application process",
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 font-heading">
            Bank Said No?<br />
            <span className="text-gold">Relax, we got this...</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Don't let traditional banks hold you back. We specialize in helping businesses that need alternative financing solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold-foreground" />
                </div>
                <span className="text-primary-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <button onClick={onApplyClick} className="btn-gold text-lg px-12">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BankSaidNo;
