
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Code, Palette, Users, Target, Heart, Star, Shield } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            About NetNinja 🥷
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet our passionate team dedicated to making cybersecurity education fun, engaging, and accessible for children worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                To empower the next generation with essential cybersecurity knowledge through interactive, engaging, and age-appropriate learning experiences. We believe that every child deserves to feel safe and confident while exploring the digital world, and our platform provides the tools and knowledge they need to protect themselves and others online.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Safety First</h3>
                  <p className="text-gray-600">Creating a secure foundation for digital literacy</p>
                </div>
                <div className="text-center p-4">
                  <Heart className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Child-Centered</h3>
                  <p className="text-gray-600">Designed specifically for young learners aged 6-15</p>
                </div>
                <div className="text-center p-4">
                  <Star className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Fun Learning</h3>
                  <p className="text-gray-600">Making cybersecurity education engaging and enjoyable</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meet Our Team */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Parth Deshpande */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Parth Deshpande</CardTitle>
                <p className="text-lg text-blue-600 font-medium">🧑‍💻 Lead Developer</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  A dedicated Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. 
                  Responsible for developing the entire website from the ground up, utilizing technologies such as HTML, CSS, 
                  JavaScript, React, and JSX. Focused on building the frontend architecture, ensuring responsive design, and 
                  integrating interactive elements to create an engaging learning experience for children.
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</div>
                  <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">JavaScript</div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AI/ML</div>
                </div>
              </CardContent>
            </Card>

            {/* Pratyush Dubey */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Pratyush Dubey</CardTitle>
                <p className="text-lg text-pink-600 font-medium">🎨 UI/UX Designer & Firebase Integrator</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  A passionate Computer Science student with a keen interest in technology, communication, and leadership. 
                  Took charge of designing intuitive user interfaces and seamless user experiences tailored for young learners. 
                  Integrated Firebase to manage backend operations, enabling real-time data handling and authentication. 
                  Also handled comprehensive project planning and documentation to ensure a cohesive development process.
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">UI/UX</div>
                  <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Firebase</div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Design</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-gray-800">Email Support</h3>
                    <p className="text-blue-600">support@netninja.com</p>
                    <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <Phone className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-bold text-gray-800">Phone Support</h3>
                    <p className="text-green-600">+91 12345 67890</p>
                    <p className="text-sm text-gray-600">Available Monday-Friday, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">🌟 Why We Built NetNinja</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In today's digital age, children are exposed to the internet at increasingly younger ages. 
                    We recognized the critical need for age-appropriate cybersecurity education that doesn't 
                    overwhelm or scare children, but instead empowers them with knowledge and confidence. 
                    NetNinja was born from our passion to make the digital world a safer place for the next generation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Form */}
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Send Us Your Feedback</CardTitle>
              <p className="text-gray-600">We'd love to hear from you! Your feedback helps us improve NetNinja.</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input placeholder="Enter your name" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" placeholder="Enter your email" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    placeholder="Tell us what you think about NetNinja, suggestions for improvement, or any questions you have..."
                    className="w-full h-32 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3">
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🙏 Thank You!</h4>
                <p className="text-sm text-gray-700">
                  Every piece of feedback helps us create a better, safer, and more engaging learning experience for children worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            © 2024 NetNinja. All rights reserved. Made with ❤️ for safer digital futures.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="These amazing developers created this whole platform to keep you safe online! They really care about your digital safety!" 
        position="right"
      />
    </div>
  );
};

export default AboutUs;
