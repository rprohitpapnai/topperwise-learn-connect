import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Users, Star, Sparkles, Calculator, Atom, Pencil, Brain } from "lucide-react";
import heroStudents from "@/assets/hero-students.png";
import { Link } from "react-router-dom";

const FloatingIcon = ({
  icon: Icon,
  className,
  delay,
  duration,
  color,
}: {
  icon: React.ElementType;
  className: string;
  delay: string;
  duration: string;
  color: string;
}) => (
  <div
    className={`absolute rounded-2xl shadow-lg flex items-center justify-center ${className}`}
    style={{
      animation: `float ${duration} ease-in-out ${delay} infinite`,
    }}
  >
    <Icon className={`h-6 w-6 ${color}`} />
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Globe className="h-4 w-4" />
              Trusted by students in India, UAE, UK, USA, Australia & more
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalized Learning for Your Child's{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Success
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              One-on-one tutoring with expert educators for classes 1-12. Track progress in real-time
              across CBSE, ICSE, IGCSE, and international boards worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learn More
                </Button>
              </Link>
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
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Animated floating elements area */}
          <div className="relative h-[400px] md:h-[500px] animate-fade-in">
            {/* Central circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              <img src={heroStudents} alt="Students learning online" className="w-full h-full object-contain drop-shadow-lg" style={{ animation: 'float 4s ease-in-out infinite' }} />
            </div>

            {/* Floating icons */}
            <FloatingIcon
              icon={Calculator}
              className="w-14 h-14 bg-accent/20 top-[8%] left-[15%]"
              delay="0s"
              duration="3s"
              color="text-accent"
            />
            <FloatingIcon
              icon={Atom}
              className="w-16 h-16 bg-primary/20 top-[5%] right-[20%]"
              delay="0.5s"
              duration="3.5s"
              color="text-primary"
            />
            <FloatingIcon
              icon={Pencil}
              className="w-12 h-12 bg-accent/20 top-[35%] right-[5%]"
              delay="1s"
              duration="2.8s"
              color="text-accent"
            />
            <FloatingIcon
              icon={Brain}
              className="w-14 h-14 bg-primary/20 bottom-[25%] right-[15%]"
              delay="1.5s"
              duration="3.2s"
              color="text-primary"
            />
            <FloatingIcon
              icon={Star}
              className="w-12 h-12 bg-accent/20 bottom-[10%] left-[25%]"
              delay="0.8s"
              duration="3.4s"
              color="text-accent"
            />
            <FloatingIcon
              icon={Users}
              className="w-14 h-14 bg-primary/20 top-[45%] left-[2%]"
              delay="0.3s"
              duration="3.1s"
              color="text-primary"
            />
            <FloatingIcon
              icon={Globe}
              className="w-16 h-16 bg-accent/20 bottom-[5%] right-[35%]"
              delay="1.2s"
              duration="3.6s"
              color="text-accent"
            />
            <FloatingIcon
              icon={Sparkles}
              className="w-10 h-10 bg-primary/20 top-[20%] left-[45%]"
              delay="0.6s"
              duration="2.5s"
              color="text-primary"
            />

            {/* Dashed connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <circle cx="50%" cy="50%" r="38%" fill="none" stroke="hsl(var(--primary) / 0.15)" strokeWidth="2" strokeDasharray="8 6" />
              <circle cx="50%" cy="50%" r="48%" fill="none" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1.5" strokeDasharray="6 8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
