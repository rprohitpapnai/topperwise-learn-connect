import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe } from "lucide-react";

const boards = [
  {
    name: "CBSE",
    description: "Central Board of Secondary Education",
    subjects: "Math, Science, English, Social Studies",
  },
  {
    name: "ICSE",
    description: "Indian Certificate of Secondary Education",
    subjects: "All core and elective subjects",
  },
  {
    name: "IGCSE",
    description: "International General Certificate of Secondary Education",
    subjects: "Full curriculum support",
  },
  {
    name: "State Boards",
    description: "All State Board Curricula",
    subjects: "Region-specific syllabus",
  },
  {
    name: "IB",
    description: "International Baccalaureate",
    subjects: "Full IB curriculum support",
  },
  {
    name: "International",
    description: "UK, USA, UAE, Australia & more",
    subjects: "Country-specific curricula",
  },
];

const countries = ["🇮🇳 India", "🇦🇪 UAE", "🇬🇧 UK", "🇺🇸 USA", "🇦🇺 Australia", "🇸🇬 Singapore", "🇨🇦 Canada", "🇶🇦 Qatar"];

const Boards = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supporting All Major <span className="text-primary">Education Boards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer specialized tutoring for classes 1-12 across different educational boards worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {boards.map((board, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors animate-slide-up">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{board.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{board.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {board.subjects}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Countries section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Students from Around the World</h3>
          </div>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            We teach students from across the globe, adapting to their local curriculum and timezone
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <Badge key={country} variant="outline" className="text-base py-2 px-5 bg-background">
                {country}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Classes 1 to 12</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Comprehensive curriculum coverage from foundational concepts to advanced topics, preparing
            students for board exams and competitive tests.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`).map((cls) => (
              <Badge key={cls} variant="outline" className="text-base py-2 px-4">
                {cls}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boards;
