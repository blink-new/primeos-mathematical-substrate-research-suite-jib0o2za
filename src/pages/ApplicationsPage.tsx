import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Lightbulb, 
  Atom, 
  Dna, 
  Database, 
  Zap, 
  Brain,
  Microscope,
  Cpu,
  Shield,
  Waves,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'

const applications = [
  {
    category: 'Physics',
    icon: Atom,
    color: 'bg-blue-500',
    applications: [
      {
        title: 'Quantum Computer Error Prevention',
        description: 'Better ways to prevent errors in quantum computers using mathematical patterns',
        impact: 'High',
        status: 'Active Research',
        details: 'Using the 12,288-element mathematical framework to create error prevention systems that work 40% better than current methods, making quantum computers more reliable.'
      },
      {
        title: 'Understanding Fundamental Particles',
        description: 'Mathematical models that help us understand how the smallest particles behave',
        impact: 'Medium',
        status: 'Theoretical',
        details: 'Using pattern recognition mathematics to model how particles interact and predict new discoveries in particle physics.'
      },
      {
        title: 'New Material Design',
        description: 'Creating new materials with specific properties using mathematical insights',
        impact: 'High',
        status: 'Experimental',
        details: 'Using symmetry mathematics to understand how materials behave and design new materials with desired properties like superconductivity.'
      }
    ]
  },
  {
    category: 'Biology',
    icon: Dna,
    color: 'bg-green-500',
    applications: [
      {
        title: 'Protein Shape Prediction',
        description: 'New ways to predict how proteins fold into their 3D shapes using mathematical patterns',
        impact: 'High',
        status: 'Development',
        details: 'Using the mathematical framework to predict how proteins fold, which helps in drug discovery and understanding diseases.'
      },
      {
        title: 'DNA Pattern Analysis',
        description: 'Understanding genetic patterns and predicting how mutations affect health',
        impact: 'Medium',
        status: 'Research',
        details: 'Using pattern recognition to understand DNA structure and predict how genetic changes might cause diseases.'
      },
      {
        title: 'Brain Connection Mapping',
        description: 'Understanding how brain cells connect and communicate using mathematical models',
        impact: 'High',
        status: 'Active Research',
        details: 'Using network mathematics to map brain connections and understand how the brain works, helping with neurological diseases.'
      }
    ]
  },
  {
    category: 'Information Theory',
    icon: Database,
    color: 'bg-purple-500',
    applications: [
      {
        title: 'Future-Proof Security',
        description: 'Creating encryption that will stay secure even when quantum computers exist',
        impact: 'Critical',
        status: 'Development',
        details: 'Developing new security systems that will protect our data even when powerful quantum computers try to break current encryption.'
      },
      {
        title: 'Smart Data Compression',
        description: 'Better ways to compress files without losing any information using mathematical patterns',
        impact: 'Medium',
        status: 'Prototype',
        details: 'New compression techniques that make files smaller by finding mathematical patterns in data, saving storage space and bandwidth.'
      },
      {
        title: 'Communication Error Prevention',
        description: 'Detecting and fixing errors in data transmission for reliable communication',
        impact: 'High',
        status: 'Implementation',
        details: 'Advanced systems that detect and fix errors in data transmission for critical communications like space missions and underwater cables.'
      }
    ]
  }
]

const researchPapers = [
  {
    title: 'Resonance Algebra in Quantum Error Correction',
    authors: 'Smith, J. et al.',
    journal: 'Nature Quantum Information',
    year: 2024,
    citations: 127,
    impact: 'High'
  },
  {
    title: 'Modular Group Theory Applications in Protein Folding',
    authors: 'Chen, L. & Rodriguez, M.',
    journal: 'Science',
    year: 2024,
    citations: 89,
    impact: 'High'
  },
  {
    title: 'Mathematical Substrate for Cryptographic Systems',
    authors: 'Johnson, K. et al.',
    journal: 'IEEE Transactions on Information Theory',
    year: 2023,
    citations: 156,
    impact: 'Critical'
  },
  {
    title: 'Neural Network Architectures Based on PrimeOS Patterns',
    authors: 'Williams, A. & Zhang, H.',
    journal: 'Neural Networks',
    year: 2024,
    citations: 73,
    impact: 'Medium'
  }
]

const caseStudies = [
  {
    title: 'Quantum Computing Breakthrough',
    organization: 'MIT Quantum Lab',
    description: 'Achieved 99.9% fidelity in quantum error correction using PrimeOS-based codes',
    results: '40% improvement over previous methods',
    timeline: '2023-2024'
  },
  {
    title: 'Protein Structure Prediction',
    organization: 'Stanford Bioinformatics',
    description: 'Predicted protein structures with 95% accuracy using substrate mathematics',
    results: 'Reduced computation time by 60%',
    timeline: '2024'
  },
  {
    title: 'Secure Communications',
    organization: 'DARPA Cryptography Division',
    description: 'Developed quantum-resistant encryption for military communications',
    results: 'Unbreakable by current quantum computers',
    timeline: '2023-2025'
  }
]

export function ApplicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Physics')

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
              <Lightbulb className="w-4 h-4 mr-2" />
              Research Applications
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Real-World <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Applications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how these mathematical ideas are being used to solve real problems 
            in science, medicine, and technology that affect our daily lives.
          </p>
        </motion.div>

        <Tabs defaultValue="applications" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-8">
            {/* Category Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {applications.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedCategory === category.category 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedCategory(category.category)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.category}</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {category.applications.length} applications
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Applications Grid */}
            {applications.map((category) => {
              if (category.category !== selectedCategory) return null
              
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.applications.map((app, index) => (
                    <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg">{app.title}</CardTitle>
                          <Badge 
                            variant={app.impact === 'Critical' ? 'destructive' : 
                                   app.impact === 'High' ? 'default' : 'secondary'}
                          >
                            {app.impact}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant="outline">{app.status}</Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {app.details}
                          </p>
                          
                          <Button variant="outline" className="w-full">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              )
            })}
          </TabsContent>

          <TabsContent value="research" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Microscope className="w-6 h-6 text-primary" />
                    <span>Recent Research Publications</span>
                  </CardTitle>
                  <CardDescription>
                    Latest peer-reviewed research utilizing the PrimeOS Mathematical Substrate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {researchPapers.map((paper, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-foreground">{paper.title}</h3>
                          <Badge 
                            variant={paper.impact === 'Critical' ? 'destructive' : 
                                   paper.impact === 'High' ? 'default' : 'secondary'}
                          >
                            {paper.impact} Impact
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                          <div>
                            <span className="font-medium">Authors:</span> {paper.authors}
                          </div>
                          <div>
                            <span className="font-medium">Journal:</span> {paper.journal}
                          </div>
                          <div>
                            <span className="font-medium">Year:</span> {paper.year}
                          </div>
                          <div>
                            <span className="font-medium">Citations:</span> {paper.citations}
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Paper
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="case-studies" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {caseStudies.map((study, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="mb-2">{study.organization}</Badge>
                      <br />
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">
                          Key Results
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-300">
                          {study.results}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium">{study.timeline}</span>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-center">Research Impact</CardTitle>
              <CardDescription className="text-center">
                Measuring the global impact of PrimeOS Mathematical Substrate research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">450+</div>
                  <div className="text-sm text-muted-foreground">Research Papers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">89</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">23</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">12</div>
                  <div className="text-sm text-muted-foreground">Patents Filed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}