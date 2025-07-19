import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Slider } from '../components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Zap, 
  Network, 
  Calculator,
  Atom,
  Activity,
  BarChart3,
  Waves
} from 'lucide-react'
import { motion } from 'framer-motion'

const demos = [
  {
    id: 'resonance',
    title: 'Wave Pattern Explorer',
    description: 'Create and visualize wave patterns - like ripples in a pond but with math!',
    icon: Waves,
    color: 'bg-blue-500',
    difficulty: 'Beginner',
    duration: '5 min'
  },
  {
    id: 'modular',
    title: 'Symmetry Playground',
    description: 'Discover how shapes and patterns can be rotated, flipped, and transformed',
    icon: Calculator,
    color: 'bg-green-500',
    difficulty: 'Intermediate',
    duration: '10 min'
  },
  {
    id: 'quantum',
    title: 'Quantum World Simulator',
    description: 'Explore the strange world of quantum physics where particles can be in multiple places',
    icon: Atom,
    color: 'bg-purple-500',
    difficulty: 'Advanced',
    duration: '15 min'
  },
  {
    id: 'network',
    title: 'Connection Network Explorer',
    description: 'See how mathematical elements connect to each other like a social network',
    icon: Network,
    color: 'bg-orange-500',
    difficulty: 'Intermediate',
    duration: '8 min'
  }
]

