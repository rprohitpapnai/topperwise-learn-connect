import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly Plan",
      price: "$228",
      period: "per month",
      classes: "12 classes per subject",
      features: [
        "One-on-one tutoring",
        "12 classes per subject",
        "Real-time progress tracking",
        "Flexible scheduling",
        "All boards supported",
      ],
    },
    {
      name: "3 Months Plan",
      price: "$666",
      period: "3 months",
      classes: "36 classes per subject",
      features: [
        "One-on-one tutoring",
        "36 classes per subject",
        "Real-time progress tracking",
        "Flexible scheduling",
        "All boards supported",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "6 Months Plan",
      price: "$1,200",
      period: "6 months",
      classes: "72 classes per subject",
      features: [
        "One-on-one tutoring",
        "72 classes per subject",
        "Real-time progress tracking",
        "Flexible scheduling",
        "All boards supported",
        "Priority support",
        "Free study materials",
      ],
    },
    {
      name: "Annual Plan",
      price: "$2,350",
      period: "12 months",
      classes: "144 classes per subject",
      discount: "Best Value - Save $386",
      features: [
        "One-on-one tutoring",
        "144 classes per subject",
        "Real-time progress tracking",
        "Flexible scheduling",
        "All boards supported",
        "Priority support",
        "Free study materials",
        "Dedicated academic advisor",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Plan</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible pricing options to fit your learning goals. All plans include personalized one-on-one tutoring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-primary shadow-glow scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  {plan.discount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.discount}
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    </div>
                    <CardDescription className="text-base font-semibold mt-2">
                      {plan.classes}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.popular || plan.discount ? "hero" : "default"}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
