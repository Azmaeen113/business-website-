import { ClipboardCheck, Search, Banknote } from "lucide-react";

interface ThreeStepProcessProps {
  onApplyClick: () => void;
}

const ThreeStepProcess = ({ onApplyClick }: ThreeStepProcessProps) => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "COMPLETE OUR SECURE 2 MIN APPLICATION",
      description: "Fill out our simple online application in just 2 minutes. We only ask for the essential information needed to evaluate your funding options.",
    },
    {
      icon: Search,
      number: "02",
      title: "REVIEW OPTIONS AND PICK THE ONE",
      description: "Our team will analyze your application and present you with multiple funding options tailored to your business needs.",
    },
    {
      icon: Banknote,
      number: "03",
      title: "RECEIVE FUNDING QUICKLY",
      description: "Once approved, funds can be deposited directly into your business account within 24-48 hours.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-wider text-sm font-semibold">
            Simple & Fast
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 font-heading">
            OUR 3 STEP <span className="text-gold">PROCESS</span>
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Getting the funding you need has never been easier. Follow our simple 3-step process and get funded fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="text-gold text-5xl font-bold mb-4 font-heading opacity-30">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-4 font-heading">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onApplyClick} className="btn-gold text-lg px-12">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