export function DemosPage() {
  const [selectedDemo, setSelectedDemo] = useState('resonance')
  const [isPlaying, setIsPlaying] = useState(false)
  const [frequency, setFrequency] = useState([440])
  const [amplitude, setAmplitude] = useState([0.5])
  const [phase, setPhase] = useState([0])
  const [resonanceData, setResonanceData] = useState<number[]>([])

  // Simulate resonance data
  useEffect(() => {
    const generateResonanceData = () => {
      const data = []
      for (let i = 0; i < 100; i++) {
        const x = (i / 100) * 4 * Math.PI
        const value = amplitude[0] * Math.sin(frequency[0] * x / 100 + phase[0]) + 
                     0.3 * Math.sin(2 * frequency[0] * x / 100) +
                     0.1 * Math.sin(3 * frequency[0] * x / 100)
        data.push(value)
      }
      setResonanceData(data)
    }

    generateResonanceData()
  }, [frequency, amplitude, phase])

  const ResonanceDemo = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Parameters</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Frequency: {frequency[0]} Hz</label>
              <Slider
                value={frequency}
                onValueChange={setFrequency}
                max={1000}
                min={100}
                step={10}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Amplitude: {amplitude[0].toFixed(2)}</label>
              <Slider
                value={amplitude}
                onValueChange={setAmplitude}
                max={1}
                min={0.1}
                step={0.1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Phase: {phase[0].toFixed(2)} rad</label>
              <Slider
                value={phase}
                onValueChange={setPhase}
                max={Math.PI * 2}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>

            <div className="flex space-x-2">
              <Button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setFrequency([440])
                  setAmplitude([0.5])
                  setPhase([0])
                }}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Waveform</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d={`M 0 ${96} ${resonanceData.map((value, i) => 
                    `L ${(i / resonanceData.length) * 300} ${96 + value * 40}`
                  ).join(' ')}`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  className={isPlaying ? 'animate-pulse' : ''}
                />
                <path
                  d={`M 0 ${96} ${resonanceData.map((value, i) => 
                    `L ${(i / resonanceData.length) * 300} ${96 + value * 40}`
                  ).join(' ')} L 300 ${96} Z`}
                  fill="url(#waveGradient)"
                  opacity="0.3"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Resonance Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{frequency[0]}</div>
              <div className="text-sm text-muted-foreground">Fundamental Frequency</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-accent">{(frequency[0] * 2).toFixed(0)}</div>
              <div className="text-sm text-muted-foreground">First Harmonic</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-green-500">{(amplitude[0] * 100).toFixed(0)}%</div>
              <div className="text-sm text-muted-foreground">Signal Strength</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ModularDemo = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Modular Group Operations</CardTitle>
          <CardDescription>
            Explore how group operations transform elements in the mathematical substrate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {Array.from({ length: 16 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg border-2 flex items-center justify-center font-mono text-sm transition-all duration-300 cursor-pointer hover:scale-105 ${
                  i % 3 === 0 ? 'bg-primary/10 border-primary' :
                  i % 3 === 1 ? 'bg-accent/10 border-accent' :
                  'bg-muted/30 border-muted'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Button className="flex-1">Apply Rotation</Button>
            <Button variant="outline" className="flex-1">Apply Reflection</Button>
            <Button variant="outline" className="flex-1">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const QuantumDemo = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quantum State Evolution</CardTitle>
          <CardDescription>
            Simulate quantum states and observe their evolution in the substrate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold">|ψ⟩ State</div>
                  <div className="text-sm text-muted-foreground">Quantum Superposition</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">Amplitude</div>
                  <div className="text-primary">0.707 + 0.707i</div>
                </div>
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">Phase</div>
                  <div className="text-accent">π/4</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-semibold">Measurement</div>
                  <div className="text-sm text-muted-foreground">Probability Distribution</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">|0⟩ Probability</div>
                  <div className="text-green-500">50%</div>
                </div>
                <div className="p-2 bg-muted/30 rounded">
                  <div className="font-medium">|1⟩ Probability</div>
                  <div className="text-orange-500">50%</div>
                </div>
              </div>
            </div>
          </div>
          
          <Button className="w-full">
            <Zap className="w-4 h-4 mr-2" />
            Evolve Quantum State
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const NetworkDemo = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Element Network Visualization</CardTitle>
          <CardDescription>
            Explore connections between mathematical elements in the substrate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
            <svg width="100%" height="100%" className="absolute inset-0">
              {/* Network nodes */}
              {Array.from({ length: 20 }, (_, i) => {
                const angle = (i / 20) * 2 * Math.PI
                const radius = 80
                const x = 150 + radius * Math.cos(angle)
                const y = 128 + radius * Math.sin(angle)
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="hsl(var(--primary))"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                )
              })}
              
              {/* Network connections */}
              {Array.from({ length: 15 }, (_, i) => {
                const startAngle = (i / 20) * 2 * Math.PI
                const endAngle = ((i + 3) / 20) * 2 * Math.PI
                const radius = 80
                const x1 = 150 + radius * Math.cos(startAngle)
                const y1 = 128 + radius * Math.sin(startAngle)
                const x2 = 150 + radius * Math.cos(endAngle)
                const y2 = 128 + radius * Math.sin(endAngle)
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )
              })}
            </svg>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-lg font-bold text-primary">20</div>
              <div className="text-muted-foreground">Active Nodes</div>
            </div>
            <div>
              <div className="text-lg font-bold text-accent">15</div>
              <div className="text-muted-foreground">Connections</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-500">3.2</div>
              <div className="text-muted-foreground">Avg Degree</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDemo = () => {
    switch (selectedDemo) {
      case 'resonance':
        return <ResonanceDemo />
      case 'modular':
        return <ModularDemo />
      case 'quantum':
        return <QuantumDemo />
      case 'network':
        return <NetworkDemo />
      default:
        return <ResonanceDemo />
    }
  }

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
              <Play className="w-4 h-4 mr-2" />
              Interactive Demonstrations
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Hands-On <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mathematical Playground</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try interactive experiments that make mathematical concepts fun and easy to understand. 
            Play with patterns, see how they work, and discover the beauty of mathematics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Choose a Demo</h3>
            {demos.map((demo, index) => {
              const Icon = demo.icon
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedDemo === demo.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 ${demo.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm mb-1">{demo.title}</div>
                          <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {demo.description}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {demo.difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{demo.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Demo Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedDemo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {renderDemo()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}