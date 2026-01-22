import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const team = [
		{
			name: "Rohit Papnai",
			role: "Founder & Head Tutor",
			img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
			bio: "Rohit brings over 4 years of experience in education and is passionate about helping students unlock their true potential."
		},
	{
		name: "Priya Verma",
		role: "Senior Math Tutor",
		img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
		bio: "Priya specializes in mathematics and has helped hundreds of students excel in board exams."
	},
	{
		name: "Akshit Patwal",
		role: "Science Tutor",
		img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
		bio: "Akshit makes science fun and accessible, inspiring curiosity and deeper understanding."
	},
];

const testimonials = [
	{
		name: "Riya Patel",
		text: "ToppersWise helped my son improve his grades and confidence. The tutors are supportive and truly care about each student.",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
	},
	{
		name: "Arjun Mehta",
		text: "The personalized sessions and flexible scheduling made learning stress-free. Highly recommend to all parents!",
		img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
	},
];

const values = [
	{
		title: "Inclusive",
		desc: "We welcome students from all backgrounds and learning levels, ensuring everyone feels supported."
	},
	{
		title: "Responsible",
		desc: "We take responsibility for every learner’s progress and well-being."
	},
	{
		title: "Respectful",
		desc: "We foster a respectful environment where every voice is heard and valued."
	},
	{
		title: "Collaborative",
		desc: "We work together with students and parents to achieve the best outcomes."
	},
];

const About = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 py-12 bg-background">
				<div className="w-full max-w-3xl mx-auto animate-fade-in">
					<Card className="shadow-lg mb-8">
						<CardHeader>
							<CardTitle className="text-3xl">We are here to help students achieve their best</CardTitle>
							<p className="text-muted-foreground text-lg mt-2">Every learner deserves support, mentorship, and a joyful learning experience.</p>
						</CardHeader>
						<CardContent>
							<img
								src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
								alt="Tutoring Stock"
								className="w-full h-56 object-cover rounded-lg mb-6"
							/>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div>
									<h3 className="font-semibold text-xl text-primary mb-2">Our Mission</h3>
									<p className="text-base text-muted-foreground">To empower students with personalized, one-on-one online tutoring and mentorship, helping them excel academically and grow confidently.</p>
								</div>
								<div>
									<h3 className="font-semibold text-xl text-primary mb-2">Our Vision</h3>
									<p className="text-base text-muted-foreground">To inspire lifelong learning and create a supportive community where every student can thrive and reach their full potential.</p>
								</div>
							</div>
							<div className="mb-8">
								<h3 className="font-semibold text-xl text-primary mb-4">Our Core Values</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{values.map((v, i) => (
										<div key={i} className="bg-secondary/30 rounded-lg p-4">
											<h4 className="font-semibold text-lg mb-1">{v.title}</h4>
											<p className="text-muted-foreground text-base">{v.desc}</p>
										</div>
									))}
								</div>
							</div>
							<div className="mb-8">
								<h3 className="font-semibold text-xl text-primary mb-4">Meet Our Team</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{team.map((member, i) => (
										<div key={i} className="flex flex-col items-center text-center">
											<img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-2" />
											<h4 className="font-semibold text-lg">{member.name}</h4>
											<span className="text-primary text-sm mb-1">{member.role}</span>
											<p className="text-muted-foreground text-sm">{member.bio}</p>
										</div>
									))}
								</div>
							</div>
							<div className="mb-8">
								<h3 className="font-semibold text-xl text-primary mb-4">What Parents & Students Say</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{testimonials.map((t, i) => (
										<div key={i} className="bg-secondary/30 rounded-lg p-4 flex items-center gap-4">
											<img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
											<div>
												<p className="text-base text-muted-foreground mb-2">{t.text}</p>
												<span className="font-semibold text-primary text-sm">{t.name}</span>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="text-center mt-8">
								<h3 className="font-semibold text-xl text-primary mb-2">Get in Touch</h3>
								<p className="text-base text-muted-foreground mb-2">Email: <a href="mailto:topprwisework@gmail.com" className="text-primary underline">topprwisework@gmail.com</a></p>
								<p className="text-base text-muted-foreground mb-2">Phone: <a href="tel:+917455971428" className="text-primary underline">+91 7455971428</a></p>
								<div className="flex justify-center gap-4 mt-2">
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
									</a>
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
									</a>
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6" />
									</a>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default About;
