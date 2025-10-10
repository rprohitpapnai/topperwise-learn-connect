import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalized Learning for Your Child's{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Success
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              One-on-one tutoring with expert educators for classes 8-12. Track progress in real-time
              across CBSE, ICSE, IGCSE, and other boards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Expert Tutors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img
              src={heroImage}
              alt="Students learning online with tutors"
              className="rounded-2xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
