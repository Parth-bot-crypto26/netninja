
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Trophy, Star, Shield, Users, BookOpen, Target, TrendingUp, Award } from "lucide-react";
import BlueCharacter from "@/components/BlueCharacter";

const ParentalDashboard = () => {
  // Sample data - in a real app, this would come from a database
  const childProgress = {
    name: "Alex",
    totalActivities: 24,
    completedActivities: 18,
    overallScore: 87,
    rank: 3,
    badges: 12,
    timeSpent: "2h 45m this week"
  };

  const activityData = [
    { category: "Cyber Tales", completed: 4, total: 16, percentage: 25 },
    { category: "Games & Quizzes", completed: 6, total: 12, percentage: 50 },
    { category: "Phishing Simulations", completed: 4, total: 16, percentage: 25 },
    { category: "Social Practice", completed: 4, total: 16, percentage: 25 }
  ];

  const weeklyActivity = [
    { day: "Mon", activities: 3, score: 85 },
    { day: "Tue", activities: 2, score: 92 },
    { day: "Wed", activities: 4, score: 88 },
    { day: "Thu", activities: 1, score: 75 },
    { day: "Fri", activities: 3, score: 94 },
    { day: "Sat", activities: 5, score: 89 },
    { day: "Sun", activities: 2, score: 91 }
  ];

  const skillsData = [
    { skill: "Password Safety", value: 95, color: "#10B981" },
    { skill: "Phishing Detection", value: 82, color: "#3B82F6" },
    { skill: "Social Media Safety", value: 78, color: "#8B5CF6" },
    { skill: "Online Etiquette", value: 90, color: "#F59E0B" }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed first cyber tale", icon: "🌟", unlocked: true },
    { title: "Quiz Master", description: "Scored 100% on 3 quizzes", icon: "🧠", unlocked: true },
    { title: "Phishing Detective", description: "Identified 10 phishing attempts", icon: "🕵️", unlocked: true },
    { title: "Social Guardian", description: "Completed all social scenarios", icon: "🛡️", unlocked: false },
    { title: "Cyber Champion", description: "Reached top 10 leaderboard", icon: "🏆", unlocked: true },
    { title: "Safety Expert", description: "100% completion rate", icon: "⭐", unlocked: false }
  ];

  const recentActivities = [
    { activity: "Completed 'The Password Princess' story", time: "2 hours ago", type: "story" },
    { activity: "Scored 90% on Phishing Detection Quiz", time: "1 day ago", type: "quiz" },
    { activity: "Earned 'Quiz Master' badge", time: "2 days ago", type: "badge" },
    { activity: "Completed Social Media Safety simulation", time: "3 days ago", type: "simulation" },
    { activity: "Started AI Chatbot conversation about online safety", time: "4 days ago", type: "chat" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "story": return <BookOpen className="w-4 h-4 text-blue-500" />;
      case "quiz": return <Target className="w-4 h-4 text-green-500" />;
      case "badge": return <Award className="w-4 h-4 text-yellow-500" />;
      case "simulation": return <Shield className="w-4 h-4 text-red-500" />;
      case "chat": return <Users className="w-4 h-4 text-purple-500" />;
      default: return <Star className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Parental Dashboard 👨‍👩‍👧‍👦
          </h1>
          <p className="text-xl text-gray-700">
            Track your child's cybersecurity learning progress and achievements
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-800">{childProgress.overallScore}%</div>
              <p className="text-blue-600 font-medium">Overall Score</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-800">{childProgress.completedActivities}/{childProgress.totalActivities}</div>
              <p className="text-green-600 font-medium">Activities Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-800">{childProgress.badges}</div>
              <p className="text-purple-600 font-medium">Badges Earned</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-yellow-800">#{childProgress.rank}</div>
              <p className="text-yellow-600 font-medium">Global Rank</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress by Category */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                  Progress by Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activityData.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{category.category}</span>
                        <span className="text-sm text-gray-500">{category.completed}/{category.total}</span>
                      </div>
                      <Progress value={category.percentage} className="h-3" />
                      <p className="text-xs text-gray-500 mt-1">{category.percentage}% complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Activity Chart */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-500" />
                  Weekly Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="activities" fill="#3B82F6" name="Activities Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skills Assessment */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-purple-500" />
                  Cybersecurity Skills Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsData.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.skill}</span>
                        <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-300"
                          style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{activity.activity}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-3 rounded-lg border-2 ${
                      achievement.unlocked 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <p className={`font-bold text-sm ${
                            achievement.unlocked ? 'text-green-800' : 'text-gray-600'
                          }`}>
                            {achievement.title}
                          </p>
                          <p className={`text-xs ${
                            achievement.unlocked ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.unlocked && (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Download Progress Report
                </Button>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Set Learning Goals
                </Button>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  View Detailed Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Blue Character */}
      <BlueCharacter 
        message="Hi parents! This dashboard shows how well your child is learning about cyber safety. They're doing great!" 
        position="left"
      />
    </div>
  );
};

export default ParentalDashboard;
