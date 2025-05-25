
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your friendly AI assistant! I'm here to help you learn about cyber safety. Ask me anything about passwords, online safety, or cybersecurity! 🤖💙",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    "password": "Great question about passwords! 🔐 Here are some super tips: 1) Use a mix of letters, numbers, and symbols 2) Make it at least 8 characters long 3) Don't use your name or birthday 4) Never share it with anyone except trusted adults. Want to know more?",
    "phishing": "Phishing is when bad guys try to trick you with fake emails or websites! 🎣 Here's how to stay safe: 1) Don't click on suspicious links 2) Check the sender's email address carefully 3) If something seems too good to be true, it probably is 4) Always ask a trusted adult if you're unsure!",
    "social media": "Social media can be fun and safe! 📱 Remember these rules: 1) Only connect with people you know in real life 2) Don't share personal information like your address or phone number 3) Use privacy settings 4) Tell a trusted adult if someone makes you uncomfortable. What else would you like to know?",
    "cyberbully": "I'm sorry if someone is being mean to you online. 😔 Here's what you can do: 1) Don't respond to mean messages 2) Block the person 3) Save evidence (screenshots) 4) Tell a trusted adult right away 5) Report it to the website or app. Remember, it's not your fault, and you deserve to feel safe online! 💙",
    "stranger": "Great question about online strangers! 👥 Remember: 1) Never meet someone in person that you only know online 2) Don't share personal information 3) If someone asks to meet you, tell a trusted adult immediately 4) Real friends won't ask you to keep secrets from your parents. Stay safe!",
    "download": "Be careful about downloads! 💻 Here's what to remember: 1) Only download from trusted websites 2) Ask a trusted adult before downloading anything 3) Don't download from pop-up ads 4) Use antivirus software 5) If something seems suspicious, don't download it. What type of download are you curious about?",
    "help": "I'm here to help you with all things cyber safety! 🌟 You can ask me about: passwords, social media safety, phishing emails, cyberbullying, online strangers, safe downloading, privacy settings, and much more! What would you like to learn about today?",
    "game": "Online gaming is super fun! 🎮 Here are safety tips: 1) Use a username that doesn't reveal personal info 2) Don't share real name, age, or location 3) Be kind to other players 4) Report mean or inappropriate behavior 5) Take breaks and don't play too long 6) Only voice chat with people you know in real life!"
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Default responses for common questions
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello there! 👋 I'm so happy to chat with you! I'm here to help you learn about staying safe online. What would you like to know about today?";
    }
    
    if (lowerMessage.includes("thank")) {
      return "You're so welcome! 😊 I love helping you learn about cyber safety. Do you have any other questions? I'm always here to help!";
    }
    
    if (lowerMessage.includes("bye")) {
      return "Goodbye! 👋 Remember to always stay safe online. Come back anytime if you have more questions. You're doing great learning about cyber safety! 🌟";
    }

    if (lowerMessage.includes("safe") || lowerMessage.includes("safety")) {
      return "Online safety is super important! 🛡️ The main things to remember are: keep personal information private, use strong passwords, be kind to others, and always tell a trusted adult if something makes you uncomfortable. What specific safety topic interests you?";
    }

    if (lowerMessage.includes("internet")) {
      return "The internet is an amazing place to learn and have fun! 🌐 To stay safe online: 1) Always be kind 2) Protect your personal information 3) Use trusted websites 4) Ask adults for help when needed. What about the internet would you like to explore safely?";
    }

    // Default response for unrecognized messages
    return "That's an interesting question! 🤔 While I may not have a specific answer for that, I can help you with password safety, social media tips, avoiding phishing scams, and lots more cyber safety topics! What would you like to learn about? Or you can ask a trusted adult for help with other questions! 😊";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const suggestionButtons = [
    "How do I create a strong password?",
    "What is phishing?",
    "How to stay safe on social media?",
    "What should I do about cyberbullying?",
    "How to be safe while gaming online?"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Cyber Safety Assistant 🤖
          </h1>
          <p className="text-xl text-gray-700">
            Your friendly AI helper is here to answer all your cyber safety questions!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-white border-0 shadow-xl h-[600px] flex flex-col">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl">
                  <Bot className="w-6 h-6 mr-2" />
                  Cyber Safety AI Assistant
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-blue-500" : "bg-purple-500"}`}>
                          {message.sender === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-2xl ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about cyber safety..."
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Suggestions Sidebar */}
          <div>
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-center text-gray-800">
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestionButtons.map((suggestion, index) => (
                    <Button
                      key={index}
                      onClick={() => setInputMessage(suggestion)}
                      variant="outline"
                      className="w-full text-left justify-start h-auto p-3 text-sm hover:bg-purple-100 hover:border-purple-300"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-center text-gray-800">
                  💡 Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-white rounded-lg">
                    <p>🔐 Use strong, unique passwords</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>🛡️ Think before you click</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>👥 Keep personal info private</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>💬 Tell trusted adults about problems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="I'm here too! Ask our AI friend anything about staying safe online - they're super smart and friendly!" 
        position="left"
      />
    </div>
  );
};

export default AIChatbot;
