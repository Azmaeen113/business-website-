import { Check } from "lucide-react";
import businessSolutions from "@/assets/business-people-meeting-room-discussing-charts.png";

interface BusinessSolutionsProps {
  onApplyClick: () => void;
}

const BusinessSolutions = ({ onApplyClick }: BusinessSolutionsProps) => {
  const benefits = [
    "Quick approval process",
    "Flexible repayment terms",
    "No collateral required",
    "Competitive rates",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img
              src={businessSolutions}
              alt="Business funding consultation"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <span className="section-subtitle">Funding Solutions</span>
            <h2 className="section-title mt-2 mb-6">
              BUSINESS FUNDING<br />
              <span className="text-accent">SOLUTIONS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Goldrock Funding, we understand that every business has unique financial needs. 
              Whether you're looking to expand operations, purchase equipment, or manage cash flow, 
              our team of experts is here to help you find the perfect funding solution tailored 
              to your specific requirements.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <button onClick={onApplyClick} className="btn-primary">
              Apply for Funding
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
