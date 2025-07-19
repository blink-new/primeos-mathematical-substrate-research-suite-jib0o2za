import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Slider } from '../components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Eye, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Maximize,
  Layers,
  Zap,
  Network,
  Atom
} from 'lucide-react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Visualization Components
function MathematicalSubstrate({ complexity, rotation, showConnections }: { 
  complexity: number
  rotation: boolean
  showConnections: boolean 
}) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current && rotation) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.rotation.x += 0.005
    }
  })

  const elements = []
  const connections = []
  const numElements = Math.floor(complexity * 50)

  // Generate mathematical elements in 3D space
  for (let i = 0; i < numElements; i++) {
    const phi = Math.acos(1 - 2 * (i / numElements))
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    const radius = 3
    
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)
    
    const color = new THREE.Color().setHSL((i / numElements) * 0.8, 0.7, 0.6)
    
    elements.push(
      <Sphere key={i} position={[x, y, z]} args={[0.05]} >
        <meshStandardMaterial color={color} />
      </Sphere>
    )

    // Add connections between nearby elements
    if (showConnections && i > 0 && i % 5 === 0) {
      const prevIndex = i - 5
      const prevPhi = Math.acos(1 - 2 * (prevIndex / numElements))
      const prevTheta = Math.PI * (1 + Math.sqrt(5)) * prevIndex
      
      const prevX = radius * Math.sin(prevPhi) * Math.cos(prevTheta)
      const prevY = radius * Math.sin(prevPhi) * Math.sin(prevTheta)
      const prevZ = radius * Math.cos(prevPhi)
      
      const points = [new THREE.Vector3(prevX, prevY, prevZ), new THREE.Vector3(x, y, z)]
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      
      connections.push(
        <line key={`line-${i}`} geometry={geometry}>
          <lineBasicMaterial color="#3b82f6" opacity={0.3} transparent />
        </line>
      )
    }
  }

  return (
    <group ref={groupRef}>
      {elements}
      {connections}
      <Text
        position={[0, -4, 0]}
        fontSize={0.5}
        color="#6366f1"
        anchorX="center"
        anchorY="middle"
      >
        PrimeOS Mathematical Substrate
      </Text>
    </group>
  )
}

function ResonanceVisualization({ frequency, amplitude }: { frequency: number, amplitude: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  const waves = []
  for (let i = 0; i < 20; i++) {
    const radius = 1 + i * 0.2
    const height = amplitude * Math.sin(frequency * state.clock?.elapsedTime + i * 0.5)
    
    waves.push(
      <mesh key={i} position={[0, height, 0]}>
        <torusGeometry args={[radius, 0.02, 8, 32]} />
        <meshStandardMaterial 
          color={new THREE.Color().setHSL(i / 20, 0.8, 0.6)} 
          transparent 
          opacity={0.7}
        />
      </mesh>
    )
  }

  return <group ref={groupRef}>{waves}</group>
}

function QuantumStateVisualization() {
  const sphereRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
      
      // Quantum superposition effect
      const scale = 1 + 0.2 * Math.sin(state.clock.elapsedTime * 2)
      sphereRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group>
      <Sphere ref={sphereRef} args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.6}
          wireframe
        />
      </Sphere>
      
      {/* Quantum state vectors */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 1.5
        const z = Math.sin(angle) * 1.5
        
        return (
          <Box key={i} position={[x, 0, z]} args={[0.1, 2, 0.1]}>
            <meshStandardMaterial color="#f59e0b" />
          </Box>
        )
      })}
    </group>
  )
}

const visualizations = [
  {
    id: 'substrate',
    title: 'Mathematical Universe',
    description: '3D view of 12,288 mathematical points floating in space like stars',
    icon: Atom,
    color: 'bg-blue-500'
  },
  {
    id: 'resonance',
    title: 'Wave Patterns',
    description: 'Watch beautiful wave patterns dance and interact in 3D space',
    icon: Zap,
    color: 'bg-purple-500'
  },
  {
    id: 'quantum',
    title: 'Quantum Magic',
    description: 'See how quantum particles behave in their mysterious quantum world',
    icon: Network,
    color: 'bg-green-500'
  }
]

