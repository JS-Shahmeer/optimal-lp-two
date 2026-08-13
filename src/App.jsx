import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteDevelopment from './pages/WebsiteDevelopment'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteDevelopment />} />
    </Routes>
  )
}

export default App
