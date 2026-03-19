import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl animate-fade-in">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Last updated: March 2026</p>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">1. Information We Collect</h3>
                <p className="text-muted-foreground">
                  We collect personal information that you provide when signing up for our tutoring services, including your name, email address, phone number, class/grade level, and location. This applies to students and parents across India, UAE, UK, USA, Australia, Singapore, Canada, Qatar, and other countries we serve.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">2. How We Use Your Information</h3>
                <p className="text-muted-foreground">
                  Your information is used to provide personalized one-on-one tutoring services for classes 1-12, match you with appropriate tutors, schedule sessions, track academic progress, and communicate important updates about your learning journey.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">3. Data Security</h3>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information. All sessions are conducted via secure Google Meet links, and your data is encrypted during transmission and storage.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">4. Sharing of Information</h3>
                <p className="text-muted-foreground">
                  We do not sell, trade, or share your personal information with third parties for marketing purposes. Information may be shared with assigned tutors solely for the purpose of delivering tutoring services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">5. Cookies & Analytics</h3>
                <p className="text-muted-foreground">
                  Our website may use cookies and analytics tools to improve user experience and understand how our services are used. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">6. Children's Privacy</h3>
                <p className="text-muted-foreground">
                  As an education platform serving students from classes 1-12, we take children's privacy seriously. We collect only the information necessary to provide tutoring services and require parental consent for students under 13.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">7. Your Rights</h3>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at{" "}
                  <a href="mailto:topprwisework@gmail.com" className="text-primary hover:underline">topprwisework@gmail.com</a>.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-2">8. Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:topprwisework@gmail.com" className="text-primary hover:underline">topprwisework@gmail.com</a>{" "}
                  or call <a href="tel:+917455971428" className="text-primary hover:underline">+91 7455971428</a>.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
