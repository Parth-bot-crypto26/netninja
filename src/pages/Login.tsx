
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Lock, Mail, Users, Shield, Star } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const Login = () => {
  const [userType, setUserType] = useState("child");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to NetNinja! 🥷
          </h1>
          <p className="text-xl text-gray-700">
            Join our community of cyber safety learners and start your adventure!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Login/Register Form */}
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {isLogin ? "Welcome Back!" : "Create Your Account"}
              </CardTitle>
              <p className="text-gray-600">
                {isLogin ? "Sign in to continue your cyber safety journey" : "Start your cyber safety adventure today"}
              </p>
            </CardHeader>
            <CardContent>
              <Tabs value={userType} onValueChange={setUserType} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="child" className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Child</span>
                  </TabsTrigger>
                  <TabsTrigger value="parent" className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Parent</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {userType === "child" ? "Your Name" : "Full Name"}
                    </label>
                    <Input 
                      placeholder={userType === "child" ? "Enter your first name" : "Enter your full name"}
                      className="w-full"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    type="email" 
                    placeholder={userType === "child" ? "Ask a parent to help with this" : "Enter your email"}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full"
                  />
                </div>

                {!isLogin && userType === "child" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your age" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 6).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} years old
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {!isLogin && userType === "parent" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                    <Input 
                      placeholder="Enter your child's name"
                      className="w-full"
                    />
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 text-lg"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                  >
                    {isLogin ? "Sign up here" : "Sign in here"}
                  </button>
                </p>
              </div>

              {userType === "child" && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-yellow-800">For Kids & Parents</h4>
                      <p className="text-sm text-yellow-700">
                        Make sure a parent or guardian helps you create your account and knows about your NetNinja activities!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features & Benefits */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  🌟 What's Inside NetNinja?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Interactive Stories</h4>
                      <p className="text-sm text-gray-600">Learn through fun cyber tales with your favorite characters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Fun Games & Quizzes</h4>
                      <p className="text-sm text-gray-600">Test your knowledge and earn badges and rewards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">AI Safety Assistant</h4>
                      <p className="text-sm text-gray-600">Chat with our friendly AI to learn about online safety</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Safety Simulations</h4>
                      <p className="text-sm text-gray-600">Practice spotting dangers in a safe environment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {userType === "parent" && (
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    👨‍👩‍👧‍👦 For Parents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">Track your child's learning progress</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">View detailed performance analytics</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">Monitor achievements and badges</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-700">Access parental dashboard and reports</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  🏆 Why Choose NetNinja?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>✅ Age-appropriate content for kids 6-15</p>
                  <p>✅ Fun and engaging learning experience</p>
                  <p>✅ Comprehensive cybersecurity education</p>
                  <p>✅ Progress tracking and achievements</p>
                  <p>✅ Safe and secure learning environment</p>
                  <p>✅ Developed by cybersecurity experts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="Ready to become a cyber safety ninja? Create your account and let's start this awesome adventure together!" 
        position="left"
      />
    </div>
  );
};

export default Login;
