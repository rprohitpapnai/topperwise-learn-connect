import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, BookOpen, Clock, Users, HelpCircle } from "lucide-react";

const helpTopics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn how to sign up, book your first session, and get the most out of ToppersWise tutoring for classes 1-12.",
  },
  {
    icon: Clock,
    title: "Scheduling & Rescheduling",
    description: "Flexible scheduling across all timezones — India, UAE, UK, USA, Australia & more. Reschedule anytime with 24-hour notice.",
  },
  {
    icon: Users,
    title: "Finding the Right Tutor",
    description: "Our expert tutors cover CBSE, ICSE, IGCSE, IB and international curricula. We match you with the best fit for your child.",
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Sessions run on Google Meet — no extra software needed. If you face any issues, our support team is here to help.",
  },
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Can We <span className="text-primary">Help You?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers, get support, and make the most of your learning experience with ToppersWise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {helpTopics.map((topic, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <topic.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{topic.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Our support team is available to assist students and parents across India, UAE, UK, USA, Australia, Singapore, Canada & Qatar.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:topprwisework@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-5 w-5" /> topprwisework@gmail.com
                </a>
                <a href="tel:+917455971428" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-5 w-5" /> +91 7455971428
                </a>
                <a href="https://wa.me/917455971428" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
