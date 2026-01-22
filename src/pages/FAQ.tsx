import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "How does Topper Tutor work?",
		answer:
			"Topper Tutor offers personalized, one-on-one tutoring sessions tailored to each student's needs. After enrolling, you will receive a Google Meet link for your scheduled class. Simply join the session at your designated time and our expert tutor will guide you through your learning journey, ensuring you get the most out of every lesson.",
	},
	{
		question: "Can I try a few sessions before committing?",
		answer:
			"Absolutely! We provide the first lesson as a free trial so you can experience our teaching style and platform. After your trial, you only pay for the sessions you attend—no upfront payments or hidden fees. This way, you can make an informed decision about continuing with us.",
	},
	{
		question: "How are lessons conducted?",
		answer:
			"All lessons are conducted via Google Meet, which means you don’t need to download any additional software. Everything happens online, making it convenient and accessible from any device with internet access. Our tutors use interactive tools and resources to make each session engaging and effective.",
	},
	{
		question: "Are there any hidden charges?",
		answer:
			"No, there are no hidden charges. All our fees are inclusive of taxes and clearly communicated upfront. You only pay for the sessions you attend, and there are no surprise costs or additional fees beyond what is stated.",
	},
	{
		question: "Do I really need a tutor?",
		answer:
			"Tutoring isn’t just for students who are struggling. A tutor can act as a mentor, providing support, encouragement, and strategies to help you excel academically. Whether you want to improve your grades, prepare for exams, or simply deepen your understanding of a subject, a tutor can make a significant difference in your learning experience.",
	},
];

const FAQ = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 flex items-center justify-center py-12 bg-background">
				<div className="w-full max-w-2xl mx-auto animate-fade-in">
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle>Frequently Asked Questions</CardTitle>
							<p className="text-muted-foreground text-sm mt-2">
								Find answers to the most common questions about Topper Tutor.
							</p>
						</CardHeader>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								{faqs.map((faq, idx) => (
									<AccordionItem key={idx} value={`faq-${idx}`}>
										<AccordionTrigger className="font-semibold text-lg text-primary">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground text-base leading-relaxed">
											{faq.answer}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default FAQ;
