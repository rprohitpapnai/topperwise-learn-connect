import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const subjects = [
	"Mathematics",
	"Physics",
	"Chemistry",
	"Biology",
	"English",
	"Computer Science",
	"Other",
];



const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		class: "",
		phone: "",
		subject: "",
		demoTopic: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 flex items-center justify-center py-12 bg-background">
				<div className="w-full max-w-xl mx-auto animate-fade-in">
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
							<p className="text-muted-foreground text-sm mt-2">
								Fill out the form below to connect with our team and book your free demo session.
							</p>
						</CardHeader>
						<CardContent>
							<form className="space-y-5">
								<div>
									<Label htmlFor="name">Your Name</Label>
									<Input
										id="name"
										name="name"
										type="text"
										placeholder="Enter your name"
										value={form.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="class">Your Class</Label>
									<Input
										id="class"
										name="class"
										type="text"
										placeholder="e.g. 10th, 12th, B.Sc, etc."
										value={form.class}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="phone">Phone Number</Label>
									<Input
										id="phone"
										name="phone"
										type="tel"
										placeholder="Enter your phone number"
										value={form.phone}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="subject">Subject for Tutoring</Label>
									<Select
										value={form.subject}
										onValueChange={(value) => setForm({ ...form, subject: value })}
									>
										<SelectTrigger id="subject">
											<SelectValue placeholder="Select subject" />
										</SelectTrigger>
										<SelectContent>
											{subjects.map((subj) => (
												<SelectItem key={subj} value={subj}>{subj}</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
												<div>
													<Label htmlFor="demoTopic">Demo Topic (Enter the topic you want to try in the demo)</Label>
													<Input
														id="demoTopic"
														name="demoTopic"
														type="text"
														placeholder="e.g. Algebra, Programming, Board Exam Prep, etc."
														value={form.demoTopic}
														onChange={handleChange}
														required
													/>
												</div>
								<Button type="submit" variant="hero" size="lg" className="w-full mt-2">
									Submit &amp; Book Free Demo
								</Button>
							</form>
							<div className="mt-8 text-center text-base text-muted-foreground">
								<span className="font-semibold text-primary">The demo is absolutely free!</span> Connect with our team and you’ll receive a personalized demo session in the topic of your choice. Experience our teaching before you commit—no obligations, just learning!
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
