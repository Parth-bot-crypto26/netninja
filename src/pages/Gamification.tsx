
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trophy, Star, Zap, Shield, Lock, Users, Eye, Globe, Award, Target } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const Gamification = () => {
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const games = [
    {
      id: 1,
      title: "Password Power Quiz",
      description: "Test your password creation skills!",
      icon: Lock,
      color: "from-blue-400 to-blue-600",
      difficulty: "Easy",
      questions: [
        {
          question: "Which password is stronger?",
          options: ["123456", "MyDog123!", "password", "abc123"],
          correct: "MyDog123!",
          explanation: "MyDog123! is stronger because it uses a mix of letters, numbers, and symbols!"
        },
        {
          question: "How often should you change your passwords?",
          options: ["Never", "Every year", "Every few months", "Every day"],
          correct: "Every few months",
          explanation: "Changing passwords every few months helps keep your accounts safe!"
        }
      ]
    },
    {
      id: 2,
      title: "Phishing Detector",
      description: "Spot the fake emails and websites!",
      icon: Shield,
      color: "from-red-400 to-red-600",
      difficulty: "Medium",
      questions: [
        {
          question: "Which email is suspicious?",
          options: [
            "Email from your school", 
            "Email saying 'You won $1000000! Click now!'", 
            "Email from your friend", 
            "Email from your parent"
          ],
          correct: "Email saying 'You won $1000000! Click now!'",
          explanation: "Emails claiming you won money you didn't enter to win are usually scams!"
        },
        {
          question: "What should you do with suspicious links?",
          options: ["Click immediately", "Ask an adult first", "Share with friends", "Ignore the warning"],
          correct: "Ask an adult first",
          explanation: "Always check with a trusted adult before clicking suspicious links!"
        }
      ]
    },
    {
      id: 3,
      title: "Social Media Safety",
      description: "Learn what's safe to share online!",
      icon: Users,
      color: "from-purple-400 to-purple-600",
      difficulty: "Easy",
      questions: [
        {
          question: "What's safe to share on social media?",
          options: ["Your home address", "Your school name", "Fun photos with friends", "Your phone number"],
          correct: "Fun photos with friends",
          explanation: "Sharing fun moments is great, but keep personal information private!"
        },
        {
          question: "Who should you accept friend requests from?",
          options: ["Anyone who asks", "Only people you know in real life", "People with cool profiles", "Everyone online"],
          correct: "Only people you know in real life",
          explanation: "Only connect with people you actually know and trust!"
        }
      ]
    },
    {
      id: 4,
      title: "Cyber Hero Challenge",
      description: "Advanced cybersecurity knowledge test!",
      icon: Trophy,
      color: "from-green-400 to-green-600",
      difficulty: "Hard",
      questions: [
        {
          question: "What is two-factor authentication?",
          options: [
            "Using two passwords", 
            "An extra security step with your phone", 
            "Having two accounts", 
            "Using two computers"
          ],
          correct: "An extra security step with your phone",
          explanation: "Two-factor authentication adds an extra layer of security to your accounts!"
        },
        {
          question: "What should you do if someone asks for your personal information online?",
          options: ["Give it to them", "Ask why they need it", "Tell a trusted adult", "Ignore them"],
          correct: "Tell a trusted adult",
          explanation: "Always inform a trusted adult when someone asks for your personal information!"
        }
      ]
    }
  ];

  const leaderboard = [
    { name: "Alex K.", score: 98, badge: "🏆" },
    { name: "Emma S.", score: 95, badge: "🥈" },
    { name: "Mike R.", score: 92, badge: "🥉" },
    { name: "Sarah L.", score: 89, badge: "⭐" },
    { name: "Tom W.", score: 87, badge: "⭐" }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === selectedGame.questions[currentQuestion].correct) {
      setScore(score + 10);
    }
    
    setTimeout(() => {
      if (currentQuestion < selectedGame.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setSelectedGame(null);
    setCurrentQuestion(0);
    setScore(0);
    setGameComplete(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      case "Hard": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Cyber Games & Challenges 🎮
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Test your cybersecurity knowledge with fun quizzes and challenges! Earn stars, badges, and climb the leaderboard!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Games Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose Your Challenge</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {games.map((game) => {
                const IconComponent = game.icon;
                return (
                  <Card 
                    key={game.id}
                    className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    onClick={() => setSelectedGame(game)}
                  >
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-spin`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800">{game.title}</CardTitle>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm text-center mb-4">{game.description}</p>
                      <div className="flex justify-center">
                        <Button className={`bg-gradient-to-r ${game.color} hover:opacity-90 text-white font-bold rounded-full px-6`}>
                          <Zap className="w-4 h-4 mr-2" />
                          Play Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{player.badge}</span>
                        <span className="font-bold text-gray-800">{player.name}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{player.score}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800 flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  Your Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-2xl mb-1">🏆</div>
                    <p className="text-xs font-bold">Champion</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-2xl mb-1">🛡️</div>
                    <p className="text-xs font-bold">Defender</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-2xl mb-1">⭐</div>
                    <p className="text-xs font-bold">Rising Star</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Dialog */}
        <Dialog open={!!selectedGame} onOpenChange={resetGame}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                {selectedGame?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedGame && !gameComplete && (
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Question {currentQuestion + 1} of {selectedGame.questions.length}</span>
                    <span className="text-lg font-bold text-blue-600">Score: {score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / selectedGame.questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {selectedGame.questions[currentQuestion]?.question}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {selectedGame.questions[currentQuestion]?.options.map((option: string, index: number) => (
                      <Button
                        key={index}
                        onClick={() => !showResult && handleAnswerSelect(option)}
                        disabled={showResult}
                        className={`p-4 text-left justify-start h-auto ${
                          showResult
                            ? option === selectedGame.questions[currentQuestion].correct
                              ? 'bg-green-500 text-white'
                              : option === selectedAnswer
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200 text-gray-800'
                            : 'bg-white hover:bg-blue-50 text-gray-800 border-2 border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>

                  {showResult && (
                    <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                      <p className="text-blue-800 font-medium">
                        {selectedGame.questions[currentQuestion]?.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {gameComplete && (
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Game Complete!</h3>
                <p className="text-xl text-blue-600 font-bold mb-4">Final Score: {score}/{selectedGame.questions.length * 10}</p>
                <p className="text-gray-600 mb-6">
                  {score >= selectedGame.questions.length * 8 ? "Excellent work! You're a cyber hero!" : 
                   score >= selectedGame.questions.length * 6 ? "Good job! Keep learning!" : 
                   "Nice try! Practice makes perfect!"}
                </p>
                <Button onClick={resetGame} className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full">
                  Play Another Game
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="Ready to test your cyber skills? These games will make you a real cyber champion!" 
        position="right"
      />
    </div>
  );
};

export default Gamification;
