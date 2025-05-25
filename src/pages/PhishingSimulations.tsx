
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle, CheckCircle, XCircle, Mail, Globe, MessageSquare } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const PhishingSimulations = () => {
  const [selectedSimulation, setSelectedSimulation] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSimulations, setCompletedSimulations] = useState<number[]>([]);

  const simulations = [
    {
      id: 1,
      title: "The Million Dollar Email",
      type: "Email",
      icon: Mail,
      color: "from-red-400 to-red-600",
      difficulty: "Easy",
      scenario: {
        content: "You receive an email: 'Congratulations! You've won $1,000,000! Click here to claim your prize now! Limited time offer!'",
        sender: "winner@lottery-claim.net",
        subject: "YOU WON $1,000,000!!!",
        redFlags: ["Too good to be true", "Suspicious email address", "Urgent language", "Spelling errors"]
      },
      choices: [
        { text: "Click the link immediately to claim the prize", safe: false },
        { text: "Ask a trusted adult first", safe: true },
        { text: "Delete the email - it's probably a scam", safe: true },
        { text: "Forward it to all my friends", safe: false }
      ],
      explanation: "This is a classic scam! Real lotteries don't contact winners via email, and you can't win something you didn't enter. Always be suspicious of 'too good to be true' offers.",
      tips: ["Never click suspicious links", "Real companies use professional email addresses", "Be wary of urgent language", "When in doubt, ask an adult"]
    },
    {
      id: 2,
      title: "Fake Social Media Friend",
      type: "Social Media",
      icon: MessageSquare,
      color: "from-purple-400 to-purple-600",
      difficulty: "Medium",
      scenario: {
        content: "Someone you don't know sends you a friend request. Their profile says they're a student at your school, but you've never seen them before. They message: 'Hi! I'm new at your school. Want to meet up after class?'",
        sender: "cool_student_2024",
        redFlags: ["Unknown person", "Claims to be from your school", "Wants to meet in person", "Profile might be fake"]
      },
      choices: [
        { text: "Accept the friend request and agree to meet", safe: false },
        { text: "Ignore the request", safe: true },
        { text: "Ask your parents or a teacher about this person", safe: true },
        { text: "Ask them to prove they go to your school", safe: true }
      ],
      explanation: "Never meet someone in person that you only know online, even if they claim to go to your school. Real students would approach you in person first.",
      tips: ["Only connect with people you know in real life", "Tell adults about suspicious contacts", "Verify claims about school or mutual friends", "Trust your instincts"]
    },
    {
      id: 3,
      title: "Fake Banking Website",
      type: "Website",
      icon: Globe,
      color: "from-orange-400 to-orange-600",
      difficulty: "Hard",
      scenario: {
        content: "You click a link that takes you to what looks like your parents' bank website. The URL is 'secure-bank-login.com' instead of the real bank's URL. It asks for login details to 'verify your account security'.",
        sender: "Fake Banking Site",
        redFlags: ["Wrong URL", "Asking for login details", "Poor website design", "Urgent security warning"]
      },
      choices: [
        { text: "Enter the login information", safe: false },
        { text: "Close the website and tell your parents", safe: true },
        { text: "Check if the URL matches the real bank's website", safe: true },
        { text: "Call the bank directly to verify", safe: true }
      ],
      explanation: "This is a phishing website designed to steal login information! Always check URLs carefully and never enter sensitive information on suspicious sites.",
      tips: ["Always check website URLs carefully", "Banks won't ask for passwords via email", "Look for 'https://' and security certificates", "When in doubt, contact the company directly"]
    },
    {
      id: 4,
      title: "Free Game Download Trap",
      type: "Download",
      icon: Shield,
      color: "from-green-400 to-green-600",
      difficulty: "Medium",
      scenario: {
        content: "A pop-up appears saying 'Download this AMAZING free game now! No registration needed! Click here for instant download!' The website looks unprofessional and has lots of ads.",
        sender: "Free-Games-4-Kids.download",
        redFlags: ["Pop-up advertisement", "Too good to be true", "Unprofessional website", "Unknown download source"]
      },
      choices: [
        { text: "Download the game immediately", safe: false },
        { text: "Ask your parents before downloading anything", safe: true },
        { text: "Close the pop-up", safe: true },
        { text: "Look for the game on official app stores instead", safe: true }
      ],
      explanation: "Free downloads from unknown sources can contain viruses or malware! Always download games and apps from trusted sources like official app stores.",
      tips: ["Only download from trusted sources", "Ask adults before downloading", "Use official app stores", "Be suspicious of pop-up ads"]
    }
  ];

  const safetyTips = [
    {
      title: "Emma's Story: The Fake Prize",
      description: "Emma received an email saying she won a tablet. She almost clicked the link but asked her mom first. Good thing - it was a scam trying to steal personal information!",
      lesson: "Always ask a trusted adult before clicking suspicious links or claiming 'prizes' you didn't enter to win."
    },
    {
      title: "Jake's Experience: The Stranger Online",
      description: "Someone claiming to be a kid from Jake's school wanted to meet up. Jake felt uncomfortable and told his teacher. It turned out to be an adult with bad intentions.",
      lesson: "Never meet someone in person that you only know online. Always tell a trusted adult about suspicious contacts."
    },
    {
      title: "Sarah's Close Call: Fake Website",
      description: "Sarah was about to enter her mom's credit card info on a website that looked real but had a strange URL. She noticed and told her mom instead.",
      lesson: "Always check website URLs carefully and never share personal or financial information on suspicious sites."
    },
    {
      title: "Alex's Smart Choice: Suspicious Download",
      description: "Alex wanted to download a 'free' game but the website looked fishy. Instead, he found the same game on the official app store for a small price.",
      lesson: "Free downloads from unknown sources often contain viruses. Stick to official app stores and trusted websites."
    }
  ];

  const handleChoice = (choice: any) => {
    setUserChoice(choice.text);
    setShowResult(true);
    if (choice.safe) {
      setScore(score + 1);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setUserChoice(null);
    setShowResult(false);
  };

  const completeSimulation = () => {
    if (selectedSimulation && !completedSimulations.includes(selectedSimulation.id)) {
      setCompletedSimulations([...completedSimulations, selectedSimulation.id]);
    }
    setSelectedSimulation(null);
    setCurrentStep(0);
    setUserChoice(null);
    setShowResult(false);
  };

  const getIconComponent = (IconComponent: any) => IconComponent;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Phishing Simulations 🎣
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practice spotting fake emails, websites, and messages in a safe environment! Learn to be a phishing detective!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Simulations */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose a Simulation</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {simulations.map((simulation) => {
                const IconComponent = getIconComponent(simulation.icon);
                const isCompleted = completedSimulations.includes(simulation.id);
                return (
                  <Card 
                    key={simulation.id}
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative ${
                      isCompleted ? 'bg-green-50' : 'bg-white'
                    }`}
                    onClick={() => setSelectedSimulation(simulation)}
                  >
                    {isCompleted && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${simulation.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800">{simulation.title}</CardTitle>
                      <div className="flex justify-center space-x-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{simulation.type}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          simulation.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          simulation.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {simulation.difficulty}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className={`bg-gradient-to-r ${simulation.color} hover:opacity-90 text-white font-bold rounded-full px-6`}>
                        {isCompleted ? 'Play Again' : 'Start Simulation'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Safety Tips Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Real Stories & Safety Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {safetyTips.map((tip, index) => (
                  <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-blue-500" />
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">{tip.description}</p>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="font-medium">
                          {tip.lesson}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Sidebar */}
          <div>
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600">{completedSimulations.length}</div>
                  <div className="text-gray-600">of {simulations.length} completed</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSimulations.length / simulations.length) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  🏆 Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${completedSimulations.length >= 1 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">🌟</div>
                    <p className="text-sm font-bold">First Detective</p>
                    <p className="text-xs">Complete your first simulation</p>
                  </div>
                  <div className={`p-3 rounded-lg ${completedSimulations.length >= 2 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">🛡️</div>
                    <p className="text-sm font-bold">Safety Scout</p>
                    <p className="text-xs">Complete 2 simulations</p>
                  </div>
                  <div className={`p-3 rounded-lg ${completedSimulations.length >= 4 ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                    <div className="text-2xl mb-1">🏆</div>
                    <p className="text-sm font-bold">Phishing Expert</p>
                    <p className="text-xs">Complete all simulations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Simulation Dialog */}
        <Dialog open={!!selectedSimulation} onOpenChange={() => setSelectedSimulation(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {selectedSimulation?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedSimulation && (
              <div className="p-6">
                {currentStep === 0 && (
                  <div>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Scenario:</h3>
                      <p className="text-gray-700 mb-4">{selectedSimulation.scenario.content}</p>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                        <p className="font-bold text-red-700">From: {selectedSimulation.scenario.sender}</p>
                        {selectedSimulation.scenario.subject && (
                          <p className="font-bold text-red-700">Subject: {selectedSimulation.scenario.subject}</p>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-4">What would you do?</h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {selectedSimulation.choices.map((choice: any, index: number) => (
                        <Button
                          key={index}
                          onClick={() => handleChoice(choice)}
                          disabled={showResult}
                          className={`p-4 text-left justify-start h-auto ${
                            showResult
                              ? choice.safe
                                ? 'bg-green-500 text-white'
                                : choice.text === userChoice
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-200 text-gray-800'
                              : 'bg-white hover:bg-blue-50 text-gray-800 border-2 border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {choice.text}
                        </Button>
                      ))}
                    </div>

                    {showResult && (
                      <div className="space-y-4">
                        <Alert className={userChoice && selectedSimulation.choices.find((c: any) => c.text === userChoice)?.safe ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
                          {userChoice && selectedSimulation.choices.find((c: any) => c.text === userChoice)?.safe ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                          <AlertDescription className="font-medium">
                            {userChoice && selectedSimulation.choices.find((c: any) => c.text === userChoice)?.safe 
                              ? "Great choice! You made a safe decision." 
                              : "Not the safest choice. Let's learn what to do next time."}
                          </AlertDescription>
                        </Alert>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-bold text-blue-800 mb-2">Explanation:</h5>
                          <p className="text-blue-700">{selectedSimulation.explanation}</p>
                        </div>
                        
                        <Button onClick={nextStep} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                          Learn More Tips
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">🛡️ Safety Tips to Remember:</h3>
                    <div className="space-y-3 mb-6">
                      {selectedSimulation.tips.map((tip: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <p className="text-green-800">{tip}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={completeSimulation} 
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full"
                      >
                        Complete Simulation 🎉
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
        message="These simulations will make you a phishing detection expert! Stay alert and trust your instincts!" 
        position="right"
      />
    </div>
  );
};

export default PhishingSimulations;
