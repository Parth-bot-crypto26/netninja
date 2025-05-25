
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, MessageSquare, Heart, Shield, AlertTriangle, CheckCircle, Star } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const SocialPractice = () => {
  const [selectedScenario, setSelectedScenario] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoices, setUserChoices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);

  const scenarios = [
    {
      id: 1,
      title: "The Mean Comment",
      description: "Someone posts a mean comment on your photo",
      icon: MessageSquare,
      color: "from-red-400 to-pink-600",
      difficulty: "Easy",
      situation: "You posted a photo of your new haircut on social media. Someone you don't know very well commented: 'That looks terrible! You should have kept your old hair.' How do you handle this?",
      options: [
        { text: "Comment back something mean", correct: false, explanation: "Fighting back with mean comments makes things worse and can escalate the situation." },
        { text: "Delete their comment and block them", correct: true, explanation: "This is a great way to protect yourself from negativity without engaging in conflict." },
        { text: "Ask your friends to comment mean things back", correct: false, explanation: "Getting others involved can create more drama and hurt feelings." },
        { text: "Tell a trusted adult about what happened", correct: true, explanation: "Adults can help you handle the situation and provide emotional support." }
      ],
      tips: [
        "Don't respond to mean comments with more meanness",
        "Use privacy settings and blocking features",
        "Talk to trusted adults when someone is mean online",
        "Remember that mean comments say more about the person posting them than about you"
      ],
      followUp: "After blocking them, how do you feel better?",
      followUpOptions: [
        { text: "Talk to family or friends who make you feel good", correct: true },
        { text: "Post something asking people to be nice to you", correct: false },
        { text: "Look at positive comments from people who care about you", correct: true },
        { text: "Try to find out why they were mean", correct: false }
      ]
    },
    {
      id: 2,
      title: "The Oversharing Friend",
      description: "Your friend is sharing too much personal information",
      icon: Users,
      color: "from-blue-400 to-purple-600",
      difficulty: "Medium",
      situation: "Your best friend keeps posting their exact location, what time they get home from school, and when their parents aren't home. You're worried about their safety. What do you do?",
      options: [
        { text: "Ignore it - it's not your business", correct: false, explanation: "Good friends look out for each other's safety, even when it's uncomfortable." },
        { text: "Talk to your friend privately about online safety", correct: true, explanation: "Having a caring conversation with your friend shows you care about their safety." },
        { text: "Tell their parents without talking to your friend first", correct: false, explanation: "It's better to talk to your friend first, then involve adults if needed." },
        { text: "Post a comment on their posts telling them to stop", correct: false, explanation: "Public comments about this could embarrass your friend and aren't the best approach." }
      ],
      tips: [
        "Real friends care about each other's safety",
        "Private conversations are better than public ones for sensitive topics",
        "It's okay to involve trusted adults when someone might be in danger",
        "Location sharing can be dangerous - keep that information private"
      ],
      followUp: "If your friend doesn't listen, what's your next step?",
      followUpOptions: [
        { text: "Give up and stop being their friend", correct: false },
        { text: "Talk to a trusted adult for advice", correct: true },
        { text: "Tell everyone else what your friend is doing", correct: false },
        { text: "Keep trying to convince them on your own", correct: false }
      ]
    },
    {
      id: 3,
      title: "The Peer Pressure Post",
      description: "Friends pressure you to post something inappropriate",
      icon: Heart,
      color: "from-green-400 to-blue-600",
      difficulty: "Medium",
      situation: "Your friends are daring each other to post embarrassing photos for a 'challenge.' They're pressuring you to join in, saying 'Everyone's doing it!' and 'Don't be a baby!' What do you do?",
      options: [
        { text: "Go along with it so your friends don't think you're uncool", correct: false, explanation: "Real friends won't pressure you to do things that make you uncomfortable or could hurt you." },
        { text: "Say no and explain you're not comfortable with it", correct: true, explanation: "Standing up for yourself shows confidence and self-respect." },
        { text: "Suggest doing something fun that doesn't involve embarrassing photos", correct: true, explanation: "Offering alternatives shows leadership and helps redirect the group energy." },
        { text: "Tell them their parents wouldn't want them posting those photos", correct: true, explanation: "Reminding friends about consequences can help them make better choices." }
      ],
      tips: [
        "Real friends respect your boundaries",
        "You don't have to do something just because others are doing it",
        "Think about future consequences before posting anything",
        "It's okay to be the one who suggests better ideas"
      ],
      followUp: "If they keep pressuring you after you say no, how do you respond?",
      followUpOptions: [
        { text: "Stand firm in your decision", correct: true },
        { text: "Leave the group chat or situation", correct: true },
        { text: "Finally give in to the pressure", correct: false },
        { text: "Talk to a trusted adult about the pressure", correct: true }
      ]
    },
    {
      id: 4,
      title: "The Fake News Share",
      description: "You see friends sharing information that might be false",
      icon: Shield,
      color: "from-yellow-400 to-orange-600",
      difficulty: "Hard",
      situation: "Your friends are sharing a story that says 'Scientists discovered that eating candy makes you smarter!' It sounds too good to be true, but everyone is excited and sharing it. What do you do?",
      options: [
        { text: "Share it too because it sounds amazing", correct: false, explanation: "Sharing false information can spread misinformation and confuse people." },
        { text: "Look up the story to see if it's from a reliable source", correct: true, explanation: "Fact-checking before sharing is responsible digital citizenship." },
        { text: "Comment asking if anyone has checked if this is real", correct: true, explanation: "Encouraging others to think critically helps everyone make better decisions." },
        { text: "Ignore it completely", correct: false, explanation: "While not sharing is good, helping friends learn about fact-checking is even better." }
      ],
      tips: [
        "If something sounds too good to be true, it probably is",
        "Check multiple reliable sources before believing or sharing news",
        "Ask questions like 'Who wrote this?' and 'What's their source?'",
        "Help friends learn to be critical thinkers too"
      ],
      followUp: "You discover the story is fake. How do you handle this with your friends?",
      followUpOptions: [
        { text: "Politely share what you found and suggest checking sources", correct: true },
        { text: "Tell them they're dumb for believing it", correct: false },
        { text: "Say nothing and let them keep sharing it", correct: false },
        { text: "Share tips about how to spot fake news", correct: true }
      ]
    }
  ];

  const handleChoice = (option: any) => {
    const newChoices = [...userChoices, option.text];
    setUserChoices(newChoices);
    setShowResult(true);
  };

  const nextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      setShowResult(false);
    } else {
      completeScenario();
    }
  };

  const completeScenario = () => {
    if (selectedScenario && !completedScenarios.includes(selectedScenario.id)) {
      setCompletedScenarios([...completedScenarios, selectedScenario.id]);
    }
    setSelectedScenario(null);
    setCurrentStep(0);
    setUserChoices([]);
    setShowResult(false);
  };

  const resetScenario = () => {
    setSelectedScenario(null);
    setCurrentStep(0);
    setUserChoices([]);
    setShowResult(false);
  };

  const getCurrentOptions = () => {
    if (currentStep === 0) {
      return selectedScenario?.options || [];
    } else {
      return selectedScenario?.followUpOptions || [];
    }
  };

  const getCurrentQuestion = () => {
    if (currentStep === 0) {
      return selectedScenario?.situation || "";
    } else {
      return selectedScenario?.followUp || "";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Social Practice Zone 👥
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practice handling real social situations online in a safe environment! Learn to navigate tricky social situations with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Scenarios */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose a Social Situation</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {scenarios.map((scenario) => {
                const IconComponent = scenario.icon;
                const isCompleted = completedScenarios.includes(scenario.id);
                return (
                  <Card 
                    key={scenario.id}
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative ${
                      isCompleted ? 'bg-green-50' : 'bg-white'
                    }`}
                    onClick={() => setSelectedScenario(scenario)}
                  >
                    {isCompleted && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${scenario.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800">{scenario.title}</CardTitle>
                      <div className="flex justify-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          scenario.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          scenario.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {scenario.difficulty}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm text-center mb-4">{scenario.description}</p>
                      <div className="flex justify-center">
                        <Button className={`bg-gradient-to-r ${scenario.color} hover:opacity-90 text-white font-bold rounded-full px-6`}>
                          {isCompleted ? 'Practice Again' : 'Start Practice'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* More scenarios coming soon */}
              {Array.from({ length: 12 }, (_, i) => (
                <Card key={`coming-soon-${i}`} className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-600 mb-2">Coming Soon!</h3>
                    <p className="text-gray-500 text-sm">More social scenarios are being developed!</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress Sidebar */}
          <div>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-purple-600">{completedScenarios.length}</div>
                  <div className="text-gray-600">of {scenarios.length} completed</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(completedScenarios.length / scenarios.length) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  🏆 Social Skills Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${completedScenarios.length >= 1 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">🌟</div>
                    <p className="text-sm font-bold">Social Starter</p>
                    <p className="text-xs">Complete your first scenario</p>
                  </div>
                  <div className={`p-3 rounded-lg ${completedScenarios.length >= 2 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">👥</div>
                    <p className="text-sm font-bold">Friendship Navigator</p>
                    <p className="text-xs">Complete 2 scenarios</p>
                  </div>
                  <div className={`p-3 rounded-lg ${completedScenarios.length >= 4 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">🏆</div>
                    <p className="text-sm font-bold">Social Media Master</p>
                    <p className="text-xs">Complete all scenarios</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-center text-gray-800">
                  💡 Quick Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded-lg">
                    <p>🤝 Be kind and respectful online</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>🛡️ Stand up for yourself and others</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>💬 Talk to trusted adults when needed</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <p>🧠 Think before you post or share</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scenario Dialog */}
        <Dialog open={!!selectedScenario} onOpenChange={resetScenario}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {selectedScenario?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedScenario && (
              <div className="p-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {currentStep === 0 ? "Situation:" : "Follow-up:"}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {getCurrentQuestion()}
                  </p>
                </div>
                
                <h4 className="text-lg font-bold mb-4">How would you handle this?</h4>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {getCurrentOptions().map((option: any, index: number) => (
                    <Button
                      key={index}
                      onClick={() => handleChoice(option)}
                      disabled={showResult}
                      className={`p-4 text-left justify-start h-auto ${
                        showResult
                          ? option.correct
                            ? 'bg-green-500 text-white'
                            : userChoices.includes(option.text)
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                          : 'bg-white hover:bg-purple-50 text-gray-800 border-2 border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>

                {showResult && currentStep === 0 && (
                  <div className="space-y-4">
                    <Alert className="border-blue-500 bg-blue-50">
                      <AlertTriangle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="font-medium text-blue-800">
                        Let's explore what each choice could lead to and learn the best approaches!
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-3">
                      {selectedScenario.options.map((option: any, index: number) => (
                        <div key={index} className={`p-4 rounded-lg border-l-4 ${
                          option.correct ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                        }`}>
                          <p className="font-bold mb-2">{option.text}</p>
                          <p className="text-sm text-gray-700">{option.explanation}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button onClick={nextStep} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      Continue to Follow-up Question
                    </Button>
                  </div>
                )}

                {showResult && currentStep === 1 && (
                  <div className="space-y-4">
                    <Alert className="border-green-500 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="font-medium text-green-800">
                        Great job thinking through this social situation!
                      </AlertDescription>
                    </Alert>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-800 mb-3">🛡️ Key Tips to Remember:</h5>
                      <div className="space-y-2">
                        {selectedScenario.tips.map((tip: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-blue-700 text-sm">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={completeScenario} 
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full"
                      >
                        Complete Practice Session 🎉
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="These social situations will help you become a confident and kind digital citizen! Practice makes perfect!" 
        position="right"
      />
    </div>
  );
};

export default SocialPractice;
