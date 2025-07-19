import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  GraduationCap, 
  BookOpen, 
  Play, 
  CheckCircle, 
  Lock, 
  Clock,
  Star,
  Trophy,
  Target,
  ArrowRight,
  Users,
  Award
} from 'lucide-react'
import { motion } from 'framer-motion'

const learningPaths = [
  {
    id: 'beginner',
    title: 'Math Building Blocks',
    description: 'Start with the basics - learn the fundamental ideas that make math work',
    difficulty: 'Beginner',
    duration: '4-6 weeks',
    progress: 75,
    color: 'bg-green-500',
    modules: [
      { title: 'Introduction to Mathematical Structures', completed: true, duration: '2 hours' },
      { title: 'Basic Algebra and Number Theory', completed: true, duration: '3 hours' },
      { title: 'Set Theory and Logic', completed: true, duration: '2.5 hours' },
      { title: 'Introduction to Group Theory', completed: false, duration: '4 hours' },
      { title: 'Mathematical Proofs', completed: false, duration: '3 hours' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Pattern Recognition',
    description: 'Learn to spot patterns and rhythms in mathematics and nature',
    difficulty: 'Intermediate',
    duration: '6-8 weeks',
    progress: 45,
    color: 'bg-blue-500',
    modules: [
      { title: 'Resonance Theory Fundamentals', completed: true, duration: '3 hours' },
      { title: 'Algebraic Resonance Patterns', completed: true, duration: '4 hours' },
      { title: 'Harmonic Analysis', completed: false, duration: '5 hours' },
      { title: 'Frequency Domain Mathematics', completed: false, duration: '4 hours' },
      { title: 'Advanced Resonance Applications', completed: false, duration: '6 hours' }
    ]
  },
  {
    id: 'advanced',
    title: 'Quantum Concepts',
    description: 'Explore the fascinating world of quantum physics and how it stores information',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    progress: 20,
    color: 'bg-purple-500',
    modules: [
      { title: 'Quantum Mechanics Foundations', completed: true, duration: '5 hours' },
      { title: 'Quantum Information Basics', completed: false, duration: '6 hours' },
      { title: 'Entanglement and Superposition', completed: false, duration: '7 hours' },
      { title: 'Quantum Error Correction', completed: false, duration: '8 hours' },
      { title: 'Quantum Algorithms', completed: false, duration: '10 hours' }
    ]
  },
  {
    id: 'expert',
    title: 'Advanced Applications',
    description: 'Master how to apply mathematical concepts to solve real-world problems',
    difficulty: 'Expert',
    duration: '10-12 weeks',
    progress: 5,
    color: 'bg-orange-500',
    modules: [
      { title: 'Substrate Architecture', completed: false, duration: '8 hours' },
      { title: 'Element Interactions', completed: false, duration: '10 hours' },
      { title: 'Advanced Applications', completed: false, duration: '12 hours' },
      { title: 'Research Methodologies', completed: false, duration: '15 hours' },
      { title: 'Original Research Project', completed: false, duration: '20 hours' }
    ]
  }
]

const achievements = [
  { title: 'First Steps', description: 'Completed your first module', icon: Star, earned: true },
  { title: 'Foundation Builder', description: 'Completed beginner path', icon: Trophy, earned: true },
  { title: 'Resonance Master', description: 'Mastered resonance algebra', icon: Award, earned: false },
  { title: 'Quantum Explorer', description: 'Completed quantum information path', icon: Target, earned: false },
  { title: 'Research Pioneer', description: 'Published original research', icon: Users, earned: false }
]

const studyGroups = [
  {
    name: 'Mathematical Foundations Study Group',
    members: 24,
    nextSession: '2024-01-22 14:00 UTC',
    topic: 'Group Theory Applications'
  },
  {
    name: 'Quantum Information Researchers',
    members: 18,
    nextSession: '2024-01-23 16:00 UTC',
    topic: 'Error Correction Codes'
  },
  {
    name: 'Advanced Applications Forum',
    members: 12,
    nextSession: '2024-01-24 18:00 UTC',
    topic: 'Biology Applications'
  }
]

export function LearningPage() {
  const [selectedPath, setSelectedPath] = useState('beginner')
  const [selectedModule, setSelectedModule] = useState(0)

  const currentPath = learningPaths.find(path => path.id === selectedPath)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Guided Learning Experience
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Learning Adventure</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn mathematics step-by-step through fun activities, interactive lessons, 
            and study groups with other learners from around the world.
          </p>
        </motion.div>

        <Tabs defaultValue="paths" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="progress">My Progress</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="paths" className="space-y-8">
            {/* Learning Path Selection */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-200 h-full ${
                      selectedPath === path.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPath(path.id)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className={`w-16 h-16 ${path.color} rounded-lg flex items-center justify-center mx-auto`}>
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{path.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{path.progress}%</span>
                            </div>
                            <Progress value={path.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <Badge variant="outline" className="text-xs">{path.difficulty}</Badge>
                            <span className="text-xs text-muted-foreground">{path.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Path Details */}
            {currentPath && (
              <motion.div
                key={selectedPath}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                {/* Module List */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="w-5 h-5" />
                        <span>{currentPath.title} - Modules</span>
                      </CardTitle>
                      <CardDescription>
                        {currentPath.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentPath.modules.map((module, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                              selectedModule === index 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedModule(index)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {module.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : index === 0 || currentPath.modules[index - 1]?.completed ? (
                                  <Play className="w-5 h-5 text-primary" />
                                ) : (
                                  <Lock className="w-5 h-5 text-muted-foreground" />
                                )}
                                <div>
                                  <h4 className="font-medium">{module.title}</h4>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>{module.duration}</span>
                                  </div>
                                </div>
                              </div>
                              {module.completed && (
                                <Badge variant="secondary">Completed</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Module Details */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {currentPath.modules[selectedModule]?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>Duration: {currentPath.modules[selectedModule]?.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Target className="w-4 h-4 text-muted-foreground" />
                          <span>Difficulty: {currentPath.difficulty}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">What you'll learn:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Core mathematical concepts and principles</li>
                          <li>• Practical applications and examples</li>
                          <li>• Interactive exercises and quizzes</li>
                          <li>• Real-world problem solving</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        {currentPath.modules[selectedModule]?.completed ? (
                          <Button className="w-full" variant="outline" asChild>
                            <Link to="/demos">
                              Review with Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        ) : (
                          <Button className="w-full" asChild>
                            <Link to="/foundations">
                              Start Learning
                              <Play className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="ghost" className="w-full" asChild>
                          <Link to="/visualization">
                            View 3D Visualization
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {learningPaths.map((path, index) => (
                <Card key={path.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{path.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {path.modules.filter(m => m.completed).length} of {path.modules.length} modules completed
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {path.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Overall Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Overall Learning Progress</CardTitle>
                <CardDescription>
                  Your journey through the PrimeOS Mathematical Substrate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Modules Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">36</div>
                    <div className="text-sm text-muted-foreground">Hours Studied</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-500">3</div>
                    <div className="text-sm text-muted-foreground">Achievements Earned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Study Groups</span>
                  </CardTitle>
                  <CardDescription>
                    Join collaborative learning sessions with fellow students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studyGroups.map((group, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{group.name}</h3>
                          <Badge variant="outline">{group.members} members</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          Next session: {group.nextSession}
                        </div>
                        <div className="text-sm mb-3">
                          <strong>Topic:</strong> {group.topic}
                        </div>
                        <Button size="sm">Join Group</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <Card key={index} className={achievement.earned ? 'border-primary bg-primary/5' : 'opacity-60'}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                        achievement.earned ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <Icon className={`w-8 h-8 ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-3">Earned</Badge>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}