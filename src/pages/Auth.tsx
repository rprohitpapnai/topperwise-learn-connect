import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Lock, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();

    const defaultTab = location.pathname === "/signup" ? "signup" : "login";
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setActiveTab(location.pathname === "/signup" ? "signup" : "login");
    }, [location.pathname]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        navigate(value === "signup" ? "/signup" : "/login");
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Successfully logged in",
                description: "Welcome back to TopperWise!",
            });
            navigate("/");
        }, 1500);
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock signup
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Account created successfully",
                description: "Welcome to TopperWise! Please complete your profile.",
            });
            navigate("/");
        }, 1500);
    };

    const handleGoogleAuth = () => {
        setIsLoading(true);
        // Mock Google Auth
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Google Authentication",
                description: "Successfully authenticated with Google.",
            });
            navigate("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-4 py-12">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl font-bold tracking-tight">
                            {activeTab === "login" ? "Welcome back" : "Create an account"}
                        </CardTitle>
                        <CardDescription>
                            {activeTab === "login"
                                ? "Enter your credentials to access your account"
                                : "Enter your information to get started"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>

                            <TabsContent value="login">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" onClick={handleGoogleAuth} disabled={isLoading}>
                                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                            </svg>
                                            Google
                                        </Button>
                                        <Button variant="outline" onClick={() => setAuthMethod(authMethod === "email" ? "phone" : "email")} disabled={isLoading}>
                                            {authMethod === "email" ? <Phone className="mr-2 h-4 w-4" /> : <Mail className="mr-2 h-4 w-4" />}
                                            {authMethod === "email" ? "Phone" : "Email"}
                                        </Button>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>

                                    <form onSubmit={handleLogin} className="space-y-4">
                                        {authMethod === "email" ? (
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input id="email" placeholder="m@example.com" type="email" className="pl-10" required />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input id="phone" placeholder="+91 98765 43210" type="tel" className="pl-10" required />
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="password">Password</Label>
                                                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                                            </div>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input id="password" type="password" className="pl-10" required />
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                            {isLoading ? "Signing in..." : "Sign In"}
                                        </Button>
                                    </form>
                                </div>
                            </TabsContent>

                            <TabsContent value="signup">
                                <div className="space-y-4">
                                    <Button variant="outline" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
                                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                        </svg>
                                        Sign up with Google
                                    </Button>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">
                                                Or sign up with email
                                            </span>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSignup} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input id="name" placeholder="John Doe" className="pl-10" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="signup-email">Email</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input id="signup-email" placeholder="m@example.com" type="email" className="pl-10" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="signup-password">Password</Label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input id="signup-password" type="password" className="pl-10" required />
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                            {isLoading ? "Creating account..." : "Create Account"}
                                        </Button>
                                    </form>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t p-4">
                        <p className="text-xs text-center text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <a href="#" className="underline hover:text-primary">Terms of Service</a>{" "}
                            and{" "}
                            <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                        </p>
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default Auth;
