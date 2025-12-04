import { Check } from "lucide-react";
import whyChooseUs from "@/assets/why-choose-us.jpg";

const WhyChooseUs = () => {
  const reasons = [
    "Funding Made Easy – Get Approved in Minutes",
    "How To Outsmart Your Competition",
    "Use Our Free Business Credit Building Tools",
    "No Direct File Access to Your Accounts",
    "Offer Industry Leading Terms & Rates",
    "Dedicated Support Team Available 24/7",
    "Fast Funding Within 24-48 Hours",
    "Multiple Funding Options to Choose From",
  ];

  return (
    <section className="py-20 bg-secondary section-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="section-subtitle">We Partner With You</span>
            <h2 className="section-title mt-2 mb-8">
              WHY CHOOSE <span className="text-accent">US?</span>
            </h2>
            
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src={whyChooseUs}
              alt="Professional using laptop"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
