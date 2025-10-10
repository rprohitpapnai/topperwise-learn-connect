import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free trial session to get started",
  "No long-term commitments required",
  "Cancel anytime with full refund",
  "24/7 parent support available",
];

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Child's Learning Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of parents who trust ToppersWise for their child's academic success
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">{benefit}</span>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            variant="hero"
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-8 py-6 h-auto"
          >
            Book Your Free Trial Now
            <ArrowRight className="h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm opacity-75">No credit card required • Get started in 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
