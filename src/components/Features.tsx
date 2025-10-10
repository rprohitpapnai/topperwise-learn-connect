import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "One-on-One Tutoring",
    description: "Personalized attention from expert educators tailored to your child's unique learning style and pace.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Real-time progress monitoring with detailed analytics and regular reports to parents.",
  },
  {
    icon: Shield,
    title: "Verified Tutors",
    description: "All our tutors are thoroughly vetted, qualified, and experienced in their subject areas.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose class timings that work best for your child's schedule and learning rhythm.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">ToppersWise</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support to ensure your child excels academically
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-shadow animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
