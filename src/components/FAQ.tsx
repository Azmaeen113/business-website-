import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much funding can I qualify for?",
      answer: "Funding amounts range from $5,000 to $5,000,000 depending on your business revenue, time in business, and credit profile. Our team will work with you to determine the best funding amount for your specific needs.",
    },
    {
      question: "What is the application process like?",
      answer: "Our application process is simple and takes only about 2 minutes to complete. You'll provide basic business information, and our team will review your application and present you with funding options typically within 24 hours.",
    },
    {
      question: "How long does approval take?",
      answer: "Most applications receive a decision within 24 hours. Once approved, funds can be deposited into your business account within 24-48 hours.",
    },
    {
      question: "Are there any restrictions on how I can use the funding?",
      answer: "No, there are no restrictions on how you use your funding. Whether it's for inventory, equipment, payroll, marketing, expansion, or working capital, the choice is yours.",
    },
    {
      question: "What are the requirements to qualify?",
      answer: "Basic requirements include being in business for at least 6 months, having a minimum monthly revenue of $10,000, and a business bank account. Credit requirements vary by product.",
    },
    {
      question: "Do you check personal credit?",
      answer: "We may perform a soft credit check that doesn't affect your credit score. We also consider other factors like business revenue and time in operation when making funding decisions.",
    },
    {
      question: "What if my bank denied my loan application?",
      answer: "We specialize in helping businesses that have been turned down by traditional banks. Our alternative lending solutions have different qualification criteria that may work for your situation.",
    },
    {
      question: "Can I apply if I have bad credit?",
      answer: "Yes, we work with businesses across the credit spectrum. While credit is considered, we focus more on your business's cash flow and revenue potential.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title mt-2">
            FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-md border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
