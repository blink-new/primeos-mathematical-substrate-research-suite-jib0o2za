import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Navigation } from './components/layout/Navigation'
import { HomePage } from './pages/HomePage'
import { FoundationsPage } from './pages/FoundationsPage'
import { DemosPage } from './pages/DemosPage'
import { ApplicationsPage } from './pages/ApplicationsPage'
import { VisualizationPage } from './pages/VisualizationPage'
import { LearningPage } from './pages/LearningPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foundations" element={<FoundationsPage />} />
            <Route path="/demos" element={<DemosPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/visualization" element={<VisualizationPage />} />
            <Route path="/learning" element={<LearningPage />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App