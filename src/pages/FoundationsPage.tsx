import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { 
  BookOpen, 
  Calculator, 
  Network, 
  Atom, 
  Zap, 
  Brain,
  ChevronRight,
  Play,
  CheckCircle,
  Circle
} from 'lucide-react'
import { motion } from 'framer-motion'

const concepts = [
  {
    id: 'resonance',
    title: 'Pattern Recognition',
    description: 'How to spot repeating patterns and rhythms in mathematical systems',
    difficulty: 'Intermediate',
    progress: 75,
    icon: Network,
    color: 'bg-blue-500',
    topics: [
      'Finding Patterns in Nature',
      'Mathematical Structures',
      'Pattern Recognition',
      'Wave and Rhythm Analysis'
    ]
  },
  {
    id: 'modular',
    title: 'Symmetry and Transformations',
    description: 'Understanding how shapes and patterns can be rotated, flipped, and transformed',
    difficulty: 'Advanced',
    progress: 45,
    icon: Calculator,
    color: 'bg-green-500',
    topics: [
      'Basic Symmetry Operations',
      'Symmetry in Nature',
      'Mathematical Transformations',
      'Unchanging Properties'
    ]
  },
  {
    id: 'quantum',
    title: 'Quantum Concepts',
    description: 'Simple introduction to how the quantum world works and stores information',
    difficulty: 'Expert',
    progress: 20,
    icon: Atom,
    color: 'bg-purple-500',
    topics: [
      'Quantum States Explained',
      'Quantum Connections',
      'Information Storage',
      'Error Prevention'
    ]
  },
  {
    id: 'substrate',
    title: 'The Mathematical Framework',
    description: 'How 12,288 mathematical elements work together to model complex systems',
    difficulty: 'Expert',
    progress: 10,
    icon: Brain,
    color: 'bg-orange-500',
    topics: [
      'Element Structure',
      'Multi-dimensional Analysis',
      'How Elements Interact',
      'Emergent Behaviors'
    ]
  }
]

const fundamentals = [
  {
    title: 'What is the PrimeOS Mathematical Framework?',
    content: `The PrimeOS Mathematical Framework is like a giant mathematical toolkit that helps us understand complex patterns in nature. Think of it as having 12,288 different mathematical "building blocks" that can be combined in countless ways.

Key features:
• 12,288 mathematical building blocks (like LEGO pieces for math)
• 96 different pattern types (like different rhythms in music)
• 768 cycle structures (repeating patterns)
• Extensive research foundation

This framework helps scientists and researchers solve problems in physics (like quantum computers), biology (like understanding how proteins fold), and information technology (like creating better encryption).`
  },
  {
    title: 'Why 12,288 Building Blocks?',
    content: `The number 12,288 isn't random - it's mathematically special:

• 12,288 = 2^12 × 3 = 4,096 × 3
• This number has useful mathematical properties
• It's large enough to model complex systems
• It's small enough for computers to handle efficiently
• It naturally supports error correction (like spell-check for math)
• It creates beautiful mathematical patterns

Think of it like having exactly the right number of puzzle pieces - enough to create a detailed picture, but not so many that it becomes impossible to work with.`
  },
  {
    title: 'Pattern Recognition in Mathematics',
    content: `Pattern recognition in mathematics is like being a detective who looks for clues in numbers and shapes:

What we look for:
• Repeating patterns (like waves in the ocean)
• Mathematical rhythms (like heartbeats in data)
• Symmetries (like how a butterfly's wings match)
• Hidden connections between different areas

Real-world uses:
• Analyzing sound and music
• Finding patterns in large datasets
• Understanding natural phenomena
• Optimizing systems for better performance

This helps us understand how mathematical structures can behave like waves, creating beautiful and useful patterns.`
  },
  {
    title: 'Symmetry and Transformations Made Simple',
    content: `Symmetry in mathematics is like looking at how things stay the same when you change them:

Basic ideas:
• Rotations (spinning something around)
• Reflections (flipping like a mirror)
• Translations (sliding to a new position)
• Combinations of these movements

Why it matters:
• Helps computers work more efficiently
• Creates error-correcting codes (like backup systems)
• Classifies patterns automatically
• Makes complex calculations simpler

Think of it like learning dance moves - once you know the basic steps, you can create complex choreography by combining them in different ways.`
  }
]