export function VisualizationPage() {
  const [selectedViz, setSelectedViz] = useState('substrate')
  const [isPlaying, setIsPlaying] = useState(true)
  const [complexity, setComplexity] = useState([0.5])
  const [showConnections, setShowConnections] = useState(true)
  const [frequency, setFrequency] = useState([1])
  const [amplitude, setAmplitude] = useState([0.5])

  const renderVisualization = () => {
    switch (selectedViz) {
      case 'substrate':
        return (
          <MathematicalSubstrate 
            complexity={complexity[0]} 
            rotation={isPlaying}
            showConnections={showConnections}
          />
        )
      case 'resonance':
        return <ResonanceVisualization frequency={frequency[0]} amplitude={amplitude[0]} />
      case 'quantum':
        return <QuantumStateVisualization />
      default:
        return <MathematicalSubstrate complexity={complexity[0]} rotation={isPlaying} showConnections={showConnections} />
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
              <Eye className="w-4 h-4 mr-2" />
              3D Visualization Lab
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Interactive <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3D Mathematical World</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into a 3D world where mathematical concepts come alive! 
            See patterns, shapes, and connections in beautiful 3D visualizations you can control.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Visualization Selection */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Visualizations</h3>
              {visualizations.map((viz, index) => {
                const Icon = viz.icon
                return (
                  <motion.div
                    key={viz.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedViz === viz.id 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedViz(viz.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 ${viz.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm mb-1">{viz.title}</div>
                            <div className="text-xs text-muted-foreground line-clamp-2">
                              {viz.description}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Settings className="w-4 h-4" />
                  <span>Controls</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex-1"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setComplexity([0.5])
                      setFrequency([1])
                      setAmplitude([0.5])
                    }}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                {selectedViz === 'substrate' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Complexity: {complexity[0].toFixed(2)}</label>
                      <Slider
                        value={complexity}
                        onValueChange={setComplexity}
                        max={1}
                        min={0.1}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="connections"
                        checked={showConnections}
                        onChange={(e) => setShowConnections(e.target.checked)}
                        className="rounded"
                      />
                      <label htmlFor="connections" className="text-sm">Show Connections</label>
                    </div>
                  </>
                )}

                {selectedViz === 'resonance' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Frequency: {frequency[0].toFixed(1)}</label>
                      <Slider
                        value={frequency}
                        onValueChange={setFrequency}
                        max={5}
                        min={0.1}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Amplitude: {amplitude[0].toFixed(2)}</label>
                      <Slider
                        value={amplitude}
                        onValueChange={setAmplitude}
                        max={2}
                        min={0.1}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Info Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Visualization Info</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                {selectedViz === 'substrate' && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Elements:</span>
                      <span className="font-mono">{Math.floor(complexity[0] * 50)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Connections:</span>
                      <span className="font-mono">{showConnections ? Math.floor(complexity[0] * 10) : 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rotation:</span>
                      <span className="font-mono">{isPlaying ? 'Active' : 'Paused'}</span>
                    </div>
                  </div>
                )}
                
                {selectedViz === 'resonance' && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-mono">{frequency[0].toFixed(1)} Hz</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amplitude:</span>
                      <span className="font-mono">{amplitude[0].toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Harmonics:</span>
                      <span className="font-mono">3</span>
                    </div>
                  </div>
                )}
                
                {selectedViz === 'quantum' && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>State:</span>
                      <span className="font-mono">Superposition</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qubits:</span>
                      <span className="font-mono">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entanglement:</span>
                      <span className="font-mono">Active</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* 3D Visualization */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-[600px]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Layers className="w-5 h-5" />
                      <span>{visualizations.find(v => v.id === selectedViz)?.title}</span>
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <Maximize className="w-4 h-4 mr-2" />
                      Fullscreen
                    </Button>
                  </div>
                  <CardDescription>
                    {visualizations.find(v => v.id === selectedViz)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full p-0">
                  <div className="h-[500px] w-full rounded-b-lg overflow-hidden">
                    <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <pointLight position={[-10, -10, -10]} intensity={0.3} />
                      {renderVisualization()}
                      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    </Canvas>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Visualizations</CardTitle>
              <CardDescription>
                Learn how to interpret the mathematical concepts represented in 3D space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="substrate" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="substrate">Mathematical Substrate</TabsTrigger>
                  <TabsTrigger value="resonance">Resonance Patterns</TabsTrigger>
                  <TabsTrigger value="quantum">Quantum States</TabsTrigger>
                </TabsList>
                
                <TabsContent value="substrate" className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      The Mathematical Substrate visualization represents the 12,288-element space as a 3D point cloud. 
                      Each sphere represents a mathematical element, positioned using a Fibonacci spiral to ensure 
                      optimal distribution in 3D space.
                    </p>
                    <ul>
                      <li><strong>Color coding:</strong> Elements are colored based on their position in the sequence</li>
                      <li><strong>Connections:</strong> Lines show relationships between mathematically related elements</li>
                      <li><strong>Complexity:</strong> Controls the number of visible elements for performance</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="resonance" className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Resonance patterns are visualized as concentric waves that demonstrate how mathematical 
                      resonance propagates through the substrate. The visualization shows both fundamental 
                      frequencies and their harmonics.
                    </p>
                    <ul>
                      <li><strong>Frequency:</strong> Controls the base resonance frequency</li>
                      <li><strong>Amplitude:</strong> Adjusts the strength of the resonance effect</li>
                      <li><strong>Harmonics:</strong> Multiple frequencies create complex interference patterns</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="quantum" className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      The quantum state visualization shows how quantum information is encoded and evolves 
                      within the mathematical substrate. The central sphere represents the quantum state, 
                      while surrounding elements show measurement basis vectors.
                    </p>
                    <ul>
                      <li><strong>Superposition:</strong> The wireframe sphere shows quantum state uncertainty</li>
                      <li><strong>Basis vectors:</strong> Golden rods represent measurement directions</li>
                      <li><strong>Evolution:</strong> The pulsing effect shows quantum state evolution over time</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}