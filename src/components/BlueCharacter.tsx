
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BlueCharacterProps {
  message: string;
  position?: "left" | "right" | "center";
  showBubble?: boolean;
}

const BlueCharacter = ({ message, position = "left", showBubble = true }: BlueCharacterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const positionClasses = {
    left: "left-8",
    right: "right-8", 
    center: "left-1/2 transform -translate-x-1/2"
  };

  const getDetailedInfo = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: "Welcome to NetNinja! 🥷",
          content: "Hi there! I'm Blue, your cyber safety guide! NetNinja is a super fun place where you can learn about staying safe online. You can read exciting stories, play cool games, chat with me, and practice spotting bad guys on the internet. Your parents can also see how awesome you're doing! Click on any page to start your cyber adventure!"
        };
      case '/cyber-tales':
        return {
          title: "About Cyber Tales 📚",
          content: "These are magical stories where YOU get to choose what happens! Each story teaches you important lessons about staying safe online. You'll meet brave heroes, face cyber villains, and learn how to protect yourself and others. Pick your choices carefully - they shape the story! At the end, you'll discover the moral of the story. Ready to become a cyber hero?"
        };
      case '/gamification':
        return {
          title: "About Games & Quizzes 🎮",
          content: "Get ready for super fun games and quizzes! Test what you've learned, earn awesome badges, and climb the leaderboard! These games help you remember important cyber safety rules while having a blast. Play with friends and see who becomes the ultimate cyber ninja!"
        };
      case '/ai-chatbot':
        return {
          title: "Chat with Blue! 🤖",
          content: "You can ask me anything about staying safe online! I'm here 24/7 to help you with your questions, share cool cyber facts, and help you understand tricky internet stuff. Don't be shy - I love chatting with curious kids like you!"
        };
      case '/phishing-simulations':
        return {
          title: "Phishing Practice Zone 🎣",
          content: "Here you'll become a detective! Learn to spot fake emails, tricky websites, and sneaky messages that bad guys use to trick people. Practice in our safe environment and become a phishing-spotting superhero!"
        };
      case '/social-practice':
        return {
          title: "Social Practice Zone 👥",
          content: "Practice handling real social situations online! Learn what to do when someone asks for personal information, how to deal with cyberbullies, and how to be kind and safe in online communities. These scenarios help you prepare for real life!"
        };
      case '/parental-dashboard':
        return {
          title: "Parental Dashboard 👨‍👩‍👧‍👦",
          content: "This special area is for parents and guardians! They can see your amazing progress, check your scores, and see how much you've learned about cyber safety. It helps them understand your journey to becoming a cyber ninja!"
        };
      case '/about-us':
        return {
          title: "About Our Team 💫",
          content: "Meet the amazing developers who created NetNinja! Parth and Pratyush worked super hard to make this platform just for you. They want to make sure kids everywhere can learn to be safe and confident online. Pretty cool, right?"
        };
      default:
        return {
          title: "NetNinja Guide 🥷",
          content: "I'm here to help you navigate NetNinja safely and have fun while learning about cybersecurity!"
        };
    }
  };

  const handleCharacterClick = () => {
    setShowDialog(true);
  };

  const dialogInfo = getDetailedInfo();

  return (
    <>
      <div className={`fixed bottom-8 ${positionClasses[position]} z-40 animate-bounce`}>
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          {/* Speech Bubble */}
          {showBubble && message && (
            <div className="mb-4 relative">
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-300 max-w-xs">
                <p className="text-blue-800 font-medium text-sm">{message}</p>
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-300 transform translate-y-full translate-y-0.5"></div>
              </div>
            </div>
          )}
          
          {/* Blue Character */}
          <div className="relative" onClick={handleCharacterClick}>
            <img 
              src="/lovable-uploads/876fe38a-9f43-4bbe-8d08-c61310aef367.png" 
              alt="Blue - Your Cyber Safety Guide" 
              className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Information Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-blue-800">
              {dialogInfo.title}
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <div className="text-center mb-4">
              <img 
                src="/lovable-uploads/876fe38a-9f43-4bbe-8d08-c61310aef367.png" 
                alt="Blue" 
                className="w-16 h-16 mx-auto"
              />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              {dialogInfo.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlueCharacter;