export function FoundationsPage() {
  const [selectedConcept, setSelectedConcept] = useState('resonance')

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
              <BookOpen className="w-4 h-4 mr-2" />
              Mathematical Foundations
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Understanding <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mathematical Patterns</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn the basic building blocks of mathematics and how they help us understand 
            patterns in nature, from simple symmetries to complex systems.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="concepts">Core Concepts</TabsTrigger>
            <TabsTrigger value="fundamentals">Deep Dive</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Concept Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {concepts.map((concept, index) => {
                const Icon = concept.icon
                return (
                  <motion.div
                    key={concept.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                          onClick={() => setSelectedConcept(concept.id)}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${concept.color} rounded-lg flex items-center justify-center`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="group-hover:text-primary transition-colors">
                                {concept.title}
                              </CardTitle>
                              <Badge variant="outline" className="mt-1">
                                {concept.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardDescription className="text-base">
                          {concept.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{concept.progress}%</span>
                            </div>
                            <Progress value={concept.progress} className="h-2" />
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Key Topics:</h4>
                            <div className="grid grid-cols-2 gap-1">
                              {concept.topics.map((topic, i) => (
                                <div key={i} className="flex items-center space-x-2 text-xs text-muted-foreground">
                                  {i < 2 ? (
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                  ) : (
                                    <Circle className="w-3 h-3" />
                                  )}
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-center">Mathematical Substrate Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">12,288</div>
                      <div className="text-sm text-muted-foreground">Total Elements</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent">96</div>
                      <div className="text-sm text-muted-foreground">Resonance Patterns</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-500">768</div>
                      <div className="text-sm text-muted-foreground">Cycle Structures</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">48</div>
                      <div className="text-sm text-muted-foreground">Research Pages</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="concepts" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Concept List */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Select a Concept</h3>
                {concepts.map((concept) => {
                  const Icon = concept.icon
                  return (
                    <Card 
                      key={concept.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedConcept === concept.id 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedConcept(concept.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${concept.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{concept.title}</div>
                            <div className="text-sm text-muted-foreground">{concept.difficulty}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Concept Details */}
              <div className="lg:col-span-2">
                {concepts.map((concept) => {
                  const Icon = concept.icon
                  if (concept.id !== selectedConcept) return null
                  
                  return (
                    <motion.div
                      key={concept.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-12 h-12 ${concept.color} rounded-lg flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{concept.title}</CardTitle>
                              <CardDescription className="text-base">
                                {concept.description}
                              </CardDescription>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline">{concept.difficulty}</Badge>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>Progress: {concept.progress}%</span>
                              <Progress value={concept.progress} className="w-20 h-2" />
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">Learning Topics</h4>
                            <div className="grid gap-3">
                              {concept.topics.map((topic, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                                  {i < Math.floor(concept.progress / 25) ? (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-muted-foreground" />
                                  )}
                                  <span className="font-medium">{topic}</span>
                                  {i < Math.floor(concept.progress / 25) && (
                                    <Badge variant="secondary" className="ml-auto">Completed</Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-4">
                            <Button className="flex-1">
                              <Play className="w-4 h-4 mr-2" />
                              Start Learning
                            </Button>
                            <Button variant="outline">
                              View Examples
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fundamentals" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-6 h-6 text-primary" />
                    <span>Fundamental Concepts</span>
                  </CardTitle>
                  <CardDescription>
                    Deep dive into the theoretical foundations of the PrimeOS Mathematical Substrate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {fundamentals.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground whitespace-pre-line pt-4">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}