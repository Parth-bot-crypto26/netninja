
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Star, Users, Zap } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 animate-bounce">
              Welcome to NetNinja! 🥷
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the world of cybersecurity with engaging stories, interactive games, and practical simulations.
              Learn to be a cyber superhero and protect yourself online!
            </p>
            <Link to="/cyber-tales">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Started! 🚀
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Shield className="w-16 h-16 text-white opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-12 h-12 text-yellow-300 opacity-40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="w-14 h-14 text-yellow-300 opacity-30" />
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Amazing Cyber Facts! 🌟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Did You Know?</h3>
                <p className="text-blue-700">Over 4 billion people use the internet every day! That's why we need to stay safe online.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Fun Fact!</h3>
                <p className="text-purple-700">Creating strong passwords is like building a super strong castle to protect your digital treasures!</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-2">Super Cool!</h3>
                <p className="text-pink-700">Learning cybersecurity is like becoming a digital superhero with amazing powers to fight cyber villains!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Explore Our Awesome Features! 🎮
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cyber Tales", desc: "Interactive stories that teach safety", color: "from-blue-400 to-blue-600", link: "/cyber-tales" },
              { title: "Fun Games", desc: "Quizzes and puzzles with rewards", color: "from-green-400 to-green-600", link: "/gamification" },
              { title: "AI Friend", desc: "Chat with our smart assistant", color: "from-purple-400 to-purple-600", link: "/ai-chatbot" },
              { title: "Safety Practice", desc: "Learn to spot dangers online", color: "from-pink-400 to-pink-600", link: "/phishing-simulations" }
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Email</h3>
              <p className="text-blue-600">support@netninja.com</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-2">Phone</h3>
              <p className="text-green-600">+91 12345 67890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Character */}
      <BlueCharacter 
        message="Hi there! I'm Blue, your cyber safety guide! Ready to start your adventure?" 
        position="right"
      />
    </div>
  );
};

export default Home;
