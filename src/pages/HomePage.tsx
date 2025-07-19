import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { 
  ArrowRight, 
  Atom, 
  Brain, 
  Zap, 
  Target, 
  BookOpen, 
  Play, 
  Lightbulb,
  Eye,
  GraduationCap,
  Sparkles,
  Database,
  Network,
  Calculator
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: BookOpen,
    title: "Mathematical Foundations",
    description: "Learn the building blocks: patterns, symmetries, and how math describes nature",
    href: "/foundations",
    color: "bg-blue-500"
  },
  {
    icon: Play,
    title: "Interactive Demos",
    description: "Try hands-on experiments with mathematical patterns and see them come alive",
    href: "/demos",
    color: "bg-green-500"
  },
  {
    icon: Lightbulb,
    title: "Real-World Applications",
    description: "See how these mathematical ideas solve problems in science and technology",
    href: "/applications",
    color: "bg-purple-500"
  },
  {
    icon: Eye,
    title: "3D Visualization Lab",
    description: "Explore mathematical concepts through beautiful 3D visualizations",
    href: "/visualization",
    color: "bg-orange-500"
  },
  {
    icon: GraduationCap,
    title: "Learning Journey",
    description: "Step-by-step guided path from beginner to expert",
    href: "/learning",
    color: "bg-pink-500"
  }
]

const stats = [
  { label: "Mathematical Elements", value: "12,288", icon: Calculator },
  { label: "Resonance Patterns", value: "96", icon: Network },
  { label: "Cycle Structures", value: "768", icon: Atom },
  { label: "Research Papers", value: "48", icon: Database }
]

export function HomePage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Mathematical Research Suite
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PrimeOS
              </span>
              <br />
              Mathematical Substrate
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how mathematics can model complex patterns in nature through an interactive learning platform. 
              Explore 12,288 interconnected mathematical elements that help us understand everything from quantum physics to biology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/learning">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/demos">
                  Try Interactive Demo
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore the Mathematical Universe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn complex mathematical ideas through fun interactive experiences, 
              step-by-step guides, and real-world examples that make sense.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <Link to={feature.href}>
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                          Explore
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why PrimeOS Mathematical Substrate?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This research suite represents a breakthrough in mathematical modeling, 
              offering unprecedented insights into complex mathematical structures.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Atom className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Novel Mathematical Framework</h3>
                  <p className="text-muted-foreground">
                    Based on cutting-edge research in resonance algebra and modular group theory, 
                    providing new insights into mathematical structures.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quantum Information Integration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrates quantum information principles with classical mathematical 
                    structures for comprehensive analysis.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Practical Applications</h3>
                  <p className="text-muted-foreground">
                    Real-world applications in physics, biology, and information theory, 
                    bridging theoretical research with practical solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Educational Excellence</h3>
                  <p className="text-muted-foreground">
                    Designed to make complex mathematical concepts accessible through 
                    interactive visualizations and guided learning paths.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Learning Progress</CardTitle>
                  <CardDescription className="text-center">
                    Track your journey through the mathematical substrate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Foundations</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Basic Concepts Completed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Resonance Algebra In Progress</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-muted rounded-full" />
                      <span>Quantum Applications Locked</span>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/learning">Continue Learning</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Explore the Mathematical Universe?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join researchers and students worldwide in discovering the fascinating world 
              of the PrimeOS Mathematical Substrate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/learning">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/foundations">
                  Learn the Foundations
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}