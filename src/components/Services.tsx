import { 
  Briefcase, 
  Truck, 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Building 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Traditional term loans with competitive rates and flexible repayment options for established businesses.",
    },
    {
      icon: Truck,
      title: "Equipment Financing",
      description: "Finance new or used equipment with terms tailored to match the lifespan of your assets.",
    },
    {
      icon: DollarSign,
      title: "Working Capital",
      description: "Short-term funding solutions to cover day-to-day operational expenses and grow your business.",
    },
    {
      icon: CreditCard,
      title: "Lines of Credit",
      description: "Flexible revolving credit lines that give you access to funds whenever you need them.",
    },
    {
      icon: TrendingUp,
      title: "Merchant Cash Advance",
      description: "Quick funding based on your future credit card sales with easy automatic repayments.",
    },
    {
      icon: FileText,
      title: "Invoice Factoring",
      description: "Convert your outstanding invoices into immediate working capital for your business.",
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Financing solutions for purchasing, refinancing, or renovating commercial properties.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title mt-2">
            OUR <span className="text-accent">SERVICES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
