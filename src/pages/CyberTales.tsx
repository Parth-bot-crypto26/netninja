import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Star, Shield, Lock, Eye, Users, Zap, Globe } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const CyberTales = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [storyChoices, setStoryChoices] = useState<string[]>([]);

  const stories = [
    {
      id: 1,
      title: "The Password Princess",
      description: "Help Princess Secure create the strongest password in the kingdom!",
      icon: Lock,
      color: "from-pink-400 to-pink-600",
      scenes: [
        { 
          text: "Princess Secure lives in a magical digital kingdom. Her treasure vault needs a new password. What should she do first?", 
          character: "👸",
          choices: ["Use her birthday (1234)", "Mix letters and numbers", "Ask the wise owl for advice"]
        },
        { 
          text: "Great choice! The wise owl says passwords should be long and mix different types of characters. What makes a strong password?", 
          character: "🦉",
          choices: ["Only letters", "Letters + Numbers + Symbols", "Just numbers"]
        },
        { 
          text: "Perfect! Princess Secure creates 'MyC@stle2024!' - it has uppercase, lowercase, numbers, and symbols. But where should she store it?", 
          character: "🔐",
          choices: ["Write it on paper", "Tell her friends", "Use a password manager"]
        },
        { 
          text: "Excellent! A password manager keeps it safe and secure. The princess also learns to use different passwords for different accounts.", 
          character: "✨",
          choices: ["Continue to moral"]
        },
        { 
          text: "The evil hacker tried to break into her kingdom but couldn't because her password was too strong!", 
          character: "🛡️",
          choices: ["Continue to moral"]
        },
        { 
          text: "Princess Secure became the Password Guardian, teaching everyone in the kingdom how to protect their digital treasures!", 
          character: "👑",
          choices: ["See the moral"]
        }
      ],
      moral: "Always create strong, unique passwords with letters, numbers, and symbols. Never share them with others and use a password manager to keep them safe!"
    },
    {
      id: 2,
      title: "Captain Click-Safe's Email Adventure",
      description: "Join Captain Click-Safe as he battles suspicious emails!",
      icon: Shield,
      color: "from-blue-400 to-blue-600",
      scenes: [
        { 
          text: "Captain Click-Safe receives an email: 'URGENT! You've won $1,000,000! Click here NOW!' What should he do?", 
          character: "🦸‍♂️",
          choices: ["Click immediately", "Check the sender's email", "Delete the email"]
        },
        { 
          text: "Smart! The email came from 'totallyreal@fakeemail.xyz' - very suspicious! What's another red flag?", 
          character: "🔍",
          choices: ["Poor spelling/grammar", "Urgent language", "Both of these"]
        },
        { 
          text: "Exactly! Phishing emails often have bad grammar and create false urgency. The Captain notices the link goes to a strange website.", 
          character: "💻",
          choices: ["Visit the website", "Report as spam", "Forward to friends"]
        },
        { 
          text: "Perfect! He reports it as spam and warns others. Real companies never ask for passwords via email.", 
          character: "🛡️",
          choices: ["Continue the story"]
        },
        { 
          text: "The Captain then gets a legitimate email from his bank with proper logos and grammar, asking him to log in through their official website.", 
          character: "🏦",
          choices: ["Click the email link", "Go to bank website directly", "Call the bank"]
        },
        { 
          text: "Excellent! Always visit websites directly or call to verify. Captain Click-Safe saved the day and his money!", 
          character: "🏆",
          choices: ["See the moral"]
        }
      ],
      moral: "Never click suspicious links or give personal information via email. Always verify with the real company by visiting their official website or calling them directly!"
    },
    {
      id: 3,
      title: "Sophie Social's Privacy Quest",
      description: "Help Sophie learn what's safe to share on social media!",
      icon: Users,
      color: "from-purple-400 to-purple-600",
      scenes: [
        { 
          text: "Sophie wants to post a photo from her vacation. Which photo is safest to share?", 
          character: "📱",
          choices: ["Photo with house address visible", "Photo at the beach (no location)", "Photo with school name visible"]
        },
        { 
          text: "Good choice! The beach photo doesn't reveal her location. A stranger sends a friend request. What should Sophie do?", 
          character: "🤔",
          choices: ["Accept immediately", "Check if she knows them", "Ignore the request"]
        },
        { 
          text: "Smart! She doesn't recognize them. Sophie's friend asks her to share her phone number in a group chat. What should she do?", 
          character: "📞",
          choices: ["Share it publicly", "Send it privately", "Don't share it online"]
        },
        { 
          text: "Excellent! Phone numbers should stay private. Sophie sees someone posting mean comments about her friend. What should she do?", 
          character: "😟",
          choices: ["Join in", "Report and support her friend", "Ignore it"]
        },
        { 
          text: "Perfect! Sophie reports the bullying and comforts her friend. She also adjusts her privacy settings.", 
          character: "🛡️",
          choices: ["Continue the story"]
        },
        { 
          text: "Sophie becomes the Social Media Safety Hero, helping friends stay safe and kind online!", 
          character: "🌟",
          choices: ["See the moral"]
        }
      ],
      moral: "Think before you post! Keep personal information private, only accept friend requests from people you know, and always be kind online. Report bullying and support your friends!"
    },
    {
      id: 4,
      title: "Detective Data's Identity Case",
      description: "Solve the mystery of protecting personal information online!",
      icon: Eye,
      color: "from-green-400 to-green-600",
      scenes: [
        { 
          text: "Detective Data gets a call: 'Hello! This is your bank. Can you verify your account number?' What should he do?", 
          character: "🕵️",
          choices: ["Give the information", "Ask for their name", "Hang up and call bank directly"]
        },
        { 
          text: "Smart detective work! Real banks don't call asking for account info. Next, he sees a quiz: 'What's your pet's name?' What's the risk?", 
          character: "📞",
          choices: ["It's just fun", "Could be a security question", "No risk at all"]
        },
        { 
          text: "Brilliant deduction! Many sites use pet names for password recovery. Detective Data finds a fake shopping website. How can he tell?", 
          character: "💻",
          choices: ["Check for 'https://'", "Look for contact info", "Both of these"]
        },
        { 
          text: "Excellent detective skills! The fake site has 'http://' and no contact information. What else should he check?", 
          character: "🔍",
          choices: ["Customer reviews", "Spelling errors", "All of the above"]
        },
        { 
          text: "Perfect! The site has fake reviews and many spelling mistakes. Detective Data warns everyone about the fake site.", 
          character: "🚨",
          choices: ["Continue the investigation"]
        },
        { 
          text: "Detective Data solves the case and creates a guide to help others protect their digital identity!", 
          character: "🏆",
          choices: ["See the moral"]
        }
      ],
      moral: "Protect your personal information! Never give details to unexpected callers, be careful with online quizzes, and always verify websites before entering any information!"
    }
  ];

  // Add more stories - keeping it at 10 total for now
  const additionalStories = [
    {
      id: 5,
      title: "The Wi-Fi Warrior",
      description: "Learn about safe internet connections with our brave Wi-Fi Warrior!",
      icon: Globe,
      color: "from-cyan-400 to-cyan-600",
      scenes: [
        { text: "Coming soon - An epic adventure about safe internet connections!", character: "🌐", choices: ["Continue"] }
      ],
      moral: "Always use secure Wi-Fi connections and be careful on public networks!"
    },
    {
      id: 6,
      title: "The Download Detective",
      description: "Discover safe downloading practices with the Download Detective!",
      icon: Shield,
      color: "from-orange-400 to-orange-600",
      scenes: [
        { text: "Coming soon - A mystery about safe downloads and avoiding malware!", character: "🔍", choices: ["Continue"] }
      ],
      moral: "Only download files from trusted sources and scan everything with antivirus!"
    }
  ];

  const allStories = [...stories, ...additionalStories];

  const makeChoice = (choice: string) => {
    const newChoices = [...storyChoices, choice];
    setStoryChoices(newChoices);
    
    if (selectedStory && currentScene < selectedStory.scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const nextScene = () => {
    if (selectedStory && currentScene < selectedStory.scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const closeStory = () => {
    setSelectedStory(null);
    setCurrentScene(0);
    setStoryChoices([]);
  };

  const showMoral = () => {
    return selectedStory && (currentScene >= selectedStory.scenes.length - 1 || 
           (selectedStory.scenes[currentScene] && selectedStory.scenes[currentScene].choices[0] === "See the moral"));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cyber Tales 📚✨
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose your own cyber adventure! Make decisions, learn lessons, and become a digital hero through interactive role-playing stories.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allStories.map((story) => {
            const IconComponent = story.icon;
            const isComingSoon = story.id > 4;
            return (
              <Card 
                key={story.id}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group ${
                  isComingSoon ? 'bg-gradient-to-br from-gray-100 to-gray-200' : 'bg-white'
                }`}
                onClick={() => !isComingSoon && setSelectedStory(story)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-bounce`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-lg font-bold ${isComingSoon ? 'text-gray-600' : 'text-gray-800'}`}>
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm text-center ${isComingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                    {story.description}
                  </p>
                  <div className="flex justify-center mt-4">
                    <Button 
                      className={`bg-gradient-to-r ${story.color} hover:opacity-90 text-white font-bold rounded-full px-6 ${
                        isComingSoon ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={isComingSoon}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {isComingSoon ? 'Coming Soon!' : 'Start Adventure'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Additional Coming Soon Cards */}
          {Array.from({ length: 10 }, (_, i) => (
            <Card key={`coming-soon-${i + 7}`} className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-2">More Adventures!</h3>
                <p className="text-gray-500 text-sm">Exciting new cyber tales coming soon!</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Dialog */}
        <Dialog open={!!selectedStory} onOpenChange={closeStory}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {selectedStory?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedStory && (
              <div className="p-6">
                {!showMoral() ? (
                  <>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center mb-6">
                      <div className="text-6xl mb-4">
                        {selectedStory.scenes[currentScene]?.character}
                      </div>
                      <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        {selectedStory.scenes[currentScene]?.text}
                      </p>
                      
                      {/* Choice Buttons */}
                      {selectedStory.scenes[currentScene]?.choices && selectedStory.scenes[currentScene].choices.length > 1 && (
                        <div className="space-y-3">
                          {selectedStory.scenes[currentScene].choices.map((choice, index) => (
                            <Button
                              key={index}
                              onClick={() => makeChoice(choice)}
                              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
                              variant="outline"
                            >
                              {choice}
                            </Button>
                          ))}
                        </div>
                      )}
                      
                      {selectedStory.scenes[currentScene]?.choices?.length === 1 && (
                        <Button onClick={nextScene} className="bg-blue-500 hover:bg-blue-600 text-white">
                          {selectedStory.scenes[currentScene].choices[0]}
                        </Button>
                      )}
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                      {selectedStory.scenes.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentScene ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Moral of the Story</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                      {selectedStory.moral}
                    </p>
                    <Button onClick={closeStory} className="bg-green-500 hover:bg-green-600 text-white">
                      Complete Adventure
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="Click on a story to start your role-playing adventure! Make choices and learn important cyber safety lessons!" 
        position="right"
      />
    </div>
  );
};

export default CyberTales;
