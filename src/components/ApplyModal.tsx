import { useState } from "react";
import { X, ArrowLeft, Check, BarChart3, Truck, CreditCard, Megaphone, TrendingUp, DollarSign, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FundingPurpose = "inventory" | "equipment" | "payroll" | "marketing" | "expansion" | "working-capital";

interface FormData {
  timeInBusiness: string;
  fundingPurpose: FundingPurpose[];
  fundingAmount: string;
  annualSales: string;
  creditScore: string;
  companyName: string;
  companyAddress: string;
  ein: string;
  companyEmail: string;
  companyPhone: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agreedToTerms: boolean;
}

const ApplyModal = ({ isOpen, onClose }: ApplyModalProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 7;

  const [formData, setFormData] = useState<FormData>({
    timeInBusiness: "",
    fundingPurpose: [],
    fundingAmount: "50000",
    annualSales: "",
    creditScore: "",
    companyName: "",
    companyAddress: "",
    ein: "",
    companyEmail: "",
    companyPhone: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreedToTerms: false,
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Prepare email body with all form data
      const emailBody = `
NEW FUNDING APPLICATION
========================

TIME IN BUSINESS
${formData.timeInBusiness}

FUNDING PURPOSE
${formData.fundingPurpose.join(', ')}

FUNDING AMOUNT
$${parseInt(formData.fundingAmount || "0").toLocaleString()}

ANNUAL SALES
${formData.annualSales}

CREDIT SCORE
${formData.creditScore}

COMPANY INFORMATION
-------------------
Company Name: ${formData.companyName}
Company Address: ${formData.companyAddress}
EIN: ${formData.ein}
Company Email: ${formData.companyEmail}
Company Phone: ${formData.companyPhone}

CONTACT INFORMATION
-------------------
Name: ${formData.firstName} ${formData.lastName}
Personal Email: ${formData.email}
Personal Phone: ${formData.phone}

Terms Agreed: ${formData.agreedToTerms ? 'Yes' : 'No'}
      `.trim();

      // Create mailto link with all information
      const subject = encodeURIComponent(`New Funding Application - ${formData.companyName}`);
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:Info@GoldrockFunding.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      // Small delay to ensure mailto opens
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Application Submitted!",
        description: "Your email client has been opened. Please send the email to complete your application.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
    setTimeout(() => {
      onClose();
      setCurrentStep(1);
      setFormData({
        timeInBusiness: "",
        fundingPurpose: [],
        fundingAmount: "50000",
        annualSales: "",
        creditScore: "",
        companyName: "",
        companyAddress: "",
        ein: "",
        companyEmail: "",
        companyPhone: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        agreedToTerms: false,
      });
    }, 1500);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.timeInBusiness !== "";
      case 2:
        return formData.fundingPurpose.length > 0;
      case 3:
        return formData.fundingAmount !== "" && parseInt(formData.fundingAmount) >= 5000 && parseInt(formData.fundingAmount) <= 5000000;
      case 4:
        return formData.annualSales !== "";
      case 5:
        return formData.creditScore !== "";
      case 6:
        return formData.companyName.trim() !== "" && 
               formData.companyAddress.trim() !== "" && 
               formData.ein.trim() !== "" && 
               formData.companyEmail.trim() !== "" && 
               formData.companyPhone.trim() !== "";
      case 7:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.agreedToTerms
        );
      default:
        return true;
    }
  };

  const timeInBusinessOptions = [
    "Not Yet Established",
    "Less than 6 Months",
    "6 Months to 1 Year",
    "1 to 3 Years",
    "Greater than 3 Years",
  ];

  const fundingPurposeOptions: { id: FundingPurpose; label: string; icon: React.ElementType }[] = [
    { id: "inventory", label: "Inventory", icon: BarChart3 },
    { id: "equipment", label: "Equipment", icon: Truck },
    { id: "payroll", label: "Payroll", icon: CreditCard },
    { id: "marketing", label: "Marketing", icon: Megaphone },
    { id: "expansion", label: "Expansion", icon: TrendingUp },
    { id: "working-capital", label: "Working Capital", icon: DollarSign },
  ];

  const annualSalesOptions = [
    "Less than $100,000",
    "$100k-$200k",
    "$200k-$500k",
    "$500k-$1MM",
    "$1MM and up",
  ];

  const creditScoreOptions = [
    { label: "Excellent (720+)", value: "excellent" },
    { label: "Good (680-719)", value: "good" },
    { label: "Fair (640-679)", value: "fair" },
    { label: "Okay (600-639)", value: "okay" },
    { label: "Not So Good (599 or less)", value: "poor" },
  ];

  const toggleFundingPurpose = (purpose: FundingPurpose) => {
    setFormData((prev) => ({
      ...prev,
      fundingPurpose: prev.fundingPurpose.includes(purpose)
        ? prev.fundingPurpose.filter((p) => p !== purpose)
        : [...prev.fundingPurpose, purpose],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Progress Bar */}
        <div className="p-6 pb-0">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Time in Business */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                How long have you been in business?
              </h2>
              <div className="space-y-3">
                {timeInBusinessOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, timeInBusiness: option })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      formData.timeInBusiness === option
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.timeInBusiness === option
                            ? "border-accent bg-accent"
                            : "border-muted-foreground"
                        }`}
                      >
                        {formData.timeInBusiness === option && (
                          <Check className="w-3 h-3 text-accent-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Funding Purpose */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                How will you use the funding?
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {fundingPurposeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleFundingPurpose(option.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      formData.fundingPurpose.includes(option.id)
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <option.icon
                      className={`w-8 h-8 mx-auto mb-2 ${
                        formData.fundingPurpose.includes(option.id)
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-medium text-foreground text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Funding Amount */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                How much funding are you looking for?
              </h2>
              <p className="text-muted-foreground mb-6">
                Select an amount between $5,000 and $5,000,000
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                  $
                </span>
                <input
                  type="number"
                  min="5000"
                  max="5000000"
                  value={formData.fundingAmount}
                  onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}
                  className="form-input pl-8 text-2xl font-bold"
                  placeholder="50000"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                ${parseInt(formData.fundingAmount || "0").toLocaleString()}
              </p>
            </div>
          )}

          {/* Step 4: Annual Sales */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                What is your gross annual sales?
              </h2>
              <div className="space-y-3">
                {annualSalesOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, annualSales: option })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      formData.annualSales === option
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.annualSales === option
                            ? "border-accent bg-accent"
                            : "border-muted-foreground"
                        }`}
                      >
                        {formData.annualSales === option && (
                          <Check className="w-3 h-3 text-accent-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Credit Score */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                What is your credit score?
              </h2>
              <p className="text-muted-foreground mb-6">Credit Rating:</p>
              <div className="space-y-3">
                {creditScoreOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, creditScore: option.value })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      formData.creditScore === option.value
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.creditScore === option.value
                            ? "border-accent bg-accent"
                            : "border-muted-foreground"
                        }`}
                      >
                        {formData.creditScore === option.value && (
                          <Check className="w-3 h-3 text-accent-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Company Information */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                Company Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="form-input"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Address *
                  </label>
                  <input
                    type="text"
                    value={formData.companyAddress}
                    onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                    className="form-input"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    EIN (Employer Identification Number) *
                  </label>
                  <input
                    type="text"
                    value={formData.ein}
                    onChange={(e) => setFormData({ ...formData, ein: e.target.value })}
                    className="form-input"
                    placeholder="XX-XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.companyEmail}
                    onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                    className="form-input"
                    placeholder="company@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.companyPhone}
                    onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Contact Information */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="form-input"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="form-input"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input pl-10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      🇺🇸 +1
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input pl-16"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree with the terms and conditions. By providing your phone number, you agree 
                    to receive text messages from Goldrock Funding. Message & data rates may apply. 
                    Message frequency varies. Reply STOP to opt out.
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="p-6 pt-0 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
